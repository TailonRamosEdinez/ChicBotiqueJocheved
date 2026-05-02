# Configuração da BOTIQUE JOCHEVED

## 🎨 Cores da Marca

Atualize as cores conforme sua marca em `styles.css`:

```css
:root {
    --primary-color: #2c1810;      /* Cor principal (marrom) */
    --secondary-color: #d4a574;    /* Cor secundária (dourado) */
    --accent-color: #e8d4c4;       /* Cor acentuada (bege) */
    --text-color: #333;            /* Cor do texto */
    --light-bg: #f9f7f4;           /* Fundo claro */
    --white: #ffffff;              /* Branco */
    --border-color: #e0d5cc;       /* Cor da borda */
}
```

## 📞 Informações da Loja

Atualize no `index.html`:

### Header Top
- Telefone: `(11) 98765-4321`
- Email: `contato@jocheved.com.br`

### Contato Section
- Endereço: `Rua das Flores, 123, São Paulo - SP, 01234-567`
- Telefone: `(11) 98765-4321` e `(11) 3456-7890`
- Email: `contato@jocheved.com.br` e `vendas@jocheved.com.br`
- Horário: `Seg-Sex: 10h às 19h, Sáb: 10h às 17h, Dom: Fechado`

## 📦 Gerenciar Produtos

Edit `products.js` para adicionar/editar produtos:

### Exemplo de Novo Produto:
```javascript
{
    id: 16,
    nome: "Nome do Produto",
    categoria: "vestidos", // vestidos, blusas, calcas, saias, jaquetas, acessorios
    preco: 199.90,
    imagem: "👗", // Emoji ou será substituído por imagem
    descricao: "Descrição detalhada do produto",
    cor: "Preto", // Preto, Branco, Vermelho, Azul, Rosa, Cinza, Multicolor
    tamanhos: ["P", "M", "G"],
    avaliacao: 4.8,
    badge: "Top Vendedor" // null, "Novo", "Top Vendedor", "Premium", "Promoção"
}
```

## 🌐 Deploy / Hospedagem

### Opção 1: GitHub Pages (Gratuito)
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione branch `main`
5. Site estará em: `https://seuusuario.github.io/repo-name`

### Opção 2: Netlify (Gratuito)
1. Acesse netlify.com
2. Clique em "New site from Git"
3. Conecte seu repositório GitHub
4. Configure build (deixe em branco para arquivos estáticos)
5. Deploy automático em cada push

### Opção 3: Vercel (Gratuito)
1. Acesse vercel.com
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Configure e faça deploy
5. URL automática: `seusite.vercel.app`

### Opção 4: Hosting Compartilhado
1. Contrate um hosting (GoDaddy, HostGator, Locaweb)
2. Use FTP/SFTP para fazer upload
3. Configure domínio personalizado
4. Configure SSL (HTTPS)

## 🔌 Próximas Integrações

### Backend Node.js + Express
```javascript
// server.js
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// Rotas da API
app.get('/api/produtos', (req, res) => {
    // Retornar produtos do banco
});

app.post('/api/pedidos', (req, res) => {
    // Criar novo pedido
});

app.listen(3000);
```

### Banco de Dados MongoDB
```javascript
// Conexão com MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jocheved');

// Schema de Produto
const produtoSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    categoria: String,
    descricao: String
});
```

### Gateway de Pagamento - Stripe
```javascript
const stripe = require('stripe')('sua_chave_secreta');

app.post('/api/pagamento', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'brl',
        payment_method_types: ['card']
    });
});
```

### Autenticação JWT
```javascript
const jwt = require('jsonwebtoken');

app.post('/api/login', (req, res) => {
    const token = jwt.sign(
        { id: user.id },
        'sua_chave_secreta',
        { expiresIn: '24h' }
    );
});
```

## 📧 Configurar Email

### SendGrid (Recomendado)
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'customer@example.com',
    from: 'orders@jocheved.com.br',
    subject: 'Pedido Confirmado',
    html: '<h1>Obrigado pela compra!</h1>'
};

sgMail.send(msg);
```

## 📊 Analytics

### Google Analytics
Adicione ao `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

## 🔒 Segurança

### HTTPS
- Use certificado SSL/TLS
- Hospedagem moderna oferece automaticamente

### CORS
```javascript
const cors = require('cors');
app.use(cors({
    origin: 'https://jocheved.com.br'
}));
```

### Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use('/api/', limiter);
```

## 📱 Progressive Web App (PWA)

Crie `manifest.json`:
```json
{
    "name": "BOTIQUE JOCHEVED",
    "short_name": "JOCHEVED",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#2c1810",
    "icons": [
        {
            "src": "icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ]
}
```

Adicione ao `index.html`:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#2c1810">
```

## 📋 Checklist de Lançamento

- [ ] Substituir dados de contato
- [ ] Adicionar produtos reais
- [ ] Integrar imagens de produtos
- [ ] Configurar SSL/HTTPS
- [ ] Testar em mobile
- [ ] Testar carrinho e checkout
- [ ] Configurar email
- [ ] Integrar pagamento
- [ ] Configurar backend
- [ ] Fazer backup de dados
- [ ] Configurar dominío
- [ ] Submeter ao Google Search Console
- [ ] Configurar analytics
- [ ] Testes de performance
- [ ] Testes de segurança

## 🆘 Troubleshooting

### Carrinho não persiste
- Verificar se LocalStorage está habilitado
- Testar em modo privado/anônimo

### Estilos não carregam
- Verificar caminho de `styles.css`
- Limpar cache do navegador

### JavaScript não funciona
- Verificar console do navegador (F12)
- Certificar que JavaScript está habilitado

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [Vue.js](https://vuejs.org/) - Para versão com framework
- [Next.js](https://nextjs.org/) - Para versão com React
- [Stripe Docs](https://stripe.com/docs)
- [MongoDB Docs](https://docs.mongodb.com/)

---

**Versão**: 1.0
**Última atualização**: Abril 2026
**Mantido por**: BOTIQUE JOCHEVED
