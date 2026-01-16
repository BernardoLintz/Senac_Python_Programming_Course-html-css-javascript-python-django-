const readline = require("readline-sync");
const tabuleiro = [
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 6, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 9, 0, 2, 0, 0],
    [0, 5, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 4, 5, 7, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 0],
    [0, 0, 1, 0, 0, 0, 0, 6, 8],
    [0, 0, 8, 5, 0, 0, 0, 1, 0],
    [0, 9, 0, 0, 0, 0, 4, 0, 0]
];
function mostrarTabuleiro() {
    console.table(tabuleiro);
}

function jogadaValida(tabuleiro, linha, coluna, numero) {
    if (isNaN(linha) || isNaN(coluna) || isNaN(numero) || linha < 0 || linha > 8 || coluna < 0 || coluna > 8 || numero < 1 || numero > 9) {
        return false;
    }
    if (fixos[linha][coluna]) {
        return false; 
    }
    if (tabuleiro[linha][coluna] !== 0) {
        return false;
    }
    for (let i = 0; i < 9; i++) {
        if (tabuleiro[linha][i] === numero || tabuleiro[i][coluna] === numero) {
            return false;
        }
    }
    const inicioLinha = Math.floor(linha / 3) * 3;
    const inicioColuna = Math.floor(coluna / 3) * 3;
    for (let i = inicioLinha; i < inicioLinha + 3; i++) {
        for (let j = inicioColuna; j < inicioColuna + 3; j++) {
            if (tabuleiro[i][j] === numero) {
                return false;
            }
        }
    }
    return true;
}

function verificarVitoria(tabuleiro) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (tabuleiro[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}
const fixos = tabuleiro.map(linha => linha.map(num => num !== 0));
console.log("=== SUDOKU NO CONSOLE ===");
mostrarTabuleiro();
while (true) {
    const linha = parseInt(readline.question("Digite a linha (0-8): "));
    const coluna = parseInt(readline.question("Digite a coluna (0-8): "));
    const numero = parseInt(readline.question("Digite o numero (1-9): "));
    if (jogadaValida(tabuleiro, linha, coluna, numero)) {
        tabuleiro[linha][coluna] = numero;
        mostrarTabuleiro();
        console.log("Jogada realizada com sucesso!");
        if (verificarVitoria(tabuleiro)) {
            console.log("Parabéns! Você completou o Sudoku!");
            break;
        }
    } else {
        mostrarTabuleiro();
        console.log("Jogada inválida! Tente novamente.")
        if (readline.question("Deseja sair do jogo? (s/n): ").toLowerCase() === 's') {
            console.log("Obrigado por jogar!");
            break;
        }
    }
}

