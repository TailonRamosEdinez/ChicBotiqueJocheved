// ============================================================
// 🔥 FIREBASE CONFIG
// ============================================================
const firebaseConfig = {
    apiKey: "AIzaSyDX1RTbinmXDo4hGDgphHdCxZmtNG8RL74",
    authDomain: "chic-butique-test.firebaseapp.com",
    projectId: "chic-butique-test",
    storageBucket: "chic-butique-test.firebasestorage.app",
    messagingSenderId: "925538378396",
    appId: "1:925538378396:web:659722f104ae1173f50359"
};

// Inicializa apenas se ainda não foi inicializado
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// ============================================================
// ESTADO GLOBAL
// ============================================================
let todosProdutos = [];       // cache de todos os produtos vindos do Firestore
let produtoAtualDocId = null; // docId do produto aberto no modal

// ============================================================
// CARREGAR PRODUTOS DO FIRESTORE
// ============================================================
async function carregarProdutos() {
    const grid = document.getElementById("produtosGrid");
    if (!grid) return;

    // Skeleton loading
    grid.innerHTML = Array(6).fill(`
        <div class="produto-card" style="opacity:0.4;pointer-events:none;">
            <div class="produto-imagem" style="background:#eee;display:flex;align-items:center;justify-content:center;min-height:200px;">
                <span style="font-size:60px;">⏳</span>
            </div>
            <div class="produto-descricao" style="padding:12px;">
                <div style="height:14px;background:#eee;border-radius:4px;margin-bottom:8px;width:50%;"></div>
                <div style="height:18px;background:#eee;border-radius:4px;margin-bottom:8px;"></div>
                <div style="height:14px;background:#eee;border-radius:4px;margin-bottom:12px;"></div>
                <div style="height:36px;background:#eee;border-radius:4px;"></div>
            </div>
        </div>
    `).join("");

    try {
        const snapshot = await db.collection("produtos")
            .orderBy("criadoEm", "desc")
            .get();

        todosProdutos = [];
        snapshot.forEach((doc) => {
            todosProdutos.push({ docId: doc.id, ...doc.data() });
        });

        renderizarProdutos(todosProdutos);
        atualizarContadorCarrinho();

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#f44336;">
                <p style="font-size:18px;">❌ Erro ao carregar produtos.</p>
                <p style="font-size:14px;color:#999;">${error.message}</p>
                <button onclick="carregarProdutos()" style="margin-top:16px;padding:10px 24px;background:var(--primary-color);color:white;border:none;border-radius:4px;cursor:pointer;font-size:14px;">
                    🔄 Tentar novamente
                </button>
            </div>
        `;
    }
}

// ============================================================
// RENDERIZAR LISTA DE PRODUTOS
// ============================================================
function renderizarProdutos(lista) {
    const grid = document.getElementById("produtosGrid");
    if (!grid) return;

    grid.innerHTML = "";

    if (lista.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#999;">
                <div style="font-size:60px;margin-bottom:16px;">🔍</div>
                <p style="font-size:18px;">Nenhum produto encontrado.</p>
                <p style="font-size:14px;">Tente outros filtros.</p>
            </div>
        `;
        return;
    }

    lista.forEach((produto) => {
        const card = document.createElement("div");
        card.className = "produto-card";

        // Imagem: base64 ou emoji
        let imgConteudo;
        if (produto.imagem && (produto.imagem.startsWith("http") || produto.imagem.startsWith("data:image"))) {
            imgConteudo = `<img src="${produto.imagem}" alt="${produto.nome}"
                style="width:100%;height:100%;object-fit:cover;">`;
        } else {
            imgConteudo = `<span style="font-size:80px;">${produto.imagem || "🛍️"}</span>`;
        }

        const badgeHTML = produto.badge
            ? `<span class="produto-badge">${produto.badge}</span>`
            : "";

        const precoFormatado = Number(produto.preco).toFixed(2).replace(".", ",");

        card.innerHTML = `
            <div class="produto-imagem">
                <div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;overflow:hidden;">
                    ${imgConteudo}
                </div>
                ${badgeHTML}
            </div>
            <div class="produto-descricao">
                <p class="produto-categoria">${produto.categoria}</p>
                <h3 class="produto-nome">${produto.nome}</h3>
                <div class="produto-preco">R$ ${precoFormatado}</div>
                <div class="produto-avaliacao">⭐ ${produto.avaliacao}</div>
                <div class="produto-botoes">
                    <button class="btn-ver-detalhes" onclick="abrirDetalhes('${produto.docId}')">Ver Detalhes</button>
                    <button class="btn-favoritar" onclick="adicionarAosFavoritos('${produto.docId}')">♥</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================================
// ABRIR DETALHES DO PRODUTO (modal)
// ============================================================
async function abrirDetalhes(docId) {
    try {
        // Primeiro tenta achar no cache
        let produto = todosProdutos.find(p => p.docId === docId);

        // Se não estiver no cache, busca no Firestore
        if (!produto) {
            const doc = await db.collection("produtos").doc(docId).get();
            if (!doc.exists) { alert("Produto não encontrado."); return; }
            produto = { docId: doc.id, ...doc.data() };
        }

        // Preencher imagem
        const modalImg = document.getElementById("modalImg");
        if (modalImg) {
            if (produto.imagem && (produto.imagem.startsWith("http") || produto.imagem.startsWith("data:image"))) {
                modalImg.src = produto.imagem;
                modalImg.style.display = "block";
                modalImg.style.fontSize = "";
            } else {
                modalImg.src = "";
                modalImg.style.display = "block";
                modalImg.style.fontSize = "100px";
                modalImg.style.textAlign = "center";
                modalImg.style.lineHeight = "300px";
                modalImg.textContent = produto.imagem || "🛍️";
            }
        }

        // Preencher textos
        const nome = document.getElementById("modalNome");
        const desc = document.getElementById("modalDescricao");
        const preco = document.getElementById("modalPreco");

        if (nome) nome.textContent = produto.nome;
        if (desc) desc.textContent = produto.descricao;
        if (preco) preco.textContent = `R$ ${Number(produto.preco).toFixed(2).replace(".", ",")}`;

        // Preencher tamanhos
        const tamanhoSel = document.getElementById("tamanhoSelect");
        if (tamanhoSel && produto.tamanhos) {
            tamanhoSel.innerHTML = produto.tamanhos
                .map(t => `<option value="${t}">${t}</option>`)
                .join("");
        }

        // Preencher cor
        const corSel = document.getElementById("corSelect");
        if (corSel && produto.cor) {
            corSel.innerHTML = `<option value="${produto.cor}">${produto.cor}</option>`;
        }

        // Guardar referência para o carrinho
        window.produtoAtual = produto;
        produtoAtualDocId = docId;

        // Abrir modal
        const modal = document.getElementById("produtoModal");
        if (modal) {
            modal.classList.add("show");
            modal.style.display = "flex";
        }

    } catch (error) {
        console.error("Erro ao abrir detalhes:", error);
        alert("Erro ao carregar detalhes do produto.");
    }
}

// ============================================================
// FECHAR MODAIS
// ============================================================
document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".modal");
        if (modal) {
            modal.classList.remove("show");
            modal.style.display = "none";
        }
    });
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
        e.target.style.display = "none";
    }
});

// ============================================================
// CARRINHO DE COMPRAS
// ============================================================
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarContadorCarrinho() {
    const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const contador = document.querySelector(".cart-count");
    if (contador) contador.textContent = total;
}

function adicionarAoCarrinho() {
    if (!window.produtoAtual) return;

    const quantidade = parseInt(document.getElementById("quantidadeSelect")?.value || 1);
    const tamanho = document.getElementById("tamanhoSelect")?.value || "M";
    const cor = document.getElementById("corSelect")?.value || window.produtoAtual.cor;

    const itemCarrinho = {
        id: produtoAtualDocId,
        nome: window.produtoAtual.nome,
        preco: window.produtoAtual.preco,
        precoUnitario: window.produtoAtual.preco,
        imagem: window.produtoAtual.imagem,
        quantidade,
        tamanho,
        cor
    };

    const existente = carrinho.find(
        item => item.id === itemCarrinho.id &&
                item.tamanho === tamanho &&
                item.cor === cor
    );

    if (existente) {
        existente.quantidade += quantidade;
    } else {
        carrinho.push(itemCarrinho);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();

    // Fechar modal
    const modal = document.getElementById("produtoModal");
    if (modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
    }

    alert(`✅ "${window.produtoAtual.nome}" adicionado ao carrinho!`);
}

function abrirCarrinho() {
    const modal = document.getElementById("carrinhoModal");
    const carrinhoItems = document.getElementById("carrinhoItems");
    if (!modal || !carrinhoItems) return;

    carrinhoItems.innerHTML = "";
    let total = 0;

    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p style="text-align:center;color:#999;">Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach((item, index) => {
            const precoItem = (item.precoUnitario || item.preco) * item.quantidade;
            total += precoItem;

            let imgHTML;
            if (item.imagem && item.imagem.startsWith("data:image")) {
                imgHTML = `<img src="${item.imagem}" style="width:100%;height:100%;object-fit:cover;">`;
            } else {
                imgHTML = `<span style="font-size:30px;">${item.imagem || "🛍️"}</span>`;
            }

            const itemEl = document.createElement("div");
            itemEl.className = "carrinho-item";
            itemEl.innerHTML = `
                <div class="carrinho-item-img" style="overflow:hidden;">${imgHTML}</div>
                <div class="carrinho-item-detalhes">
                    <h4>${item.nome}</h4>
                    <p>${item.tamanho} - ${item.cor}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <div class="carrinho-item-preco">
                    R$ ${precoItem.toFixed(2).replace(".", ",")}<br>
                    <button onclick="removerDoCarrinho(${index})"
                        style="margin-top:10px;padding:5px 10px;background:#d32f2f;color:white;border:none;border-radius:3px;cursor:pointer;">
                        Remover
                    </button>
                </div>
            `;
            carrinhoItems.appendChild(itemEl);
        });
    }

    document.getElementById("totalPrice").textContent = total.toFixed(2).replace(".", ",");
    modal.classList.add("show");
    modal.style.display = "flex";
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    abrirCarrinho();
}

function irParaPagamento() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    const total = carrinho
        .reduce((acc, item) => acc + (item.precoUnitario || item.preco) * item.quantidade, 0)
        .toFixed(2).replace(".", ",");
    alert(`Redirecionando para pagamento...\n\nTotal: R$ ${total}`);
}

// ============================================================
// FAVORITOS
// ============================================================
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function adicionarAosFavoritos(docId) {
    const index = favoritos.indexOf(docId);
    if (index > -1) {
        favoritos.splice(index, 1);
    } else {
        favoritos.push(docId);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// ============================================================
// FILTROS (aplicados localmente no cache)
// ============================================================
function aplicarFiltros() {
    const categoria = document.getElementById("categoria")?.value || "";
    const preco = document.getElementById("preco")?.value || "";
    const tamanho = document.getElementById("tamanho")?.value || "";
    const cor = document.getElementById("cor")?.value || "";

    let filtrados = todosProdutos.filter(p => {
        if (categoria && p.categoria !== categoria) return false;
        if (cor && p.cor.toLowerCase() !== cor.toLowerCase()) return false;
        if (tamanho && !(p.tamanhos || []).includes(tamanho)) return false;

        if (preco) {
            const partes = preco.split("-").map(Number);
            const [min, max] = partes;
            if (max) {
                if (p.preco < min || p.preco > max) return false;
            } else {
                if (p.preco < min) return false;
            }
        }

        return true;
    });

    renderizarProdutos(filtrados);
}

// ============================================================
// EVENT LISTENERS
// ============================================================
const cartBtn = document.querySelector(".cart-count")?.parentElement;
if (cartBtn) {
    cartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        abrirCarrinho();
    });
}

// ============================================================
// INICIALIZAR
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos();
});
