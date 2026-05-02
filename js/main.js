// ========== NAVEGAÇÃO E FUNCIONALIDADES GERAIS ==========

// Smooth scroll para links
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

// Busca de produtos
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('a[href="#busca"], button[title="Buscar"]');
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            const termo = prompt('O que você está procurando?');
            if (termo) {
                buscarProdutos(termo);
                const produtosSection = document.querySelector('.produtos');
                if (produtosSection) {
                    produtosSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // Carrinho
    const cartIcon = document.querySelector('a[href="#carrinho"], .icon-btn[title="Carrinho"]');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            abrirCarrinho();
        });
    }
});

// Validação de formulário de contato
document.addEventListener('DOMContentLoaded', () => {
    const contatoForm = document.querySelector('.contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = contatoForm.querySelector('input[placeholder="Seu Nome"]')?.value;
            const email = contatoForm.querySelector('input[placeholder="Seu Email"]')?.value;
            const assunto = contatoForm.querySelector('input[placeholder="Assunto"]')?.value;
            const mensagem = contatoForm.querySelector('textarea')?.value;

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um email válido!');
                return;
            }

            // Simular envio
            alert(`Obrigado ${nome}!\n\nSua mensagem foi recebida e responderemos em breve.`);
            contatoForm.reset();
        });
    }
});

// Animação de entrada nas seções
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
    const sections = document.querySelectorAll('.produtos, .colecoes, .sobre, .contato, .page-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Atualizar data no footer
document.addEventListener('DOMContentLoaded', () => {
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom && !footerBottom.textContent.includes('2026')) {
        const ano = new Date().getFullYear();
        footerBottom.textContent = `© ${ano} BOTIQUE JOCHEVED. Todos os direitos reservados.`;
    }
});

// Notificações de promoção
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
        z-index: 999;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
        font-family: 'Segoe UI', sans-serif;
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

// Efeito hover nos cards
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

// Verificação de compatibilidade
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage) {
        console.warn('LocalStorage não disponível. Algumas funcionalidades podem não funcionar.');
    }
    
    if (!window.fetch) {
        console.warn('Fetch API não disponível.');
    }
    
    console.log('BOTIQUE JOCHEVED - Site carregado com sucesso!');
});

// Ícone de tema (futuro)
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
    z-index: 998;
    display: none;
`;

document.body.appendChild(themeToggle);

// Injetar animações CSS
const animStyles = document.createElement('style');
animStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

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
document.head.appendChild(animStyles);
