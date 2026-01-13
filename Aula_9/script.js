//const teste = ["primeiro", "segundo", "terceiro"]
//console.log(teste);

const alunos = [
    ["Diego", 10],
    ["Laura", 9],
    ["Carol", 7]
];
    console.clear();
    console.table(alunos[1][1]);

    alunos.push(["Coelho", 3, "reprovado"]); //adiciona um elemento a matriz
    console.table(alunos);

    alunos[0][1] = 9 //altera o valor de um indice. primeiro numero refere a linha e o segundo a coluna

    alunos[0][2] = "aprovado"; //cria uma nova coluna
    alunos[1][2] = "aprovado";
    alunos[2][2] = "aprovado";
    alunos.splice(2,1) // remove elemento da matriz
    console.table(alunos);