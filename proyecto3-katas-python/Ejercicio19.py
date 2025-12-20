'''
Crea una función lambda que filtre los números impares de una lista dada.
'''

lista = [1,2,3,4,5,6]
def filtrar_impares(lista):
    impares = list(filter(lambda x : x%2 !=0, lista))
    return impares
print(filtrar_impares(lista))