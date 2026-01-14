def contar_palabras(texto):
    palabras = texto.split()
    conteo = {}

    for palabra in palabras:
        palabra = palabra.lower()
        conteo[palabra] = conteo.get(palabra, 0) + 1

    return conteo


def reemplazar_palabras(texto, palabra_original, palabra_nueva):
    return texto.replace(palabra_original, palabra_nueva)


def eliminar_palabra(texto, palabra_a_eliminar):
    palabras = texto.split()
    palabras_filtradas = [p for p in palabras if p != palabra_a_eliminar]
    return " ".join(palabras_filtradas)


def procesar_texto(texto, opcion, *args):
    if opcion == "contar":
        return contar_palabras(texto)

    elif opcion == "reemplazar":
        if len(args) != 2:
            raise ValueError("Para 'reemplazar' debes proporcionar palabra_original y palabra_nueva.")
        return reemplazar_palabras(texto, args[0], args[1])

    elif opcion == "eliminar":
        if len(args) != 1:
            raise ValueError("Para 'eliminar' debes proporcionar la palabra a eliminar.")
        return eliminar_palabra(texto, args[0])

    else:
        raise ValueError("Opción no válida. Usa: 'contar', 'reemplazar' o 'eliminar'.")
texto = "hola mundo hola python mundo hola"

# 1. Contar palabras
resultado_contar = procesar_texto(texto, "contar")
print("Conteo de palabras:", resultado_contar)

# 2. Reemplazar palabra
resultado_reemplazar = procesar_texto(texto, "reemplazar", "hola", "hey")
print("Texto reemplazado:", resultado_reemplazar)

# 3. Eliminar palabra
resultado_eliminar = procesar_texto(texto, "eliminar", "mundo")
print("Texto sin 'mundo':", resultado_eliminar)
