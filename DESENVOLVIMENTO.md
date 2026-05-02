# Guia de Desenvolvimento Local

## 🚀 Configuração Inicial

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/botique-jocheved.git
cd botique-jocheved
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar Servidor Local

#### Opção 1: Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Acesse: `http://localhost:8000`

#### Opção 2: Node.js
```bash
npm start
```

#### Opção 3: http-server
```bash
npm run dev
```

## 🔧 Estrutura do Projeto

```
botique-jocheved/
├── index.html              # Página principal
├── privacy.html            # Política de privacidade
├── terms.html              # Termos de serviço
├── styles.css              # Estilos
├── products.js             # Dados e lógica dos produtos
├── script.js               # Funcionalidades gerais
├── package.json            # Dependências
├── .gitignore              # Arquivos ignorados
├── README.md               # Documentação principal
├── CONFIGURACAO.md         # Guia de configuração
├── DESENVOLVIMENTO.md      # Este arquivo
└── JOCHEVED 01.png         # Imagem de design
```

## 📝 Convenções de Código

### HTML
- Use tags semânticas (header, nav, section, footer)
- Indente com 4 espaços
- Use atributos em minúsculas

### CSS
- Use variáveis CSS para cores
- Organize por seção (header, hero, produtos, etc.)
- Mobile-first responsive design

### JavaScript
- Use arrow functions
- Nomeie variáveis claramente
- Adicione comentários em funções complexas
- Use const/let, não var

## 🧪 Testes Manual

### Testar no Desktop
1. Abrir `http://localhost:8000`
2. Verificar layout desktop
3. Testar navegação
4. Testar carrinho
5. Testar filtros

### Testar no Mobile
1. Abrir DevTools (F12)
2. Ativar modo responsivo (Ctrl+Shift+M)
3. Testar tamanhos: 320px, 768px, 1024px
4. Verificar toque de botões
5. Verificar scroll

### Testar Funcionalidades
- [ ] Carrinho persiste no reload
- [ ] Favoritos persistem
- [ ] Filtros funcionam
- [ ] Modal de produto abre/fecha
- [ ] Formulário de contato valida
- [ ] Links de navegação funcionam

## 🛠️ Debugar

### Console do Navegador
```javascript
// Ver carrinho
console.log(carrinho);

// Ver favoritos
console.log(favoritos);

// Ver produtos
console.log(produtos);

// Limpar localStorage
localStorage.clear();
```

### DevTools
- F12: Abrir DevTools
- Ctrl+Shift+I: Inspecionar elemento
- Ctrl+Shift+J: Console
- Ctrl+Shift+C: Seletor de elemento

## 📦 Adicionar Recursos

### Fonte do Google
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
```

### Font Awesome (Ícones)
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Bootstrap (Opcional)
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

## 🔄 Workflow de Git

### Criar Branch
```bash
git checkout -b feature/nova-funcionalidade
```

### Fazer Commit
```bash
git add .
git commit -m "Add: descrição das mudanças"
git push origin feature/nova-funcionalidade
```

### Mensagens de Commit
- `Add:` Nova funcionalidade
- `Fix:` Corrigir bug
- `Update:` Atualizar código existente
- `Remove:` Remover código
- `Docs:` Atualizar documentação

## 📊 Performance

### Verificar Performance
1. F12 > Lighthouse
2. Testar em "Mobile"
3. Verificar score

### Otimizações
- Minificar CSS e JavaScript
- Comprimir imagens
- Usar lazy loading
- Implementar cache
- CDN para bibliotecas

## 🔒 Segurança

### Verificação de Segurança
```bash
# Verificar vulnerabilidades
npm audit

# Atualizar pacotes
npm update
```

### Boas Práticas
- Não usar tokens em código
- Usar HTTPS
- Validar entrada do usuário
- Sanitizar dados
- Usar CSP (Content Security Policy)

## 📈 SEO

### Melhorias SEO
- Meta tags no head
- URLs amigáveis
- Títulos descritivos
- Descrições de imagens (alt)
- Sitemap.xml
- robots.txt

### Exemplo Meta Tag
```html
<meta name="description" content="BOTIQUE JOCHEVED - Moda Feminina Exclusiva">
<meta name="keywords" content="moda, roupas, boutique, feminina">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 🚀 Preparar para Deploy

### Checklist
- [ ] Todos os links funcionam
- [ ] Sem erros no console
- [ ] Responsivo em mobile
- [ ] Imagens otimizadas
- [ ] Minificado (opcional)
- [ ] HTTPS configurado
- [ ] Domínio correto
- [ ] Analytics configurado

### Teste de Performance
```bash
# Usando Lighthouse
npx lighthouse https://seu-site.com --view
```

## 📞 Suporte

Para dúvidas ou problemas:
1. Verificar documentação
2. Consultar console.log
3. Debugar no DevTools
4. Contatar suporte

## 🎓 Recursos de Aprendizado

### HTML/CSS/JavaScript
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools](https://www.w3schools.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

### Git
- [GitHub Docs](https://docs.github.com/)
- [Atlassian Git Tutorial](https://www.atlassian.com/git)

### Desenvolvimento Web
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Dev.to](https://dev.to/)

## ✅ Próximos Passos

1. [ ] Implementar backend Node.js
2. [ ] Conectar banco de dados
3. [ ] Integrar pagamento
4. [ ] Adicionar autenticação
5. [ ] Implementar PWA
6. [ ] Configurar CI/CD
7. [ ] Testes automatizados
8. [ ] Análise de performance

---

**Última atualização**: Abril 2026
**Mantido por**: BOTIQUE JOCHEVED
