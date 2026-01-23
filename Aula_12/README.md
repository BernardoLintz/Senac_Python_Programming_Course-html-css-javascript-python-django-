# 🏦 Projeto Sistema Bancário

A JWC Technology está desenvolvendo um app de banco digital e precisa de um protótipo para demonstrar suas funcionalidades básicas. Você foi designado para criar esse sistema de contas bancárias com operações simples.

Este projeto integra **Classes/Objetos**, **loops** (`for` e `while`), **condicionais** e **funções**.

Rode no navegador usando o index.html (JS), ou no terminal integrado do VS Code (no terminal, escreva `python banco.py`)

---

## 📋 Objetivos de Aprendizado

Ao final, você dominará:
✅ Criação de classes com construtor e métodos  
✅ Atributos de instância (`self` / `this`)  
✅ Integração de OO com loops de menu  
✅ Laços `for` para simular histórico de transações  
✅ Validações e tratamento de erros  

---

## 🏦 O Problema

Crie um **sistema bancário** com:

1. **Classe `ContaBancaria`**: Gerencia uma conta individual  
2. **Menu interativo** (`while`) com operações  
3. **Histórico de transações** (`for` simples para listar últimas 5)  
4. **Validações** (saldo insuficiente, etc.)

---

## 📦 Preparação: Estrutura da Conta

Cada conta tem:
| Atributo     | Tipo  | Exemplo      |
|--------------|-------|--------------|
| numero       | str   | "001"        |
| titular      | str   | "João Silva" |
| saldo        | float | 1500.50      |

---

## 🎮 Desafios do Projeto

### **Desafio 1: Criar a Classe ContaBancaria**
Implemente a classe com:

**Atributos obrigatórios:**
- [ ] `numero`, `titular`, `saldo` (inicia em 0)  
- [ ] `historico` (lista para guardar últimas transações)

**Métodos obrigatórios:**
- [ ] `depositar(valor)`: adiciona ao saldo, registra no histórico  
- [ ] `sacar(valor)`: verifica saldo, subtrai se possível  
- [ ] `mostrar_extrato()`: exibe saldo + últimas 5 transações (use `for`)  
- [ ] `mostrar_status()`: dados básicos da conta  

> [!tip] Dica  
> Histórico: `this.historico.push("Depósito: +R$100")` (JS) ou `self.historico.append(...)` (Python)

---

### **Desafio 2: Menu Interativo (Game Loop com `while`)**
Crie um menu que rode até opção 0:

```
=== BANCO JWC ===
1 - Depositar
2 - Sacar
3 - Extrato
4 - Status
0 - Sair
```

**Fluxo:**
- [ ] Loop `while` até opção 0  
- [ ] `prompt/input` para opção  
- [ ] Chame métodos da classe conforme opção  
- [ ] Valide entradas (números positivos)

---

### **Desafio 3: Laço `for` - Histórico Limitado**
No método `mostrar_extrato()`:

- [ ] Use `for` para mostrar **APENAS as últimas 5** transações  
- [ ] Se histórico < 5, mostre todas  
- [ ] Formate: "2026-01-21 12:00 - Depósito R$500"

> [!important] Importante  
> Use `slice(-5)` (JS) ou `historico[-5:]` (Python) para pegar últimas 5.

---

### **Desafio 4: Testes Obrigatórios**
Crie uma conta e execute:

```
Conta #001 - João Silva

Depositar R$1000 → Saldo: 1000

Sacar R$300 → Saldo: 700

Depositar R$500 → Saldo: 1200

Extrato → Lista transações
```

**Saída esperada no extrato:**

```
Últimas 5 transações:

Depósito R$1000

Saque R$300

Depósito R$500
Saldo atual: R$1200.00
```
