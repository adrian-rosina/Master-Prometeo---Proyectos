'''
Crea una función que calcule el promedio de una lista de números.
'''

lista = [2,4,6,8]
def calcular_promedio(numeros):

    return sum(numeros) / len(numeros)

print(calcular_promedio(lista))