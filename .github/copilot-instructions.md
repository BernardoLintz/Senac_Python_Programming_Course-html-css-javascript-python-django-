# Copilot Instructions for Web Development Projects

## Project Overview
Educational web development repository (Portuguese) containing JavaScript learning exercises from Aula 1-10, progressing from basic syntax through game development using HTML, CSS, and JavaScript.

## Architecture & Key Patterns

### Project Structure
- **Aula 1-3**: Fundamentals (HTML/CSS, basic JS)
- **Aula 4-8**: Core concepts (conditionals, functions, loops, arrays/vectors)
- **Aula 9**: Game projects (Sudoku, Batalha Naval)
- **Aula 10**: Real-world app (Estoque/Inventory Management System)

### Code Organization Patterns
- **Console-based games**: Use `readline-sync` for Node.js input; `readline` for interactive Node.js CLI
- **Browser games**: HTML file with embedded `<script>` tags, grid-based UI using CSS Grid
- **Data representation**: Matrices (2D arrays) for game boards and inventory data
- **Validation functions**: Separate validation from action (e.g., `jogadaValida()` separate from board updates)

### Common Data Structures
1. **Game Boards**: 9x9 matrix with 0/null for empty cells, numbers for filled
2. **Inventory Matrix**: `[ProductName, Price, Quantity]` per row
3. **Fixed/Immutable Cells**: Track with separate array (e.g., `fixos[linha][coluna] = true`)

## Essential Workflows

### Running Games
- **Console Sudoku** (`Aula_9/Sudoku/sudoku_v1.js`): `node sudoku_v1.js`
- **Browser Sudoku** (`Aula_9/Sudoku/script.js`): Open `index.html` in browser
- **Inventory System** (`Aula_10/script_estoque.js`): `node script_estoque.js`

### Testing Approach
- Use `console.table()` to visualize matrices
- Use `console.clear()` to refresh CLI output in game loops
- Test individual functions before integration
- Verify with small data samples first

## Project-Specific Conventions

### Naming Conventions
- **Portuguese identifiers**: Variable/function names in Portuguese (e.g., `tabuleiro`, `jogadaValida`, `mostrarEstoque`)
- **Case style**: camelCase for functions/variables, PascalCase for array constants (e.g., `Estoque`, `MostrarEstoque`)
- **Validation functions**: Prefix with validation context (e.g., `validaLinha()`, `validaColuna()`, `validaQuadrante()`)

### Game Logic Patterns
1. **Validation before mutation**: Always call validation function; only update state if valid
   ```javascript
   if (jogadaValida(tabuleiro, linha, coluna, numero)) {
       tabuleiro[linha][coluna] = numero;
   }
   ```
2. **Win conditions**: Check after each valid move with separate function (e.g., `verificarVitoria()`, `venceu()`)
3. **Game loop**: `while(true)` or `while(jogando)` with `console.clear()` at start, validation & display, then break conditions

### Input Validation
- Always validate: range (0-8 for 9x9 grids), type (isNaN check), and against constraints
- Return `false` immediately on first validation failure
- Provide user-friendly error messages in Portuguese

## Key Files & Patterns by Feature

| Feature | File | Pattern |
|---------|------|---------|
| Sudoku validation | [Aula_9/Sudoku/jogo_sudoku.js](Aula_9/Sudoku/jogo_sudoku.js#L17-L48) | Split validators: row, column, 3x3 box |
| Inventory operations | [Aula_10/script_estoque.js](Aula_10/script_estoque.js#L8-L31) | Matrix iteration with conditional logic |
| Browser UI | [Aula_9/Sudoku/index.html](Aula_9/Sudoku/index.html#L8-L26) | CSS Grid for game cells; state via classes |

## External Dependencies
- `readline-sync`: ^1.4.10 (for synchronous CLI input in Node.js projects)
- No frontend frameworks; vanilla HTML/CSS/JavaScript only

## Common Pitfalls & Notes
1. **Infinite loops**: Always ensure game loop has valid exit condition
2. **Null vs 0**: Sudoku uses `null` in some files, `0` in others—match file convention
3. **Portuguese output**: UI messages must be in Portuguese per project scope
4. **Grid indexing**: 9x9 Sudoku uses 0-8 indices; validate before access
