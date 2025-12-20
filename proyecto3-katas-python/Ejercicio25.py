'''
Crea una función que cuente el número de caracteres en una cadena de texto dada.
'''

frase = "Ya llegó la navidad"
palabra = frase.split()
def contar_caracteres(cadena):
    contar = lambda x: len(x)
    return contar(cadena)
print(contar_caracteres(frase))