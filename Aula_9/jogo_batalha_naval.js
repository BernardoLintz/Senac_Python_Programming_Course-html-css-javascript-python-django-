const tabuleiro = [];

for (let i = 0; i < 5; i++) {
    const linha = [];
    
    for(let j = 0; j < 5; j++){
           linha.push("~");
        }
            tabuleiro.push(linha);
    }
            console.table(tabuleiro);

const navioLinha = Math.floor(Math.random() * 5);
const navioColuna = Math.floor(Math.random() * 5)

let jogando = true;
    while (jogando) {

        console.clear();
        console.table(tabuleiro);
        console.warn("Navio em: " + navioLinha + ", " + navioColuna);

        const tiroLinha = parseInt(prompt("Qual linha (0-4)? "));
        const tiroColuna = parseInt(prompt("Qual coluna (0-4)?"));

        if (tiroLinha === navioLinha && tiroColuna === navioColuna){
            alert("Acertou! Navio afundado!");
            tabuleiro[tiroLinha][tiroColuna] = "X"
            console.table(tabuleiro);
            jogando = false;

            } else {

                alert("Tiro na água...tente de novo.");
                tabuleiro[tiroLinha][tiroColuna] = "o"
            }
} 

