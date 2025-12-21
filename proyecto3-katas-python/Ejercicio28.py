'''
Crea una función que busque y devuelva el primer elemento duplicado en una lista dada.
'''

lista = [1,2,2,3,4,5,5]

def buscar_duplicados(numeros):

    vistos = set()
    for n in numeros:
        if n in vistos:
            return n
        vistos.add(n)
    return None  #Si no hay duplicados
print(buscar_duplicados(lista))