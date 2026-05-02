// ========== SHARED UTILITIES ==========

// Dados dos Produtos
let produtos = [
  {
    id: 1,
    nome: "Vestido Elegante Preto",
    categoria: "vestidos",
    preco: 249.9,
    imagem: "👗",
    descricao:
      "Vestido preto elegante com acabamento sofisticado. Perfeito para ocasiões especiais.",
    cor: "Preto",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    avaliacao: 4.8,
    badge: "Top Vendedor",
  },
  {
    id: 2,
    nome: "Blusa Branca Premium",
    categoria: "blusas",
    preco: 129.9,
    imagem: "👔",
    descricao:
      "Blusa branca de algodão premium. Versátil e confortável para o dia a dia.",
    cor: "Branco",
    tamanhos: ["P", "M", "G", "GG"],
    avaliacao: 4.5,
    badge: "Novo",
  },
  {
    id: 3,
    nome: "Calça Jeans Cintura Alta",
    categoria: "calcas",
    preco: 179.9,
    imagem: "👖",
    descricao:
      "Calça jeans com cintura alta, ajuste perfeito e conforto duradouro.",
    cor: "Azul",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    avaliacao: 4.7,
    badge: null,
  },
  {
    id: 4,
    nome: "Saia Rodada Vermelho",
    categoria: "saias",
    preco: 189.9,
    imagem: "🎀",
    descricao:
      "Saia rodada em vermelho vibrante. Ideal para looks festivos e casuais.",
    cor: "Vermelho",
    tamanhos: ["P", "M", "G"],
    avaliacao: 4.6,
    badge: null,
  },
  {
    id: 5,
    nome: "Jaqueta de Couro Preta",
    categoria: "jaquetas",
    preco: 349.9,
    imagem: "🧥",
    descricao: "Jaqueta de couro genuíno preta. Combina com qualquer look.",
    cor: "Preto",
    tamanhos: ["PP", "P", "M", "G"],
    avaliacao: 4.9,
    badge: "Premium",
  },
  {
    id: 6,
    nome: "Blusa Rosa Pálido",
    categoria: "blusas",
    preco: 99.9,
    imagem: "👕",
    descricao: "Blusa em rosa pálido suave. Perfeita para looks minimalistas.",
    cor: "Rosa",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    avaliacao: 4.4,
    badge: "Promoção",
  },
  {
    id: 7,
    nome: "Vestido Azul Marinho",
    categoria: "vestidos",
    preco: 219.9,
    imagem: "👗",
    descricao:
      "Vestido azul marinho com detalhe em rendilhado. Sofisticado e moderno.",
    cor: "Azul",
    tamanhos: ["P", "M", "G", "GG"],
    avaliacao: 4.7,
    badge: "Top Vendedor",
  },
  {
    id: 8,
    nome: "Calça Branca Social",
    categoria: "calcas",
    preco: 199.9,
    imagem: "👖",
    descricao:
      "Calça branca de corte social. Elegância e conforto em um só produto.",
    cor: "Branco",
    tamanhos: ["P", "M", "G"],
    avaliacao: 4.6,
    badge: null,
  },
  {
    id: 9,
    nome: "Saia Plissada Preta",
    categoria: "saias",
    preco: 169.9,
    imagem: "🎀",
    descricao: "Saia plissada em preto. Clássica e versátil.",
    cor: "Preto",
    tamanhos: ["P", "M", "G", "GG"],
    avaliacao: 4.5,
    badge: null,
  },
  {
    id: 10,
    nome: "Jaqueta Jeans Azul",
    categoria: "jaquetas",
    preco: 229.9,
    imagem: "🧥",
    descricao:
      "Jaqueta jeans azul clássica. Essencial para qualquer guarda-roupa.",
    cor: "Azul",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    avaliacao: 4.8,
    badge: "Top Vendedor",
  },
  {
    id: 11,
    nome: "Blusa de Seda Estampada",
    categoria: "blusas",
    preco: 159.9,
    imagem: "👔",
    descricao:
      "Blusa de seda com estampa exclusiva. Sofisticada e confortável.",
    cor: "Multicolor",
    tamanhos: ["P", "M", "G"],
    avaliacao: 4.7,
    badge: "Novo",
  },
  {
    id: 12,
    nome: "Acessório Bolsa Preta",
    categoria: "acessorios",
    preco: 299.9,
    imagem: "👜",
    descricao: "Bolsa preta de couro. Elegante e espaçosa.",
    cor: "Preto",
    tamanhos: ["Único"],
    avaliacao: 4.9,
    badge: "Premium",
  },
  {
    id: 13,
    nome: "Vestido Festa Rosa",
    categoria: "vestidos",
    preco: 329.9,
    imagem: "👗",
    descricao: "Vestido para festas em rosa. Com brilho e sofisticação.",
    cor: "Rosa",
    tamanhos: ["P", "M", "G"],
    avaliacao: 4.9,
    badge: "Premium",
  },
  {
    id: 14,
    nome: "Blusa Gola Alta Branca",
    categoria: "blusas",
    preco: 119.9,
    imagem: "👕",
    descricao: "Blusa gola alta em branco puro. Elegância e conforto.",
    cor: "Branco",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    avaliacao: 4.6,
    badge: null,
  },
  {
    id: 15,
    nome: "Calça Legging Cinza",
    categoria: "calcas",
    preco: 79.9,
    imagem: "👖",
    descricao: "Legging cinza confortável. Perfeita para o dia a dia.",
    cor: "Cinza",
    tamanhos: ["P", "M", "G", "GG"],
    avaliacao: 4.4,
    badge: "Promoção",
  },
];

// Carrinho
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Favoritos
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Função para salvar carrinho
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

// Função para atualizar contador
function atualizarContadorCarrinho() {
  const contador = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const cartCountElements = document.querySelectorAll(".cart-count");
  cartCountElements.forEach((el) => {
    el.textContent = contador;
  });
}

// Fechar modals
function fecharModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
  }
}

// Abrir modal
function abrirModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
  }
}

/**
 * Retorna o HTML adequado para a imagem do produto.
 * Suporta emojis (usados no mock inicial) e imagens em Base64 ou caminhos de arquivo.
 */
function getImagemHTML(imagem, style = "") {
  if (!imagem) return "📦";

  // Verifica se é uma imagem Base64 ou um caminho de arquivo
  if (
    imagem.startsWith("data:image/") ||
    imagem.includes(".") ||
    imagem.includes("/")
  ) {
    return `<img src="${imagem}" alt="Produto" style="${style} max-width: 100%; max-height: 100%; object-fit: contain;">`;
  }

  // Caso contrário, trata como emoji/texto
  return `<span style="${style}">${imagem}</span>`;
}

// Inicializar contadores ao carregar página
document.addEventListener("DOMContentLoaded", () => {
  // Carregar produtos do localStorage se existirem
  const produtosLocalStorage = localStorage.getItem("produtosAdicionados");
  if (produtosLocalStorage) {
    try {
      // Limpar produtos padrão e carregar do localStorage
      produtos.length = 0;
      const produtosCarregados = JSON.parse(produtosLocalStorage);
      produtos.push(...produtosCarregados);
    } catch (e) {
      console.log("Usando produtos padrão");
    }
  }

  atualizarContadorCarrinho();
});

// Fechar modal ao clicar no X ou fora
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    e.target.closest(".modal").classList.remove("show");
  }
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("show");
  }
});
