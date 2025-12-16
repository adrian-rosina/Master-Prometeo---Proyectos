'''
Escribe una función que reciba una cadena de texto como parámetro y devuelva un diccionario con las frecuencias 
de cada letra en la cadena. Los espacios no deben ser considerados.
'''

frase = "Hola caracola"

def letras_repetidas(lista):
    contador_letras = {}
    
    for p in lista:
        if p != " ":
            if p in contador_letras:
                contador_letras[p] +=1
            else:
                contador_letras[p] = 1
    return contador_letras
    
print(letras_repetidas(frase))