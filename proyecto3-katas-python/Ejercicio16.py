'''
Escribe una función que tome una cadena de texto y un número entero n como parámetros y devuelva una lista de todas las 
palabras que sean más largas que n. Usa la función filter().
'''

frase = "Ya llegó la navidad"
n = 5

def longitud_frase(frase, n):
    palabras = frase.split()
    longitud = list(filter(lambda x: len(x) > n, palabras  ))
    return longitud

print(longitud_frase(frase, n))