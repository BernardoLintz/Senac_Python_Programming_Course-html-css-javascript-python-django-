import math
ESTOQUE_MIN = 5
estoque = [
    ["Monitor LG 24\"", 450, 8],
    ["Teclado Mecânico", 350, 3],
    ["Mouse Wireless", 85, 15],
    ["Webcam HD", 120, 2],
    ["Headset Gamer", 280, 6],
]

# Parte 1

def mostrar_estoque():
    print("\n============== ESTOQUE ATUAL ==============")

    for produto in estoque:
        print("")
        print(f"{produto[0]} | R$ {produto[1]: .2f} | {produto[2]} unidades")