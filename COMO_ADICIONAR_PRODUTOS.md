# 🛍️ Como Adicionar Produtos

## 2 FORMAS DE ADICIONAR PRODUTOS

### ✅ FORMA 1: Painel Admin (Recomendado para Vendedores)

**Acesso:** `admin.html`

**Recursos:**
- ✨ Interface visual e fácil de usar
- 🔐 Protegido por senha
- 📦 Formulário completo e intuitivo
- 👀 Visualização de todos os produtos em tempo real
- 🗑️ Remover produtos facilmente

**Como Acessar:**

1. Abra o arquivo `admin.html` no navegador
2. Digite a senha: **`admin123`** (defina sua própria senha depois!)
3. Preencha o formulário com os dados do produto
4. Clique em "Adicionar Produto"
5. Pronto! O produto aparecerá imediatamente

**Campos do Formulário:**
- Nome do Produto *
- Preço (R$) *
- Categoria *
- Cor *
- Emoji/Imagem *
- Avaliação (0-5) *
- Descrição *
- Tamanhos Disponíveis * (selecione múltiplos)
- Badge (opcional: Novo, Top Vendedor, Premium, Promoção)

---

### 📝 FORMA 2: Editar o Código (Para Desenvolvedores)

**Arquivo:** `js/shared.js`

Se preferir adicionar manualmente ou em lote, edite o arquivo diretamente.

## Localização
Todos os produtos estão no arquivo: **`js/shared.js`**

## Estrutura de um Produto

Cada produto é um objeto com as seguintes propriedades:

```javascript
{
    id: 1,                          // ID único (número)
    nome: "Vestido Elegante",       // Nome do produto
    categoria: "vestidos",          // Categoria (vestidos, blusas, calcas, saias, jaquetas, acessorios)
    preco: 199.90,                  // Preço em R$
    imagem: "👗",                   // Emoji ou URL da imagem
    descricao: "Um lindo vestido...", // Descrição do produto
    cor: "Preto",                   // Cor principal
    tamanhos: ["PP", "P", "M", "G", "GG"], // Tamanhos disponíveis
    avaliacao: 4.8,                 // Nota de 0 a 5
    badge: "Novo"                   // Badge (Novo, Top Vendedor, Premium, Promoção) - opcional
}
```

## Passo a Passo para Adicionar um Produto (Código)

### 1️⃣ Abra o arquivo `js/shared.js`

### 2️⃣ Encontre a array `const produtos = [ ... ]`

### 3️⃣ Adicione um novo produto dentro da array

**Exemplo: Adicionando um novo vestido**

```javascript
{
    id: 16,  // ID novo (incrementar o último ID)
    nome: "Vestido Floral Primavera",
    categoria: "vestidos",
    preco: 249.90,
    imagem: "🌸",
    descricao: "Vestido lindo com estampa floral para a primavera",
    cor: "Rosa",
    tamanhos: ["PP", "P", "M", "G", "GG"],
    avaliacao: 4.9,
    badge: "Novo"
}
```

### 4️⃣ Salve o arquivo (Ctrl + S)

### 5️⃣ O produto aparecerá automaticamente:
- Na página de Produtos
- Nos filtros
- Na busca
- No modal de detalhes

## Exemplos de Categorias

| Categoria | Emoji | Exemplos |
|-----------|-------|----------|
| vestidos | 👗 | Vestidos, macaquinhos |
| blusas | 👚 | Camisetas, blusas, tops |
| calcas | 👖 | Calças, jeans |
| saias | 👖 | Saias, shorts |
| jaquetas | 🧥 | Jaquetas, casacos |
| acessorios | 👜 | Bolsas, acessórios |

## Dicas Importantes

✅ **Faça:**
- Use IDs únicos e sequenciais
- Complete todas as propriedades obrigatórias
- Use cores descritivas
- Adicione sempre os 5 tamanhos (se aplicável)
- Use avaliações realistas (0-5)
- No painel admin, selecione apenas os tamanhos disponíveis

❌ **Evite:**
- Repetir IDs
- Deixar campos vazios
- Preços negativos ou zero
- Nomes muito longos
- Descrições sem relevância

## Exemplo Completo com Todos os Campos

```javascript
{
    id: 20,
    nome: "Jaqueta de Couro Premium",
    categoria: "jaquetas",
    preco: 449.90,
    imagem: "🧥",
    descricao: "Jaqueta de couro genuíno, impermeável e durável. Perfeita para looks sofisticados e casuais.",
    cor: "Preto",
    tamanhos: ["P", "M", "G", "GG"],
    avaliacao: 4.7,
    badge: "Premium"
}
```

## Onde Aparecem os Produtos?

📍 **Página de Produtos** - `pages/produtos.html`
- Mostra todos os produtos em grid
- Permite filtrar por categoria, preço, tamanho, cor
- Permite buscar por nome

📍 **Página de Coleções** - `pages/colecoes.html`
- Links para ver produtos de cada coleção

📍 **Modal de Detalhes** - Em todas as páginas
- Clique em um produto para ver todos os detalhes
- Opções de tamanho, cor, quantidade
- Botões para adicionar ao carrinho ou favoritos

## Segurança do Painel Admin

⚠️ **Importante:**
- A senha padrão é `admin123`
- **ALTERE ISTO EM PRODUÇÃO!**
- O painel usa localStorage (seguro apenas em navegadores locais)
- Para um site real, implemente autenticação de backend

### Como Mudar a Senha:

1. Abra `admin.html`
2. Procure por: `if (senha === 'admin123')`
3. Mude para: `if (senha === 'sua_nova_senha')`
4. Salve o arquivo

**Exemplo:**
```javascript
if (senha === 'minhasenha123') {
    localStorage.setItem('adminLogado', 'true');
    // ...
}
```

## Precisando de Ajuda?

- Consult o painel admin em `admin.html`
- Veja os exemplos no arquivo `js/shared.js`
- Todos os 15 produtos padrão mostram a estrutura correta!
