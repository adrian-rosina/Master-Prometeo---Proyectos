'''
Genera una función que calcule la diferencia entre los valores de dos listas. Usa la función map().

'''

lista1 = [5,15,20,20]
lista2 = [1,2,3,4]

def calcular_diferencia(lista1, lista2):
    resta = list(map(lambda x: lista1[x] - lista2[x], range(len(lista1))))
    return resta
print(calcular_diferencia(lista1,lista2))