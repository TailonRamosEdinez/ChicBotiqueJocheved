// ========== CARRINHO DE COMPRAS ==========

function abrirCarrinho() {
    const modal = document.getElementById('carrinhoModal');
    const carrinhoItems = document.getElementById('carrinhoItems');
    carrinhoItems.innerHTML = '';

    let total = 0;

    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach((item, index) => {
            const precoItem = item.precoUnitario * item.quantidade;
            total += precoItem;

            const itemElement = document.createElement('div');
            itemElement.className = 'carrinho-item';
            itemElement.innerHTML = `
                <div class="carrinho-item-img">${getImagemHTML(item.imagem)}</div>
                <div class="carrinho-item-detalhes">
                    <h4>${item.nome}</h4>
                    <p>${item.tamanho} - ${item.cor}</p>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <div class="carrinho-item-preco">
                    R$ ${precoItem.toFixed(2).replace('.', ',')}<br>
                    <button onclick="removerDoCarrinho(${index})" style="margin-top: 10px; padding: 5px 10px; background: #d32f2f; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 12px;">Remover</button>
                </div>
            `;
            carrinhoItems.appendChild(itemElement);
        });
    }

    document.getElementById('totalPrice').textContent = total.toFixed(2).replace('.', ',');
    abrirModal('carrinhoModal');
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

    salvarCarrinho();
    fecharModal('produtoModal');
    alert(`${window.produtoAtual.nome} adicionado ao carrinho!`);
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    abrirCarrinho(); // Reabrir para atualizar
}

function irParaPagamento() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = carrinho.reduce((sum, item) => sum + (item.precoUnitario * item.quantidade), 0);
    alert('Redirecionando para pagamento...\n\nTotal: R$ ' + total.toFixed(2).replace('.', ','));
    
    // Aqui você integraria com um gateway de pagamento real
    // window.location.href = '/pagamento?total=' + total;
}

function limparCarrinho() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        carrinho = [];
        salvarCarrinho();
        abrirCarrinho();
    }
}

// Estilos CSS para carrinho
const carrinhoStyles = `
.carrinho-items {
    margin-bottom: 20px;
}

.carrinho-item {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    gap: 15px;
    padding: 15px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    margin-bottom: 10px;
    align-items: center;
}

.carrinho-item-img {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #d4a574, #e8d4c4);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
}

.carrinho-item-detalhes {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.carrinho-item-detalhes h4 {
    color: var(--primary-color);
    font-size: 16px;
}

.carrinho-item-detalhes p {
    color: var(--text-color);
    font-size: 14px;
}

.carrinho-item-preco {
    text-align: right;
    font-size: 16px;
    font-weight: 700;
    color: var(--secondary-color);
}

.carrinho-total {
    padding: 20px;
    background-color: var(--light-bg);
    border-radius: 4px;
    text-align: right;
    font-size: 20px;
    color: var(--primary-color);
    margin-bottom: 20px;
}
`;

// Injetar estilos
if (document.head) {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = carrinhoStyles;
    document.head.appendChild(styleSheet);
}
