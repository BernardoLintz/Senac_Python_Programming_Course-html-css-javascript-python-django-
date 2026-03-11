base_usuarios = [
    {"id": 101, "nome": "Alice"},
    {"id": 102, "nome": "Bruno"},
    {"id": 103, "nome": "Carla"}
    ]

pesquisa_id = int(input('Digite o id que quer encontrar:\n'))
encontrado = False
for i in base_usuarios:
    if i["id"] == pesquisa_id:
        print(i["nome"])
        encontrado = True

if not encontrado:
    print("Usuário não encontrado")