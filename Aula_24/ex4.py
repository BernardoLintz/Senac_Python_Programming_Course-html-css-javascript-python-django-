class CarteiraDigital:
    def __init__(self, nome_titular, saldo):
        self.nome_titular = nome_titular
        self.saldo = saldo

    def transferir_pix(self, valor, carteira_destino):
        if valor <= self.saldo:
            self.saldo -= valor
            carteira_destino.saldo += valor
            print(f"Transferência de R$ {valor} realizada com sucesso!")
        else:
            print("Erro: Saldo insuficiente para realizar o PIX.")

cliente_a = CarteiraDigital("João", 500.00)
cliente_b = CarteiraDigital("Maria", 100.00)

print(cliente_a.saldo)
print(cliente_b.saldo)

cliente_a.transferir_pix(150.00, cliente_b)

print(cliente_a.saldo)
print(cliente_b.saldo)