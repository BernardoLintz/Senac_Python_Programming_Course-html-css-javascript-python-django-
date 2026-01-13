/* // um vetor (array) é um conjunto de dados

const vetor = ["Diego","Moraes","Cezar"];

// vetor.push("Oliveira");
// console.log(vetor);

function adicionarCoisaNova(nome) {
    vetor.push(nome);
    console.log(vetor);
};
 */

// def adicionarCoisaNova(nome):
//  ljkhgw
// print(vetor)

// adicionarCoisaNova("Porrete")


// Crie um inventário de jogo.
// Como? Crie um vetor que armazene o inventário
// já com os seguintes itens: "Espada", "Escudo", "Poção de Vida".
// 
// Depois, crie uma função chamada adicionarItem, que adiciona um novo item ao inventário.

const inventario = ["Poção de Vida","Poção de Vida", "Espada", "Poção de Vida", "Escudo" ];

function addItem(nomeItem) {
    inventario.push(nomeItem);
    console.log("Item adicionado: " + nomeItem);
    console.log(inventario);
};

// Crie uma função que liste os itens do inventario um a um

function exibirInventario() {
    for(i = 0; i < inventario.length; i++){
        console.log(inventario[i]);
    };
};

// Crie uma função que remove um item do inventário

function removerItem(item) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i] === item) {
            inventario.splice(i, 1);
            console.log("Item removido: " + item);
            return;
        }
    }
    console.log("Item não encontrado na mochila.");
};
