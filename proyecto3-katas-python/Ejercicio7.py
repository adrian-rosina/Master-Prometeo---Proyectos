''' 
Genera una función que convierta una lista de tuplas a una lista de strings. Usa la función map().
'''
lista_tuplas =[(1,2,3,4), (5,6,7,8),(9,10,11,12)]
def conversion_tupla_tostring(lista_tuplas):
    conversion = list(map(lambda x:  str(x), lista_tuplas))
    return conversion

print (conversion_tupla_tostring(lista_tuplas))