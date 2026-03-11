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

estoque.append({"id": 4, "nome": "Drone", "quantidade": 1, "preco": 5000.00,})

print(estoque[1]["nome"])
