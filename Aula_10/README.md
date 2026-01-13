# 📦 A09: Projeto Sistema de Gestão do Estoque JWC

A JWC Technology recebeu uma nova demanda de um cliente: criar um sistema de controle de estoque para uma loja de produtos eletrônicos. Você foi alocado para a tarefa e precisa demonstrar sua capacidade de integrar **Funções**, **Vetores** e **Matrizes** para resolver um problema real.

---

## 📋 Objetivos de Aprendizado

Ao final deste mini-projeto, você será capaz de:

✅ Manipular matrizes para armazenar dados complexos  
✅ Criar funções reutilizáveis com parâmetros e retorno  
✅ Usar loops para iterar sobre estruturas de dados  
✅ Implementar lógica condicional para validações  
✅ Exibir resultados estruturados no console  

---

## 🏪 O Problema

A loja de produtos eletrônicos precisa de um sistema que:

1. **Exiba informações dos produtos em estoque** (Nome, Preço, Quantidade em Estoque)
2. **Calcule valores totais** do estoque
3. **Identifique produtos com baixo estoque** (menor que 5 unidades)
4. **Gere relatórios** de vendas simuladas

---

## 📦 Preparação: Dados do Estoque (Matriz)

O estoque da loja será representado por uma matriz. As informações estão dispostas na tabela abaixo:

| Produto              | Preço Unitário (R$) | Quantidade em Estoque |
|----------------------|---------------------|-----------------------|
| Monitor LG 24"       | 450                 | 8                     |
| Teclado Mecânico     | 350                 | 3                     |
| Mouse Wireless       | 85                  | 15                    |
| Webcam HD            | 120                 | 2                     |
| Headset Gamer        | 280                 | 6                     |

- [ ] Transforme essa tabela em uma matriz no seu código

> [!tip]Dica
> ````
>Cada linha = um produto
>Cada coluna = [Nome do Produto, Preço Unitário, Quantidade em Estoque]
> ````

---

## 🎮 Desafios do Projeto

### **Desafio 1: Mostrar o Catálogo Completo**
Crie uma **função de nome`mostrarEstoque`** que:
- [ ] Receba a matriz de produtos como parâmetro
- [ ] Percorra cada linha (produto)
- [ ] Exiba no console as informações formatadas, por exemplo:
  ```
  Produto: Monitor LG 24"
  Preço: R$ 450.00
  Quantidade: 8 unidades
  ---
  ```

---

### **Desafio 2: Calcular Valor Total do Estoque**
Crie uma **função de nome `calcularValorTotal`** que:
- [ ] Percorra a matriz
- [ ] Para cada produto, multiplique: Preço × Quantidade
- [ ] Some todos os valores
- [ ] Retorne o valor total do estoque

> [!tip]Dica
> Use uma variável acumuladora dentro de um loop aninhado.

---

### **Desafio 3: Listar Produtos com Baixo Estoque**
Crie uma **função de nome `alertarBaixoEstoque`** que:
- [ ] Percorra a matriz
- [ ] Identifique produtos com quantidade < 5
- [ ] Exiba uma mensagem de alerta para cada um, por exemplo:
  ```
  ALERTA: Teclado Mecânico está com baixo estoque! (3 unidades)
  ```
> [!tip]Dica
> Essa mensagem de alerta deve ser exibida usando `console.log()`.
---

### **Desafio 4: Simular uma Venda e Atualizar o Estoque**
Crie uma **função de nome `realizarVenda`** que:
- [ ] Procure pelo produto na matriz usando o nome
- [ ] Verifique se há quantidade suficiente
- [ ] Se houver, diminua a quantidade e **retorne sucesso** (pode ser `true` ou uma mensagem)
- [ ] Se não houver, **retorne erro** (pode ser `false` ou uma mensagem)

#### Exemplo de uso esperado:
```javascript
realizarVenda(estoque, "Mouse Wireless", 3)
// Resultado: Mouse Wireless teve 3 unidades vendidas! Nova quantidade: 12
```

---

## 💡 Dicas Importantes

- **Comece simples:** Implemente o Desafio 1 primeiro, teste, depois passe para o 2;
- **Use console.log() frequentemente** para debugar valores;
- **Nomes descritivos:** Use nomes de funções e variáveis que deixem claro o que fazem;
- **Comente seu código:** Adicione comentários explicando a lógica principal

---
### *“Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam.”* – Martin Fowler
