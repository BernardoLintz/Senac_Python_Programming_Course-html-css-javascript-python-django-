class ContaBancaria:
    def __init__(self, titular):
        self.titular = titular
        self.saldo = 0.0
    
    def depositar(self, valor):
        self.saldo += valor
        print(f'Saldo atual: {self.saldo}')

    def sacar(self, valor):
        if (valor <= self.saldo):
            self.saldo -= valor
            print(f'Saldo atual: {self.saldo}')
        else:
            print("Saque negado: Saldo insuficiente.")
            print(f'Saldo atual: {self.saldo}')

minha_conta = ContaBancaria("Gustavo")
minha_conta.depositar(100.0)
minha_conta.sacar(150.00)
minha_conta.sacar(50.00)

