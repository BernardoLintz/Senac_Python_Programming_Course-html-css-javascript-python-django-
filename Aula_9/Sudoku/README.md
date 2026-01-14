# 🧩 A09: Projeto Sudoku

Vamos construir um jogo de **Sudoku** utilizando **JavaScript** e **Matrizes (Grids)**.  
O objetivo é permitir que o jogador complete corretamente um tabuleiro 9x9 respeitando as regras do jogo.

Usaremos conceitos de:
- Matrizes (arrays 2D)
- Laços de repetição
- Condicionais
- Funções
- Entrada de dados
- Manipulação do DOM

Utilize o arquivo index.html providenciado para rodar o código no navegador.

---

## **Parte 1: Criando o Tabuleiro**
Todo jogo precisa de um mapa. No Sudoku, esse mapa é uma matriz 9x9.

- [ ] Crie uma variável chamada tabuleiro
- [ ] O tabuleiro deve ser uma matriz 9x9
- [ ] Use o número 0 para representar casas vazias
- [ ] Preencha algumas posições com números fixos

Exemplo de estrutura do tabuleiro:

    const tabuleiro = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

Dica:  
Use console.table(tabuleiro) para visualizar o tabuleiro.

---

## **Parte 2: Exibindo o Tabuleiro**
Antes de jogar, o jogador precisa ver o estado atual do Sudoku.

- [ ] Crie uma função chamada mostrarTabuleiro
- [ ] Limpe o console com console.clear()
- [ ] Mostre o tabuleiro usando console.table(tabuleiro)

---

## **Parte 3: Loop do Jogo (Game Loop)**
O jogo deve continuar rodando até o Sudoku ser completado.

- [ ] Crie uma variável jogando e defina como true
- [ ] Crie um laço while que rode enquanto jogando for verdadeiro
- [ ] Dentro do laço, chame mostrarTabuleiro()

Cuidado:  
Sempre garanta uma condição de saída para evitar loop infinito.

---

## **Parte 4: Entrada do Jogador**
Vamos permitir que o jogador insira uma jogada.

- [ ] Peça a linha (0 a 8)
- [ ] Peça a coluna (0 a 8)
- [ ] Peça o número (1 a 9)
- [ ] Use prompt() para capturar os valores
- [ ] Converta tudo com parseInt()

---

## **Parte 5: Validação da Jogada**
Antes de inserir o número, precisamos validar se a jogada respeita as regras do Sudoku.

- [ ] A posição escolhida deve estar vazia (0)
- [ ] O número não pode existir na mesma linha
- [ ] O número não pode existir na mesma coluna
- [ ] O número não pode existir no mesmo bloco 3x3

- [ ] Se a jogada for inválida:
  - Exiba alert("Jogada inválida ❌")
- [ ] Se for válida:
  - Atualize o tabuleiro

---

## **Parte 6: Atualizando o Tabuleiro**
Após uma jogada válida:

- [ ] Insira o número na matriz tabuleiro
- [ ] Continue o loop do jogo
- [ ] Atualize a visualização no console

---

## **Parte 7: Condição de Vitória**
O jogo termina quando:

- [ ] Não existir mais nenhum 0 no tabuleiro
- [ ] Todas as regras do Sudoku forem respeitadas

- [ ] Exiba:
  alert("Parabéns! Você completou o Sudoku 🏆");
- [ ] Defina jogando = false

---

## **Parte 8: Criando a Interface Gráfica**
Agora vamos transformar o jogo em visual.

- [ ] Crie o arquivo index.html
- [ ] Crie uma div com id="tabuleiro"
- [ ] Importe o arquivo script.js

---

## **Parte 9: Estilizando o Tabuleiro**
Vamos aplicar o visual do Sudoku.

- [ ] Use display: grid
- [ ] Crie uma grade 9x9
- [ ] Defina células quadradas
- [ ] Centralize os números
- [ ] Destaque os blocos 3x3 com bordas mais grossas

---

## **Parte 10: Renderizando o Tabuleiro**
Ligando a matriz ao HTML.

- [ ] Percorra a matriz tabuleiro
- [ ] Crie um elemento HTML para cada célula
- [ ] Preencha automaticamente os números fixos
- [ ] Bloqueie a edição das células fixas

---

## **Parte 11: Interação do Usuário**
Permitindo jogadas pela interface gráfica.

- [ ] Permitir apenas números de 1 a 9
- [ ] Atualizar a matriz ao digitar
- [ ] Validar jogadas em tempo real

---

## **Parte 12: Feedback Visual**
O jogo deve responder às ações do jogador.

- [ ] Destacar erros em vermelho
- [ ] Indicar jogadas corretas
- [ ] Exibir mensagens de feedback

---

## **Parte 13: Final do Jogo**
Encerrando a partida.

- [ ] Detectar automaticamente quando o Sudoku estiver completo
- [ ] Exibir mensagem na tela:
  🎉 Você venceu!

---

"Errar rápido é a melhor forma de aprender rápido." 🚀
