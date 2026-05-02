// ========== SISTEMA DE TRADUÇÃO SIMPLES ==========

const translations = {
  'Home': { 'en': 'Home', 'es': 'Inicio' },
  'Produtos': { 'en': 'Products', 'es': 'Productos' },
  'Coleções': { 'en': 'Collections', 'es': 'Colecciones' },
  'Sobre': { 'en': 'About', 'es': 'Acerca de' },
  'Contato': { 'en': 'Contact', 'es': 'Contacto' },
  'Login': { 'en': 'Login', 'es': 'Iniciar sesión' },
  'Cadastro': { 'en': 'Register', 'es': 'Registro' },
  'Elegância e Sofisticação': { 'en': 'Elegance and Sophistication', 'es': 'Elegancia y Sofisticación' },
  'Descobra a sua moda em JOCHEVED': { 'en': 'Discover your fashion at JOCHEVED', 'es': 'Descubre tu moda en JOCHEVED' },
  'Ver Coleção': { 'en': 'View Collection', 'es': 'Ver Colección' },
  'Buscar': { 'en': 'Search', 'es': 'Buscar' },
  'Perfil': { 'en': 'Profile', 'es': 'Perfil' },
  'Carrinho': { 'en': 'Cart', 'es': 'Carrito' },
  'Categoria': { 'en': 'Category', 'es': 'Categoría' },
  'Preço': { 'en': 'Price', 'es': 'Precio' },
  'Tamanho': { 'en': 'Size', 'es': 'Tamaño' },
  'Cor': { 'en': 'Color', 'es': 'Color' },
  'Quantidade': { 'en': 'Quantity', 'es': 'Cantidad' },
  'Ver Detalhes': { 'en': 'See Details', 'es': 'Ver Detalles' },
  'Adicionar ao Carrinho': { 'en': 'Add to Cart', 'es': 'Agregar al carrito' },
  'Remover': { 'en': 'Remove', 'es': 'Eliminar' },
  'Seu carrinho está vazio': { 'en': 'Your cart is empty', 'es': 'Tu carrito está vacío' },
  'Total': { 'en': 'Total', 'es': 'Total' },
  'Ir para Pagamento': { 'en': 'Go to Checkout', 'es': 'Ir al pago' },
  'Limpar Carrinho': { 'en': 'Clear Cart', 'es': 'Limpiar carrito' },
  'Descrição': { 'en': 'Description', 'es': 'Descripción' },
  'Avaliação': { 'en': 'Rating', 'es': 'Calificación' },
  'Painel Admin': { 'en': 'Admin Panel', 'es': 'Panel de Administración' },
  'Sair': { 'en': 'Logout', 'es': 'Cerrar sesión' },
  'Adicionar Produto': { 'en': 'Add Product', 'es': 'Agregar Producto' },
  'Nome do Produto': { 'en': 'Product Name', 'es': 'Nombre del Producto' },
  'Salvar': { 'en': 'Save', 'es': 'Guardar' },
  'Cancelar': { 'en': 'Cancel', 'es': 'Cancelar' },
  'Adicionado ao carrinho!': { 'en': 'Added to cart!', 'es': '¡Agregado al carrito!' },
  'Removido dos favoritos!': { 'en': 'Removed from favorites!', 'es': '¡Eliminado de favoritos!' },
  'Adicionado aos favoritos!': { 'en': 'Added to favorites!', 'es': '¡Agregado a favoritos!' },
};

let currentLanguage = localStorage.getItem('siteLanguage') || 'pt-BR';
const originalPageContent = new Map();

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('siteLanguage', lang);
  
  // Atualizar buttons ativos
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  if (lang === 'pt-BR') {
    applyPtBRTranslations();
  } else {
    applyTranslations(lang);
  }
}

function applyPtBRTranslations() {
  // Restaurar conteúdo original
  document.querySelectorAll('a, h1, h2, h3, h4, h5, h6, p, span, button, label, div').forEach(el => {
    const originalText = originalPageContent.get(el);
    if (originalText) {
      el.textContent = originalText;
    }
  });
}

function applyTranslations(lang) {
  document.querySelectorAll('a, h1, h2, h3, h4, h5, h6, p, span, button, label, div, li').forEach(el => {
    const text = el.childNodes[0]?.textContent?.trim() || el.textContent?.trim();
    
    if (!text || text.length === 0) return;
    
    // Salvar conteúdo original se ainda não foi salvo
    if (!originalPageContent.has(el)) {
      originalPageContent.set(el, el.textContent);
    }
    
    // Buscar tradução
    if (translations[text] && translations[text][lang]) {
      el.textContent = translations[text][lang];
    }
  });
  
  // Traduzir titles e placeholders
  document.querySelectorAll('[title], input[placeholder], textarea[placeholder]').forEach(el => {
    if (el.title && translations[el.title] && translations[el.title][lang]) {
      el.title = translations[el.title][lang];
    }
    if (el.placeholder && translations[el.placeholder] && translations[el.placeholder][lang]) {
      el.placeholder = translations[el.placeholder][lang];
    }
  });
}

// Salvar estado original ao carregar
document.addEventListener('DOMContentLoaded', () => {
  // Marcar botão ativo
  const activeBtn = document.querySelector(`[data-lang="${currentLanguage}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  // Se o idioma não é PT-BR, aplicar tradução
  if (currentLanguage !== 'pt-BR') {
    applyTranslations(currentLanguage);
  }
});
