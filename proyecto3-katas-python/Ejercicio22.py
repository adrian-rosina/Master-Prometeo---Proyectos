
from functools import reduce

lista = [2, 3, 4, 5]

producto_total = reduce(lambda acc, x: acc * x, lista)

print(producto_total)