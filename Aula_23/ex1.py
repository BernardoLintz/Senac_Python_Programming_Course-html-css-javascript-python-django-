valor_total = float(input("digite valor total:\n"))
saldo_usuario = float(input("digite saldo:\n"))
cupom_valido = True

if cupom_valido:
    valor_total = valor_total * 0.9

if saldo_usuario >= valor_total:
    print("201 Created - Pedido realizado com sucesso")
else:
    print("402 Payment Required - Saldo insuficiente")