class ArCondicionado:
    def __init__(self):
        self.ligado = False
        self.temperatura = 24

    def ligar(self):
        self.ligado = True

    def desligar(self):
        self.ligado = False

    def aumentar_temperatura(self):
        self.temperatura += 1

    def diminuir_temperatura(self):
        self.temperatura -= 1

ar = ArCondicionado()

ar.ligar()
ar.aumentar_temperatura()
ar.aumentar_temperatura()
ar.diminuir_temperatura()

print(f'status do ar: {ar.ligado}\ntemperatura: {ar.temperatura}')
