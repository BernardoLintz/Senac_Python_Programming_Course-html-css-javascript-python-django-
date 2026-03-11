class ArCondicionado:
    def __init__(self):
        self.ligado = False
        self.temperatura = 24

    def ligar(self):
        self.ligado = True

    def desligar(self):
        self.ligado = False

    def aumentar_temperatura(self, grau): #grau como paramentro pois futuramente o usuário que irá definir
        self.temperatura += grau

    def diminuir_temperatura(self, grau): #grau como paramentro pois futuramente o usuário que irá definir
        self.temperatura -= grau

ar = ArCondicionado()

ar.ligar()
ar.aumentar_temperatura(int(input("quanto deseja aumentar?"))) #input de grau
ar.diminuir_temperatura(int(input("quanto deseja diminuir?"))) #input de grau

print(f'status do ar: {ar.ligado}\ntemperatura: {ar.temperatura}')
