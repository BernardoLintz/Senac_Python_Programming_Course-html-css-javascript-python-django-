const Estoque = [
    ["Monitor LG 24\"", 450, 8],
    ["Teclado Mecânico", 350, 3],
    ["Mouse Wireless", 85, 15],
    ["Webcam HD", 120, 2],
    ["Headset Gamer", 280, 6],
]

function MostrarEstoque() {
    console.log("============== ESTOQUE ATUAL ==============")
    console.table(Estoque);
}

function calcularValorTotal() {
    let ValorTotalDoEstoque = 0;

    for (let i = 0; i < Estoque.length; i++) {
        ValorTotalDoEstoque += Estoque[i][1] * Estoque[i][2];
    }

    console.log("Valor total = R$" + ValorTotalDoEstoque.toFixed(2));
}

calcularValorTotal()

function alertaBaixoEstoque() {
    for (let i = 0; i < Estoque.length; i++) {
        if (Estoque[i][2] < 5) {
            console.log(`ALERTA: ${Estoque[i][0]} está com baixo estoque! (${Estoque[i][2]}) unidades`);
        }
    }
}
alertaBaixoEstoque()

// DESAFIO 4

function realizarVenda(NomeDoProduto, QuantidadeVendida) {

    for (let i = 0; i < Estoque.length; i++) {  
        let ProdutoAtual = Estoque[i][0]  
        let QuantidadeAtual = Estoque[i][2]
        if (ProdutoAtual === NomeDoProduto) {
            if (QuantidadeAtual >= QuantidadeVendida) {
                Estoque[i][2] = QuantidadeAtual -= QuantidadeVendida;
                console.log("Sucesso! Venda concretizada.");
                MostrarEstoque();
            } else {
                console.log("Desculpe! Não há estoque para o produto.");
                MostrarEstoque();
            }

        }
    }
}
realizarVenda("Mouse Wireless", 5);
realizarVenda("Monitor LG 24\"", 4);
realizarVenda("Webcam HD", 3);
