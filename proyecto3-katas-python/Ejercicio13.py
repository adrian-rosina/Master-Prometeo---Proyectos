'''
-Genera una función que, para un conjunto de caracteres, devuelva una lista de tuplas con cada letra en mayúsculas y minúsculas. 
Las letras no pueden estar repetidas. Usa la función map().
'''

def mayus_minus(caracteres):
    # Generamos las tuplas (MAYÚSCULA, minúscula)
    tuplas = list(map(lambda c: (c.upper(), c.lower()), caracteres))

    # Eliminamos duplicados convirtiendo la lista de tuplas en un set
    sin_duplicados = list(set(tuplas))

    return sin_duplicados

# Ejemplo
caracteres = ['a', 'A', 'b',  'c',  'a']
print(mayus_minus(caracteres))
