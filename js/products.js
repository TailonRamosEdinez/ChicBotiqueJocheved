// ========== RENDERIZAR PRODUTOS ==========

function renderizarProdutos(produtosParaExibir = produtos) {
  const grid = document.getElementById("produtosGrid");

  if (!grid) return;

  grid.innerHTML = "";

  if (produtosParaExibir.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">Nenhum produto encontrado</p>';
    return;
  }

  produtosParaExibir.forEach((produto) => {
    const card = document.createElement("div");
    card.className = "produto-card";
    card.innerHTML = `
            <div class="produto-imagem">
                ${getImagemHTML(produto.imagem)}
                ${produto.badge ? `<span class="produto-badge">${produto.badge}</span>` : ""}
            </div>
            <div class="produto-descricao">
                <p class="produto-categoria">${produto.categoria}</p>
                <h3 class="produto-nome">${produto.nome}</h3>
                <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</div>
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
  const produto = produtos.find((p) => p.id === id);
  if (!produto) return;

  const modalImg = document.getElementById("modalImg");
  if (modalImg) {
    const imgHTML = getImagemHTML(produto.imagem, "font-size: 100px;");

    // Verifica se o elemento é uma tag <img> (comum no index.html) ou <div> (comum em produtos.html)
    if (modalImg.tagName.toLowerCase() === "img") {
      if (
        produto.imagem.startsWith("data:image/") ||
        produto.imagem.includes(".")
      ) {
        // Se for uma imagem real, atualizamos o src
        modalImg.src = produto.imagem;
        modalImg.style.display = "block";
        modalImg.style.margin = "0 auto";
        modalImg.style.maxHeight = "300px";
      } else {
        // Se for um emoji, substituímos a tag <img> por uma <div> para suportar o texto do emoji
        const div = document.createElement("div");
        div.id = "modalImg";
        div.innerHTML = imgHTML;
        div.style.cssText =
          "width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; background: #f9f9f9; border-radius: 4px;";
        modalImg.parentNode.replaceChild(div, modalImg);
      }
    } else {
      // Caso seja uma <div>, basta atualizar o innerHTML
      modalImg.innerHTML = imgHTML;
      modalImg.style.display = "flex";
      modalImg.style.alignItems = "center";
      modalImg.style.justifyContent = "center";
    }
  }

  const modalNome = document.getElementById("modalNome");
  const modalDescricao = document.getElementById("modalDescricao");
  const modalPreco = document.getElementById("modalPreco");

  if (modalNome) modalNome.textContent = produto.nome;
  if (modalDescricao) modalDescricao.textContent = produto.descricao;
  if (modalPreco)
    modalPreco.textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

  // Armazenar produto atual para adicionar ao carrinho
  window.produtoAtual = produto;

  // Abrir modal
  abrirModal("produtoModal");
}

// ========== FAVORITOS ==========
function adicionarAosFavoritos(id = null) {
  const produtoId = id || (window.produtoAtual ? window.produtoAtual.id : null);
  if (!produtoId) return;

  const index = favoritos.indexOf(produtoId);
  if (index > -1) {
    favoritos.splice(index, 1);
    alert("Removido dos favoritos!");
  } else {
    favoritos.push(produtoId);
    alert("Adicionado aos favoritos!");
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// ========== BUSCA DE PRODUTOS ==========
function buscarProdutos(termo) {
  if (!termo.trim()) {
    renderizarProdutos(produtos);
    return;
  }

  const resultados = produtos.filter(
    (p) =>
      p.nome.toLowerCase().includes(termo.toLowerCase()) ||
      p.descricao.toLowerCase().includes(termo.toLowerCase()) ||
      p.categoria.toLowerCase().includes(termo.toLowerCase()),
  );

  renderizarProdutos(resultados);
}

// ========== FILTROS ==========
function aplicarFiltros() {
  const categoria = document.getElementById("categoria")?.value || "";
  const preco = document.getElementById("preco")?.value || "";
  const tamanho = document.getElementById("tamanho")?.value || "";
  const cor = document.getElementById("cor")?.value || "";

  let produtosFiltrados = produtos.filter((p) => {
    // Filtro de categoria
    if (categoria && p.categoria !== categoria) return false;

    // Filtro de cor
    if (cor && p.cor !== cor) return false;

    // Filtro de tamanho
    if (tamanho && !p.tamanhos.includes(tamanho)) return false;

    // Filtro de preço
    if (preco) {
      const [min, max] = preco.split("-").map(Number);
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

// ========== INICIALIZAR ==========
document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();

  // Event listeners para filtros
  const filterBtn = document.querySelector(
    'button[onclick="aplicarFiltros()"]',
  );
  if (filterBtn) {
    filterBtn.addEventListener("click", aplicarFiltros);
  }
});
