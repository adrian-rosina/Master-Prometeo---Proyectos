'''
Escribe una función que reciba una lista de números y calcule su promedio. Si la lista está vacía, 
lanza una excepción personalizada y maneja el error adecuadamente.
'''
# Definimos una excepción personalizada

class ListaVaciaError(Exception):
    pass

def promedio(numeros):
    if not numeros:  # lista vacía
        raise ListaVaciaError("La lista está vacía, no se puede calcular el promedio.")
    
    return sum(numeros) / len(numeros)


numeros = [1, 2, 3, 4, 5]

try:
    media = promedio(numeros)
    print("El promedio es:", media)
except ListaVaciaError as e:
    print("Error:", e)
