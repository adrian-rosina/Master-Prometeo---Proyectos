'''
Crea una función lambda que sume 3 a cada número de una lista dada.
'''

lista = [1,2,3,4]
def sumar_3(lista):
    sumar = list(map(lambda x: x+3,lista))
    return sumar

print(sumar_3(lista))