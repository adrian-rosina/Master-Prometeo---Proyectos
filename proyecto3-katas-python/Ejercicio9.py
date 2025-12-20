'''
Escribe una función que tome una lista de nombres de mascotas como parámetro y devuelva una 
nueva lista excluyendo ciertas mascotas prohibidas en España. La lista de mascotas a excluir es 
["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]. Usa la función filter().

'''

animales = ["Gaviota", "Serpiente de cascabel", "Cocodrilo", "Tarántula"]
mascotas_prohibidas = ["Mapache", "Tigre", "Serpiente Pitón", "Cocodrilo", "Oso"]
def mascotas_permitidas(animales):
    resultado = list(filter(lambda x: x not in mascotas_prohibidas, animales))
    return resultado
print (mascotas_permitidas(animales))