usuarios = [
{"id": 1, "nome": "Ana", "email": "ana@email.com", "ativo": True},
{"id": 2, "nome": "Beatriz", "email": "bea@email.com", "ativo": False},
{"id": 3, "nome": "Carlos", "email": "car@email.com", "ativo": True}
]

usuarios_ativos = []

for i in usuarios:
    if i["ativo"]:
        usuarios_ativos.append(i)

for i in usuarios_ativos:
    print(i["nome"])