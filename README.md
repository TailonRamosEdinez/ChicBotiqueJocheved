# BOTIQUE JOCHEVED - Site de Vendas de Roupas

Bem-vindo ao site completo de e-commerce da BOTIQUE JOCHEVED! Um site moderno, responsivo e totalmente funcional para venda de roupas femininas.

## 📋 Características Principais

✨ **Design Elegante e Profissional**
- Interface sofisticada com paleta de cores neutra e elegante
- Baseado na imagem JOCHEVED 01
- Totalmente responsivo (Desktop, Tablet, Mobile)

🛍️ **Funcionalidades de E-Commerce**
- Catálogo completo com 15+ produtos
- Sistema de carrinho de compras funcional
- Filtros avançados (categoria, preço, tamanho, cor)
- Modal de detalhes do produto
- Sistema de favoritos

💳 **Funcionalidades de Vendas**
- Carrinho persistente (usando LocalStorage)
- Visualização de detalhes do produto
- Seleção de tamanho e cor
- Cálculo automático de totais
- Checkout simulado

📱 **Responsive Design**
- Adaptado para todos os tamanhos de tela
- Menu mobile pronto
- Imagens e textos responsivos

🎨 **Seções do Site**
1. **Header** - Logo, navegação e ícones de busca/carrinho
2. **Hero** - Banner principal elegante
3. **Filtros** - Sistema de filtragem de produtos
4. **Produtos** - Grid de produtos com 15+ itens
5. **Coleções** - 4 coleções destacadas (Primavera, Clássico, Festa, Casual)
6. **Sobre** - Informações da boutique
7. **Contato** - Formulário e informações de contato
8. **Footer** - Links e informações de rodapé

## 📁 Estrutura de Arquivos

```
BOTIQUE JOCHEVED/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── products.js         # Dados e lógica dos produtos
├── script.js           # Funcionalidades gerais
├── JOCHEVED 01.png     # Imagem de referência de design
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site
Abra o arquivo `index.html` em um navegador web moderno.

### 2. Navegar pelos Produtos
- Use o menu de navegação superior
- Clique em "Produtos" para ver o catálogo
- Use os filtros para encontrar o que procura
- Clique em "Ver Detalhes" para mais informações

### 3. Adicionar ao Carrinho
1. Clique em "Ver Detalhes" em um produto
2. Selecione tamanho, cor e quantidade
3. Clique em "Adicionar ao Carrinho"
4. O item aparecerá no carrinho (ícone 🛍️)

### 4. Visualizar Carrinho
- Clique no ícone 🛍️ no header
- Veja todos os itens e o total
- Remova itens conforme necessário
- Clique em "Ir para Pagamento" para finalizar

### 5. Usar Filtros
- Selecione categoria, preço, tamanho ou cor
- Clique em "Filtrar" para aplicar
- Os produtos serão atualizados automaticamente

### 6. Sistema de Favoritos
- Clique no botão ♥ para adicionar aos favoritos
- Favoritos são salvos no navegador

## 🎯 Dados dos Produtos

O site inclui 15 produtos de exemplo:
- **Vestidos** - Elegantes e sofisticados
- **Blusas** - Versáteis e confortáveis
- **Calças** - Sociais e casuais
- **Saias** - Rodadas e plissadas
- **Jaquetas** - Couro e jeans
- **Acessórios** - Bolsas e complementos

Cada produto possui:
- Nome e descrição
- Preço em reais
- Tamanhos disponíveis (PP, P, M, G, GG)
- Cores
- Avaliação (estrelas)
- Badges (Top Vendedor, Novo, Premium, Promoção)

## 🎨 Paleta de Cores

- **Cor Primária**: #2c1810 (Marrom Escuro)
- **Cor Secundária**: #d4a574 (Dourado)
- **Cor Acentuada**: #e8d4c4 (Bege)
- **Fundo Claro**: #f9f7f4 (Bege Claro)

## 💾 Armazenamento Local

O site usa LocalStorage para:
- **Carrinho**: Mantém itens mesmo fechando a aba
- **Favoritos**: Salva produtos favoritados
- **Pontos de Fidelidade**: Rastreia pontos do cliente

## 📞 Informações de Contato

Atualize as seguintes informações conforme necessário:
- **Telefone**: (11) 98765-4321
- **Email**: contato@jocheved.com.br
- **Endereço**: Rua das Flores, 123, São Paulo - SP
- **Horário**: Seg-Sex 10h-19h, Sab 10h-17h

## 🔧 Personalizações Sugeridas

Para adaptar o site ao seu negócio:

1. **Substituir Imagens**: Adicione imagens reais dos produtos
2. **Atualizar Produtos**: Edite o array `produtos` em `products.js`
3. **Mudar Cores**: Ajuste as variáveis CSS em `:root` em `styles.css`
4. **Adicionar Categorias**: Expanda os dados de categorias em `products.js`
5. **Integração com API**: Conecte a um backend real

## 📊 Como Adicionar Novos Produtos

Edite o array `produtos` em `products.js`:

```javascript
{
    id: 16,
    nome: "Seu Produto",
    categoria: "categoria",
    preco: 199.90,
    imagem: "👗",
    descricao: "Descrição do produto",
    cor: "Cor",
    tamanhos: ["P", "M", "G"],
    avaliacao: 4.8,
    badge: "Novo"
}
```

## 🌐 Compatibilidade

Testado em:
- Chrome (Desktop e Mobile)
- Firefox
- Safari
- Edge

Requerimentos mínimos:
- JavaScript habilitado
- LocalStorage disponível
- HTML5 e CSS3 suportados

## 📝 Notas Adicionais

- O site simula um pagamento (não processa transações reais)
- Todos os dados são armazenados localmente no navegador
- Para múltiplos usuários, é necessário integração com backend
- As imagens dos produtos são apenas ícones/emojis (substitua com imagens reais)

## 🚀 Próximos Passos

1. **Backend**: Integre com um servidor Node.js/Python
2. **Banco de Dados**: Conecte a um banco para persistência
3. **Pagamento**: Integre com gateway de pagamento (Stripe, PayPal)
4. **Autenticação**: Adicione login de usuários
5. **Analytics**: Integre com Google Analytics
6. **Email**: Configure emails de confirmação de pedidos

## 📞 Suporte

Para dúvidas ou problemas, entre em contato:
- **Email**: contato@jocheved.com.br
- **Telefone**: (11) 98765-4321

---

**Desenvolvido com ❤️ para BOTIQUE JOCHEVED**

*Última atualização: 2026*
