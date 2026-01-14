/* =========================
   GERADOR DE SUDOKU COM SOLUÇÃO ÚNICA
========================= */

// Função para criar tabuleiro completo válido usando backtracking
function criarTabuleiroCompleto() {
  const tab = Array.from({ length: 9 }, () => Array(9).fill(null));

  function isValido(tab, linha, coluna, numero) {
    for (let i = 0; i < 9; i++) {
      if (tab[linha][i] === numero || tab[i][coluna] === numero) return false;
    }
    const inicioLinha = Math.floor(linha / 3) * 3;
    const inicioColuna = Math.floor(coluna / 3) * 3;
    for (let i = inicioLinha; i < inicioLinha + 3; i++) {
      for (let j = inicioColuna; j < inicioColuna + 3; j++) {
        if (tab[i][j] === numero) return false;
      }
    }
    return true;
  }

  function preencher(tab) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (tab[i][j] === null) {
          const numeros = [1,2,3,4,5,6,7,8,9].sort(() => Math.random() - 0.5);
          for (let num of numeros) {
            if (isValido(tab, i, j, num)) {
              tab[i][j] = num;
              if (preencher(tab)) return true;
              tab[i][j] = null;
            }
          }
          return false; // backtrack
        }
      }
    }
    return true; // tabuleiro completo
  }

  preencher(tab);
  return tab;
}

// Função para remover células mantendo a solução única
function criarTabuleiroParaJogo(tabuleiroCompleto, removidosDesejados = 40) {
  const jogo = tabuleiroCompleto.map(row => row.slice());
  let removidos = 0;

  function copiaTab(tab) {
    return tab.map(r => r.slice());
  }

  function contaSolucoes(tab) {
    let total = 0;

    function solver(t) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (t[i][j] === null) {
            for (let n = 1; n <= 9; n++) {
              if (jogadaValida(t, i, j, n)) {
                t[i][j] = n;
                solver(t);
                t[i][j] = null;
              }
            }
            return;
          }
        }
      }
      total++;
    }

    solver(copiaTab(tab));
    return total;
  }

  while (removidos < removidosDesejados) {
    const i = Math.floor(Math.random() * 9);
    const j = Math.floor(Math.random() * 9);
    if (jogo[i][j] !== null) {
      const backup = jogo[i][j];
      jogo[i][j] = null;

      // Garante solução única
      if (contaSolucoes(jogo) !== 1) {
        jogo[i][j] = backup; // volta se não for único
      } else {
        removidos++;
      }
    }
  }

  return jogo;
}

/* =========================
   VALIDAÇÃO
========================= */

function jogadaValida(tab, linha, coluna, numero) {
  for (let i = 0; i < 9; i++) {
    if (i !== linha && tab[i][coluna] === numero) return false;
  }
  for (let j = 0; j < 9; j++) {
    if (j !== coluna && tab[linha][j] === numero) return false;
  }
  const inicioLinha = Math.floor(linha / 3) * 3;
  const inicioColuna = Math.floor(coluna / 3) * 3;
  for (let i = inicioLinha; i < inicioLinha + 3; i++) {
    for (let j = inicioColuna; j < inicioColuna + 3; j++) {
      if ((i !== linha || j !== coluna) && tab[i][j] === numero) return false;
    }
  }
  return true;
}

/* =========================
   INTERFACE HTML
========================= */

let tabuleiroCompleto = criarTabuleiroCompleto();
let tabuleiro = criarTabuleiroParaJogo(tabuleiroCompleto, 40);

const container = document.getElementById("tabuleiro");
const mensagem = document.getElementById("mensagem");

function renderTabuleiro() {
  container.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.classList.add("celula");

      if (tabuleiro[i][j] !== null) {
        input.value = tabuleiro[i][j];
        input.disabled = true;
        input.classList.add("fixa");
      }

      input.addEventListener("input", () => {
        const numero = parseInt(input.value);
        if (!numero || numero < 1 || numero > 9) {
          input.value = "";
          input.classList.remove("correta", "errada");
          return;
        }

        // Se célula fixa ou já correta, não altera
        if (input.classList.contains("fixa") || input.classList.contains("correta")) {
          input.value = tabuleiro[i][j] || "";
          return;
        }

        // Compara com tabuleiro completo
        if (numero === tabuleiroCompleto[i][j]) {
          tabuleiro[i][j] = numero;
          input.classList.add("correta");
          input.classList.remove("errada");
          input.disabled = true;
          checaVitoria();
        } else {
          input.classList.add("errada");
          input.classList.remove("correta");
        }
      });

      container.appendChild(input);
    }
  }
}

function checaVitoria() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (tabuleiro[i][j] !== tabuleiroCompleto[i][j]) return;
    }
  }
  mensagem.textContent = "🎉 Parabéns! Você completou o Sudoku!";
}

document.getElementById("reiniciar").addEventListener("click", () => {
  tabuleiroCompleto = criarTabuleiroCompleto();
  tabuleiro = criarTabuleiroParaJogo(tabuleiroCompleto, 40);
  mensagem.textContent = "";
  renderTabuleiro();
});

renderTabuleiro();

    