estoque=[
    {
        "id": 1,
        "nome": "Notebook",
        "quantidade":3,
        "preco": 1500.00,
    },
        {
        "id": 2,
        "nome": "Smartphone",
        "quantidade": 5,
        "preco": 2500.00,
    },
        {
        "id": 3,
        "nome": "Smartwatch",
        "quantidade": 10,
        "preco": 500.00,
    },
]

def calcular_patrimonio():
    valor_total=0
    for i in estoque:
        valor_total = valor_total + (i["quantidade"] * i["preco"])

    print(f'O patrimônio da empresa é de {valor_total}')

calcular_patrimonio() # Callback de função