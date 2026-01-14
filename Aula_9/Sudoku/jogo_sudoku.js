const readline = require("readline");

const tabuleiro = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9]
];

function mostrarTabuleiro() {
  console.clear();
  console.table(tabuleiro);
}

function validaLinha(linha, numero) {
  for (let i = 0; i < 9; i++) {
    if (tabuleiro[linha][i] === numero) return false;
  }
  return true;
}

function validaColuna(coluna, numero) {
  for (let i = 0; i < 9; i++) {
    if (tabuleiro[i][coluna] === numero) return false;
  }
  return true;
}

function validaQuadrante(linha, coluna, numero) {
  const inicioLinha = Math.floor(linha / 3) * 3;
  const inicioColuna = Math.floor(coluna / 3) * 3;
  for (let i = inicioLinha; i < inicioLinha + 3; i++) {
    for (let j = inicioColuna; j < inicioColuna + 3; j++) {
      if (tabuleiro[i][j] === numero) return false;
    }
  }
  return true;
}

function jogar(linha, coluna, numero) {
  if (tabuleiro[linha][coluna] !== null) return false;
  if (!validaLinha(linha, numero)) return false;
  if (!validaColuna(coluna, numero)) return false;
  if (!validaQuadrante(linha, coluna, numero)) return false;

  tabuleiro[linha][coluna] = numero; // insere o número
  return true;
}

function venceu() {
  for (let linha of tabuleiro) {
    if (linha.includes(null)) return false;
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntarJogada() {
  mostrarTabuleiro();

  rl.question("Linha (0 a 8): ", (linha) => {
    rl.question("Coluna (0 a 8): ", (coluna) => {
      rl.question("Número (1 a 9): ", (numero) => {

        linha = parseInt(linha);
        coluna = parseInt(coluna);
        numero = parseInt(numero);

        if (
          isNaN(linha) || isNaN(coluna) || isNaN(numero) ||
          linha < 0 || linha > 8 ||
          coluna < 0 || coluna > 8 ||
          numero < 1 || numero > 9
        ) {
          console.log("Entrada inválida ❌");
        } else if (!jogar(linha, coluna, numero)) {
          console.log("Jogada inválida ❌");
        }

        if (venceu()) {
          mostrarTabuleiro();
          console.log("Parabéns! Você completou o Sudoku 🏆");
          rl.close();
        } else {
          perguntarJogada(); // continua o jogo
        }

      });
    });
  });
}

/* =========================
   INICIAR JOGO
========================= */
perguntarJogada();
