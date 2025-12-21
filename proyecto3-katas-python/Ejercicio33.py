'''
Crea una función lambda que sume elementos correspondientes de dos listas dadas.
'''
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]

sumar_listas = lambda a, b: list(map(lambda x, y: x + y, a, b))

print(sumar_listas(lista1, lista2))

