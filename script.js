// ========== SMOOTH SCROLL E NAVEGAÇÃO ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#carrinho') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========== NAVBAR STICKY EFFECT ==========
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll para baixo - ocultar navbar
        // navbar.style.top = '-80px';
    } else {
        // Scroll para cima - mostrar navbar
        // navbar.style.top = '0';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== FORMULÁRIO DE CONTATO ==========
const contatoForm = document.querySelector('.contato-form');
if (contatoForm) {
    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = contatoForm.querySelector('input[placeholder="Seu Nome"]').value;
        const email = contatoForm.querySelector('input[placeholder="Seu Email"]').value;
        const assunto = contatoForm.querySelector('input[placeholder="Assunto"]').value;
        const mensagem = contatoForm.querySelector('textarea').value;

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido!');
            return;
        }

        // Simular envio
        alert(`Obrigado ${nome}!\n\nSua mensagem foi recebida e responderemos em breve.\n\nAssunto: ${assunto}`);
        contatoForm.reset();
    });
}

// ========== EFEITO DE HOVER NOS CARDS ==========
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.produto-card, .colecao-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// ========== BUSCA DE PRODUTOS ==========
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('a[href="#busca"]');
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const termo = prompt('O que você está procurando?');
            if (termo) {
                buscarProdutos(termo);
            }
        });
    }
});

function buscarProdutos(termo) {
    const resultados = produtos.filter(p =>
        p.nome.toLowerCase().includes(termo.toLowerCase()) ||
        p.descricao.toLowerCase().includes(termo.toLowerCase()) ||
        p.categoria.toLowerCase().includes(termo.toLowerCase())
    );

    if (resultados.length === 0) {
        alert('Nenhum produto encontrado para "' + termo + '"');
        renderizarProdutos();
    } else {
        renderizarProdutos(resultados);
        document.querySelector('.produtos').scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== CARROSSEL DE COLEÇÕES ==========
let collectionIndex = 0;

function rotacionarColecoes() {
    const colecoes = document.querySelectorAll('.colecao-card');
    
    colecoes.forEach(colecao => {
        colecao.style.display = 'none';
    });

    collectionIndex++;
    if (collectionIndex >= colecoes.length) {
        collectionIndex = 0;
    }

    if (colecoes[collectionIndex]) {
        colecoes[collectionIndex].style.display = 'block';
    }
}

// ========== ANIMAÇÃO DE ENTRADA ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.produtos, .colecoes, .sobre, .contato');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// ========== ADICIONAR ANIMAÇÃO CSS ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========== ATUALIZAR DATA NO FOOTER ==========
document.addEventListener('DOMContentLoaded', () => {
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const ano = new Date().getFullYear();
        footerBottom.textContent = `© ${ano} BOTIQUE JOCHEVED. Todos os direitos reservados.`;
    }
});

// ========== MENU MOBILE ==========
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.textContent = '☰';
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--primary-color);
`;

const navbar = document.querySelector('.navbar .container');
if (navbar) {
    navbar.appendChild(mobileMenuBtn);
}

// ========== NOTIFICAÇÕES DE PROMOÇÃO ==========
function mostrarNotificacaoPromocao() {
    const promocao = document.createElement('div');
    promocao.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--secondary-color), #8b6f47);
        color: white;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    promocao.innerHTML = `
        <h4 style="margin: 0 0 10px 0; font-size: 16px;">🎉 Oferta Especial!</h4>
        <p style="margin: 0; font-size: 14px;">Confira nossas promoções especiais hoje!</p>
        <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 8px 15px; background: rgba(255,255,255,0.2); border: 1px solid white; color: white; border-radius: 3px; cursor: pointer; font-weight: 600;">Fechar</button>
    `;
    
    document.body.appendChild(promocao);
    
    // Auto-fechar após 10 segundos
    setTimeout(() => {
        if (promocao.parentElement) {
            promocao.remove();
        }
    }, 10000);
}

// Mostrar notificação após 3 segundos
setTimeout(mostrarNotificacaoPromocao, 3000);

// ========== FUNÇÃO DE RESENHAS ==========
function exibirResenhas(produtoId) {
    const resenhas = [
        { nome: "Maria Silva", nota: 5, texto: "Produto excelente! Muito satisfeita com a compra." },
        { nome: "Ana Santos", nota: 5, texto: "Chegou rápido e bem embalado. Recomendo!" },
        { nome: "Juliana Costa", nota: 4, texto: "Bom custo-benefício. Produto de qualidade." }
    ];

    let html = '<div style="margin-top: 20px;">';
    html += '<h4 style="margin-bottom: 15px; color: var(--primary-color);">Avaliações de Clientes</h4>';
    
    resenhas.forEach(resenha => {
        html += `
            <div style="padding: 15px; border-bottom: 1px solid var(--border-color); margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <strong>${resenha.nome}</strong>
                    <span style="color: #f39c12;">${'⭐'.repeat(resenha.nota)}</span>
                </div>
                <p style="margin: 0; font-size: 14px; color: var(--text-color);">${resenha.texto}</p>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// ========== CONFIGURAÇÃO DE TEMA ==========
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.title = 'Alternar tema';
themeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 999;
    display: none;
`;

document.body.appendChild(themeToggle);

// ========== ANALYTICS SIMULADO ==========
function rastrearEvento(evento, categoria, valor) {
    console.log(`Evento: ${evento}, Categoria: ${categoria}, Valor: ${valor}`);
}

// Rastrear quando adiciona ao carrinho
document.addEventListener('DOMContentLoaded', () => {
    const btnCarrinho = document.querySelector('[title="Carrinho"]');
    if (btnCarrinho) {
        btnCarrinho.addEventListener('click', () => {
            rastrearEvento('abrir_carrinho', 'carrinho', carrinho.length);
        });
    }
});

// ========== BOAS-VINDAS ==========
window.addEventListener('load', () => {
    const visitaAnterior = localStorage.getItem('visitanteAnterior');
    
    if (!visitaAnterior) {
        localStorage.setItem('visitanteAnterior', 'true');
        // Mostrar boas-vindas
        setTimeout(() => {
            console.log('Bem-vindo à BOTIQUE JOCHEVED! Aproveite nossas promoções especiais!');
        }, 500);
    }
});

// ========== INTEGRAÇÃO COM API FAKE (PARA FUTURO) ==========
async function buscarProdutosAPI() {
    try {
        // Simular busca de API
        console.log('Buscando produtos da API...');
        // const response = await fetch('/api/produtos');
        // const data = await response.json();
        // renderizarProdutos(data);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// ========== EXPORTAR DADOS DO CARRINHO ==========
function exportarCarrinho() {
    const dataStr = JSON.stringify(carrinho, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'carrinho.json';
    link.click();
}

// ========== SISTEMA DE PONTOS FIDELIDADE ==========
let pontosFidelidade = localStorage.getItem('pontosFidelidade') || 0;

function adicionarPontos(quantidade) {
    pontosFidelidade = parseInt(pontosFidelidade) + quantidade;
    localStorage.setItem('pontosFidelidade', pontosFidelidade);
    console.log(`Você tem ${pontosFidelidade} pontos de fidelidade!`);
}

// Adicionar pontos ao comprar (10% do valor)
function finalizarCompra(total) {
    const pontos = Math.floor(total / 10);
    adicionarPontos(pontos);
}

// ========== VERIFICAÇÃO DE COMPATIBILIDADE ==========
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage) {
        console.warn('LocalStorage não disponível. Algumas funcionalidades podem não funcionar.');
    }
    
    if (!window.fetch) {
        console.warn('Fetch API não disponível.');
    }
});

console.log('BOTIQUE JOCHEVED - Site carregado com sucesso!');
