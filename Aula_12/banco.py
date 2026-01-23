class ContaBancaria:
    def __init__(self, numero, titular):
        self.numero = numero
        self.titular = titular
        self.saldo = 0.0
        self.historico = []
    
    def depositar(self, valor):
        if valor > 0:
            self.saldo += valor
            self.historico.append(f"Depósito: +R${valor:.2f}")
            print(f"Depósito de R${valor:.2f} realizado. Saldo: R${self.saldo:.2f}")
        else:
            print("Valor inválido para depósito.")
    
    def sacar(self, valor):
        if valor > 0 and self.saldo >= valor:
            self.saldo -= valor
            self.historico.append(f"Saque: -R${valor:.2f}")
            print(f"Saque de R${valor:.2f} realizado. Saldo: R${self.saldo:.2f}")
        else:
            print("Saldo insuficiente ou valor inválido.")
    
    def mostrar_status(self):
        print(f"\n=== CONTA {self.numero.upper()} ===")
        print(f"Titular: {self.titular}")
        print(f"Saldo atual: R${self.saldo:.2f}")
    
    def mostrar_extrato(self):
        print(f"\n=== EXTRATO CONTA {self.numero} ===")
        print(f"Titular: {self.titular}")
        print(f"Saldo: R${self.saldo:.2f}")
        print("\nÚltimas transações:")
        
        # Laço for para últimas 5 transações
        ultimas = self.historico[-5:]  # Pega últimas 5
        if ultimas:
            for i, transacao in enumerate(ultimas, 1):
                print(f"{i}. {transacao}")
        else:
            print("Nenhuma transação ainda.")
        print("-" * 40)

# === PROGRAMA PRINCIPAL ===
conta = ContaBancaria("001", "João Silva")

while True:
    print("\n=== BANCO JWC ===")
    print("1 - Depositar")
    print("2 - Sacar")
    print("3 - Extrato")
    print("4 - Status")
    print("0 - Sair")
    
    opcao = input("Escolha uma opção: ").strip()
    
    if opcao == "1":
        try:
            valor = float(input("Valor do depósito: R$"))
            conta.depositar(valor)
        except ValueError:
            print("Digite um número válido.")
    
    elif opcao == "2":
        try:
            valor = float(input("Valor do saque: R$"))
            conta.sacar(valor)
        except ValueError:
            print("Digite um número válido.")
    
    elif opcao == "3":
        conta.mostrar_extrato()
    
    elif opcao == "4":
        conta.mostrar_status()
    
    elif opcao == "0":
        print("Obrigado por usar o Banco JWC!")
        break
    
    else:
        print("Opção inválida. Tente novamente.")
