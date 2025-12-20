'''
Concatena una lista de palabras. Usa la función reduce().
'''
from functools import reduce

lista=["Ya","llegó","la", "Navidad"]

concatenado = reduce(lambda acc, x: acc + " " + x, lista)
print(concatenado)