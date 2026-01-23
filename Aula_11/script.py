import random
class Personagem:
    def __init__(self, nome, forca, destreza, inteligencia):
        self.nome = nome
        self.vida = forca * 2
        self.forca = forca
        self. destreza = destreza
        self.inteligencia = inteligencia

    def statusPersonagem(self):
        print(f"Nome: {self.nome}")
        print(f"Força: {self.forca}")
        print(f"Destreza: {self.destreza}")
        print(f"Inteligencia: {self.inteligencia}")
        print(f"Vida: {self.vida}")

    def atacar(self, alvo):
        ATAQUE = self.destreza - random.randint(1,6)
        DEFESA = alvo.destreza - random.randint(1,6)
        DANO = self.forca / 2
        if(ATAQUE >= DEFESA):
            alvo.vida -= DANO
            print(f"Ataque bem sucedido! {self.nome} causou {DANO} de dano em {alvo.nome}")
        else:
            print(f"{alvo.nome} defendeu o ataque.")

FRODO = Personagem("Frodo", 8, 14, 10)
ORC = Personagem("Orc", 10, 12, 9)

FRODO.statusPersonagem()
print(f"-----------------------")
ORC.statusPersonagem()
print(f"-----------------------")
FRODO.atacar(ORC)
ORC.statusPersonagem()
print(f"-----------------------")
ORC.atacar(FRODO)
