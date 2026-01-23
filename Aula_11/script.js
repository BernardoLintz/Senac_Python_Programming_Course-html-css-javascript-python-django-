// Aula 11: Programação Orientada a Objetos (Classes)

class Personagem {
    constructor(nome, forca, destreza, inteligencia){
        this.nome = nome;
        this.vida = forca * 2;
        this.forca = forca;
        this.destreza = destreza;
        this.inteligencia = inteligencia;
    }
statusPersonagem(){
    console.log(`Nome: ${this.nome}`);
    console.log(`Força: ${this.forca}`);
    console.log(`Destreza: ${this.destreza}`);
    console.log(`Inteligência: ${this.inteligencia}`);
    console.log(`Vida: ${this.vida}`);
    }
atacar(alvo){
    const ataque = this.destreza + Math.floor(Math.random() * 6);
    const defesa = alvo.destreza + Math.floor(Math.random() * 6);
    const dano = this.forca / 2;
    if(ataque > defesa){
        alvo.vida -= dano;
        console.log(`Você atingiu o inimigo!`);
        console.log(`Ataque bem sucedido! ${this.nome} causou ${dano} em ${alvo.nome}`)
    } else {
        console.log(`O inimigo defendeu.`)
    }
}
}

const frodo = new Personagem ("Frodo", 8, 14, 10);
const orc = new Personagem ("Orc", 10, 12, 9);
console.clear();
frodo.statusPersonagem();
console.log("--------------------------");
orc.statusPersonagem();
console.log("--------------------------");
frodo.atacar(orc);
orc.statusPersonagem();
console.log("--------------------------");
orc.atacar(frodo);
frodo.statusPersonagem();
