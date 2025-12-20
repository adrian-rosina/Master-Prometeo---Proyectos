'''Genera una función que, al recibir una frase, devuelva una lista con la longitud de cada palabra. Usa la función map().
'''

frase = "Ya está aquí la navidad"
def calcular_longitud_palabras(frase):
    palabras = frase.split()
    longitud = list(map(lambda x: len(x), palabras))
    return longitud

print(calcular_longitud_palabras(frase))