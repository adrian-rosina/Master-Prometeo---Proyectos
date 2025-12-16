'''
Escribe una función que tome una lista de 
palabras y una palabra objetivo como parámetros.
La función debe devolver una lista con todas 
las palabras de la lista original que contengan 
la palabra objetivo.
'''

frase = "Esto es un contador de palabras en python"

def palabra_objetivo (lista, objetivo):
    palabra = []
    for p in lista:
        if objetivo in p:
            palabra.append(p)
    return palabra

palabras = ["caracol","carraca","caracola","cara","carrera"]
objetivo ="ol"

print(palabra_objetivo(palabras, objetivo))
