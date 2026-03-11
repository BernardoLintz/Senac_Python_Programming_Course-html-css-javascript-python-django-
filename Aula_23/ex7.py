itens_estoque = [12, 3, 8, 2, 15, 4, 20] #Vetor ou Array
menos_que_5 = 0

for i in itens_estoque:
    if i<5:
        menos_que_5 += 1 # menos_que_5 = menos_que_5 + 1

print(f'ATENÇÃO! existem {menos_que_5} produtos com estoque menor que 5')