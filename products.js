// ========== DADOS DOS PRODUTOS ==========
const produtos = [
    {
        id: 1,
        nome: "Vestido Elegante Preto",
        categoria: "vestidos",
        preco: 249.90,
        imagem: "👗",
        descricao: "Vestido preto elegante com acabamento sofisticado. Perfeito para ocasiões especiais.",
        cor: "Preto",
        tamanhos: ["PP", "P", "M", "G", "GG"],
        avaliacao: 4.8,
        badge: "Top Vendedor"
    },
    {
        id: 2,
        nome: "Blusa Branca Premium",
        categoria: "blusas",
        preco: 129.90,
        imagem: "👔",
        descricao: "Blusa branca de algodão premium. Versátil e confortável para o dia a dia.",
        cor: "Branco",
        tamanhos: ["P", "M", "G", "GG"],
        avaliacao: 4.5,
        badge: "Novo"
    },
    {
        id: 3,
        nome: "Calça Jeans Cintura Alta",
        categoria: "calcas",
        preco: 179.90,
        imagem: "👖",
        descricao: "Calça jeans com cintura alta, ajuste perfeito e conforto duradouro.",
        cor: "Azul",
        tamanhos: ["PP", "P", "M", "G", "GG"],
        avaliacao: 4.7,
        badge: null
    },
    {
        id: 4,
        nome: "Saia Rodada Vermelho",
        categoria: "saias",
        preco: 189.90,
        imagem: "🎀",
        descricao: "Saia rodada em vermelho vibrante. Ideal para looks festivos e casuais.",
        cor: "Vermelho",
        tamanhos: ["P", "M", "G"],
        avaliacao: 4.6,
        badge: null
    },
    {
        id: 5,
        nome: "Jaqueta de Couro Preta",
        categoria: "jaquetas",
        preco: 349.90,
        imagem: "🧥",
        descricao: "Jaqueta de couro genuíno preta. Combina com qualquer look.",
        cor: "Preto",
        tamanhos: ["PP", "P", "M", "G"],
        avaliacao: 4.9,
        badge: "Premium"
    },
    {
        id: 6,
        nome: "Blusa Rosa Pálido",
        categoria: "blusas",
        preco: 99.90,
        imagem: "👕",
        descricao: "Blusa em rosa pálido suave. Perfeita para looks minimalistas.",
        cor: "Rosa",
        tamanhos: ["PP", "P", "M", "G", "GG"],
        avaliacao: 4.4,
        badge: "Promoção"
    },
    {
        id: 7,
        nome: "Vestido Azul Marinho",
        categoria: "vestidos",
        preco: 219.90,
        imagem: "👗",
        descricao: "Vestido azul marinho com detalhe em rendilhado. Sofisticado e moderno.",
        cor: "Azul",
        tamanhos: ["P", "M", "G", "GG"],
        avaliacao: 4.7,
        badge: "Top Vendedor"
    },
    {
        id: 8,
        nome: "Calça Branca Social",
        categoria: "calcas",
        preco: 199.90,
        imagem: "👖",
        descricao: "Calça branca de corte social. Elegância e conforto em um só produto.",
        cor: "Branco",
        tamanhos: ["P", "M", "G"],
        avaliacao: 4.6,
        badge: null
    },
    {
        id: 9,
        nome: "Saia Plissada Preta",
        categoria: "saias",
        preco: 169.90,
        imagem: "🎀",
        descricao: "Saia plissada em preto. Clássica e versátil.",
        cor: "Preto",
        tamanhos: ["P", "M", "G", "GG"],
        avaliacao: 4.5,
        badge: null
    },
    {
        id: 10,
        nome: "Jaqueta Jeans Azul",
        categoria: "jaquetas",
        preco: 229.90,
        imagem: "🧥",
        descricao: "Jaqueta jeans azul clássica. Essencial para qualquer guarda-roupa.",
        cor: "Azul",
        tamanhos: ["PP", "P", "M", "G", "GG"],
        avaliacao: 4.8,
        badge: "Top Vendedor"
    },
    {
        id: 11,
        nome: "Blusa de Seda Estampada",
        categoria: "blusas",
        preco: 159.90,
        imagem: "👔",
        descricao: "Blusa de seda com estampa exclusiva. Sofisticada e confortável.",
        cor: "Multicolor",
        tamanhos: ["P", "M", "G"],
        avaliacao: 4.7,
        badge: "Novo"
    },
    {
        id: 12,
        nome: "Acessório Bolsa Preta",
        categoria: "acessorios",
        preco: 299.90,
        imagem: "👜",
        descricao: "Bolsa preta de couro. Elegante e espaçosa.",
        cor: "Preto",
        tamanhos: ["Único"],
        avaliacao: 4.9,
        badge: "Premium"
    },
    {
        id: 13,
        nome: "Vestido Festa Rosa",
        categoria: "vestidos",
        preco: 329.90,
        imagem: "👗",
        descricao: "Vestido para festas em rosa. Com brilho e sofisticação.",
        cor: "Rosa",
        tamanhos: ["P", "M", "G"],
        avaliacao: 4.9,
        badge: "Premium"
    },
    {
        id: 14,
        nome: "Blusa Gola Alta Branca",
        categoria: "blusas",
        preco: 119.90,
        imagem: "👕",
        descricao: "Blusa gola alta em branco puro. Elegância e conforto.",
        cor: "Branco",
        tamanhos: ["PP", "P", "M", "G", "GG"],
        avaliacao: 4.6,
        badge: null
    },
    {
        id: 15,
        nome: "Calça Legging Cinza",
        categoria: "calcas",
        preco: 79.90,
        imagem: "👖",
        descricao: "Legging cinza confortável. Perfeita para o dia a dia.",
        cor: "Cinza",
        tamanhos: ["P", "M", "G", "GG"],
        avaliacao: 4.4,
        badge: "Promoção"
    }
];

// ========== RENDERIZAR PRODUTOS ==========
function renderizarProdutos(produtosParaExibir = produtos) {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    produtosParaExibir.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        card.innerHTML = `
            <div class="produto-imagem">
                ${produto.imagem}
                ${produto.badge ? `<span class="produto-badge">${produto.badge}</span>` : ''}
            </div>
            <div class="produto-descricao">
                <p class="produto-categoria">${produto.categoria}</p>
                <h3 class="produto-nome">${produto.nome}</h3>
                <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                <div class="produto-avaliacao">⭐ ${produto.avaliacao}</div>
                <div class="produto-botoes">
                    <button class="btn-ver-detalhes" onclick="abrirDetalhes(${produto.id})">Ver Detalhes</button>
                    <button class="btn-favoritar" onclick="adicionarAosFavoritos(${produto.id})">♥</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ========== ABRIR DETALHES DO PRODUTO ==========
function abrirDetalhes(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    document.getElementById('modalImg').src = '#';
    document.getElementById('modalImg').textContent = produto.imagem;
    document.getElementById('modalImg').style.fontSize = '100px';
    document.getElementById('modalImg').style.textAlign = 'center';
    document.getElementById('modalImg').style.lineHeight = '300px';
    document.getElementById('modalNome').textContent = produto.nome;
    document.getElementById('modalDescricao').textContent = produto.descricao;
    document.getElementById('modalPreco').textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;

    // Armazenar produto atual para adicionar ao carrinho
    window.produtoAtual = produto;

    // Abrir modal
    const modal = document.getElementById('produtoModal');
    modal.classList.add('show');
}

// ========== FECHAR MODALS ==========
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('show');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// ========== CARRINHO DE COMPRAS ==========
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarContadorCarrinho() {
    const contador = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.querySelector('.cart-count').textContent = contador;
}

function adicionarAoCarrinho() {
    if (!window.produtoAtual) return;

    const quantidade = parseInt(document.getElementById('quantidadeSelect').value);
    const tamanho = document.getElementById('tamanhoSelect').value;
    const cor = document.getElementById('corSelect').value;

    const itemCarrinho = {
        ...window.produtoAtual,
        quantidade,
        tamanho,
        cor,
        precoUnitario: window.produtoAtual.preco
    };

    // Verificar se produto já existe no carrinho
    const itemExistente = carrinho.find(
        item => item.id === itemCarrinho.id && item.tamanho === tamanho && item.cor === cor
    );

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push(itemCarrinho);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();

    // Fechar modal e mostrar mensagem
    document.getElementById('produtoModal').classList.remove('show');
    alert(`${window.produtoAtual.nome} adicionado ao carrinho!`);
}

function abrirCarrinho() {
    const modal = document.getElementById('carrinhoModal');
    const carrinhoItems = document.getElementById('carrinhoItems');
    carrinhoItems.innerHTML = '';

    let total = 0;

    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p style="text-align: center; color: #999;">Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach((item, index) => {
            const precoItem = item.precoUnitario * item.quantidade;
            total += precoItem;

            const itemElement = document.createElement('div');
            itemElement.className = 'carrinho-item';
            itemElement.innerHTML = `
                <div class="carrinho-item-img">${item.imagem}</div>
                <div class="carrinho-item-detalhes">
                    <h4>${item.nome}</h4>
                    <p>${item.tamanho} - ${item.cor}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <div class="carrinho-item-preco">
                    R$ ${precoItem.toFixed(2).replace('.', ',')}<br>
                    <button onclick="removerDoCarrinho(${index})" style="margin-top: 10px; padding: 5px 10px; background: #d32f2f; color: white; border: none; border-radius: 3px; cursor: pointer;">Remover</button>
                </div>
            `;
            carrinhoItems.appendChild(itemElement);
        });
    }

    document.getElementById('totalPrice').textContent = total.toFixed(2).replace('.', ',');
    modal.classList.add('show');
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    abrirCarrinho(); // Reabrir para atualizar
}

function irParaPagamento() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Redirecionando para pagamento...\n\nTotal: R$ ' + 
          carrinho.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0).toFixed(2).replace('.', ','));
}

// ========== FAVORITOS ==========
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

function adicionarAosFavoritos(id = null) {
    const produtoId = id || (window.produtoAtual ? window.produtoAtual.id : null);
    if (!produtoId) return;

    const index = favoritos.indexOf(produtoId);
    if (index > -1) {
        favoritos.splice(index, 1);
    } else {
        favoritos.push(produtoId);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// ========== FILTROS ==========
function aplicarFiltros() {
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;
    const tamanho = document.getElementById('tamanho').value;
    const cor = document.getElementById('cor').value;

    let produtosFiltrados = produtos.filter(p => {
        // Filtro de categoria
        if (categoria && p.categoria !== categoria) return false;

        // Filtro de cor
        if (cor && p.cor !== cor) return false;

        // Filtro de tamanho
        if (tamanho && !p.tamanhos.includes(tamanho)) return false;

        // Filtro de preço
        if (preco) {
            const [min, max] = preco.split('-').map(Number);
            if (max) {
                if (p.preco < min || p.preco > max) return false;
            } else {
                if (p.preco < min) return false;
            }
        }

        return true;
    });

    renderizarProdutos(produtosFiltrados);
}

// ========== EVENT LISTENERS ==========
document.querySelector('.cart-count').parentElement.addEventListener('click', (e) => {
    e.preventDefault();
    abrirCarrinho();
});

// ========== INICIALIZAR ==========
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarContadorCarrinho();
});
