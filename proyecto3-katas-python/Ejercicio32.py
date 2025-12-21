'''
Crea una función que tome un nombre completo y una lista de empleados, busque el nombre en la 
lista y devuelva el puesto del empleado si se encuentra; de lo contrario, devuelve un mensaje indicando que la 
persona no trabaja aquí.
'''

empleados = [
    {"nombre": "Ana López", "puesto": "Desarrolladora"},
    {"nombre": "Carlos Pérez", "puesto": "Analista"},
    {"nombre": "María Gómez", "puesto": "Diseñadora"}
]

def obtener_puesto(nombre_completo, lista_empleados):
    for empleado in lista_empleados:
        if empleado["nombre"].lower() == nombre_completo.lower():
            return empleado["puesto"]
    return f"{nombre_completo} no trabaja aquí."

print(obtener_puesto("Carlos Pérez", empleados)) 
print(obtener_puesto("Juan Torres", empleados))