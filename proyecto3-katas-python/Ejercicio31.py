'''
Crea una función que solicite al usuario ingresar una lista de nombres y luego un nombre para buscar en esa lista. 
Si el nombre está en la lista, imprime un mensaje indicando que fue encontrado; de lo contrario, lanza una excepción.
'''
def buscar_nombre():
    entrada = input("Ingresa una lista de nombres separados por comas: ")
    lista_nombres = [n.strip().lower() for n in entrada.split(",")]

    nombre_buscar = input("Ingresa el nombre que deseas buscar: ").strip().lower()

    if nombre_buscar in lista_nombres:
        print(f"El nombre '{nombre_buscar}' fue encontrado en la lista.")
    else:
        raise Exception(f"El nombre '{nombre_buscar}' NO está en la lista.")
buscar_nombre()