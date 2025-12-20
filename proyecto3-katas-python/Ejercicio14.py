'''
Crea una función que retorne las palabras de una lista que comiencen con una letra en específico. Usa la función filter().
'''

frase = "Ya llego la navidad"
letra_inicial = 'n'

def filtro_letra(frase, letra):
    palabras = frase.split()
    filtro = list(filter(lambda x: x.lower().startswith(letra.lower()) , palabras))
    return filtro

print(filtro_letra(frase, letra_inicial))