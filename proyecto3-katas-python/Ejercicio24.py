'''
Calcula la diferencia total en los valores de una lista. Usa la función reduce().
'''

from functools import reduce

lista = [1,2,3,4,5,6,7]
diferencia = reduce(lambda acc, x: acc - x, lista)
print(diferencia)