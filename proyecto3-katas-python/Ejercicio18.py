'''
Escribe un programa en Python que cree una lista de diccionarios con información de estudiantes 
(nombre, edad, calificación) y use filter para extraer a los estudiantes con una calificación mayor o igual a 90.
'''

estudiantes = [ 
    {"nombre": "Ana", "edad": 20, "calificacion": 95}, 
    {"nombre": "Luis", "edad": 22, "calificacion": 88}, 
    {"nombre": "María", "edad": 19, "calificacion": 91}, 
    {"nombre": "Carlos", "edad": 21, "calificacion": 73} 
    ]

estudiantes_destacados = list(filter(lambda x: x["calificacion"] >=90, estudiantes))

print(estudiantes_destacados)