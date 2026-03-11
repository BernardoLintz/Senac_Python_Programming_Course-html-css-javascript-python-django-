class Filme:
    def __init__(self,titulo, duracao):
        self.titulo = titulo
        self.duracao = duracao
        self.assistido = False
    
    def marcar_como_assistido(self):
        self.assistido = True
        print(f'{self.titulo} foi assistido!')

senhor_dos_aneis = Filme("Senhor dos Anéis", 180)
viagem_de_chihiro = Filme("Viagem de Chihiro", 120)

senhor_dos_aneis.marcar_como_assistido()

print(senhor_dos_aneis.assistido)
print(viagem_de_chihiro.assistido)