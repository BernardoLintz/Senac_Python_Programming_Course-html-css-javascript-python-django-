class ContaBancaria {
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0.0;
        this.historico = [];
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            this.historico.push(`Depósito: R$ ${valor.toFixed(2)}`);
            console.log(`Valor depositado com sucesso! Seu saldo é de R$ ${this.saldo.toFixed(2)}`)
        } else {
            console.log(`Sinto muito!Valor inválido para deposito.`)
        }
    }
    sacar(valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            this.historico.push(`Saque: R$ ${valor.toFixed(2)}`);
            console.log(`Valor sacado com sucesso! Seu saldo é de R$ ${this.saldo.toFixed(2)}`)
        } else {
            console.log(`Sinto muito!Saldo insuficiente ou Valor inválido para saque.`)
        }
    }
    mostraStatus() {
        console.log(`\n-------CONTA ${this.numero.toUpperCase()}`);
        console.log(`Titular da conta: ${this.titular}`);
        console.log(`Saldo na conta: ${this.saldo.toFixed()}`);
    }

    mostrar_extrato() {
        console.log(`------EXTRATO CONSOLIDADO DA CONTA ${this.numero}------`)
        console.log(`${this.titular}`)
        console.log(`Seu saldo é de R$ ${this.saldo}`)
        console.log(`\nÚltimas transações:`)

        let UltimasTransacoes = this.historico.slice(-5);
        if (UltimasTransacoes.length > 0) {
            for (let i = 0; i < UltimasTransacoes.length; i++) {
                console.log(`${i + 1}: ${UltimasTransacoes[i]}`)
            }
        } else {
            console.log(`Nenhuma transação efetivada até o momento!`)
        }
    }
}

// Programa principal

let conta = new ContaBancaria("001", "João Silva");
let rodando = true;
while (rodando) {
    console.log(`\n===BANCO JWC===`);
    console.log(`1 - Depositar`);
    console.log(`2 - Sacar`);
    console.log(`3 - Extrato`);
    console.log(`4 - Status da Conta`);
    console.log(`0 - Sair`);

    let opcao = prompt(` Escolha uma opção: `);
    if (opcao === "1") {
        let valorDeposito = parseFloat(prompt(`Valor do depósito é de R$`));
        if (!isNaN(valorDeposito)) {
            conta.depositar(valorDeposito);
        } else {
            console.log("Digite um número válido");
        }
        prompt(`Pressiona Enter para continuar...`);
    } else if (opcao === "2") {
        let valorSaque = parseFloat(prompt(`Valor do saque é de R$`));
        if (!isNaN(valorSaque)) {
            conta.sacar(valorSaque)
        } else {
            console.log("Digite um número válido");
        }
        prompt(`Pressiona Enter para continuar...`);
    } else if (opcao === "3") {
        console.log(conta.mostrar_extrato());
        prompt(`Pressiona Enter para continuar...`);
    } else if (opcao === "4") {
        console.log(conta.mostraStatus());
        prompt(`Pressiona Enter para continuar...`);
    } else if (opcao === "0") {
        console.log(`Obrigado por usar o banco JWC. Volte sempre!`);
        rodando = false;
    } else {
        console.log(`Opção inválida! Tente novamente.`)
        prompt(`Pressiona Enter para continuar...`);
    }

}