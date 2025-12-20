'''
Crea una función que tome una lista de dígitos y devuelva el número correspondiente. Por ejemplo, [5,7,2] corresponde al número 572. Usa la función reduce().
'''

from functools import reduce

digitos = [5,7,2]

def lista_a_numero(digitos):
    return reduce(lambda acc, x: acc * 10 + x, digitos)

print(lista_a_numero(digitos))
