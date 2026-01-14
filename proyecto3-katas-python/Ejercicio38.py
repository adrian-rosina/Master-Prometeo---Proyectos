def obtener_calificacion_texto(nota):
    if 0 <= nota <= 69:
        return "insuficiente"
    elif 70 <= nota <= 79:
        return "bien"
    elif 80 <= nota <= 89:
        return "muy bien"
    elif 90 <= nota <= 100:
        return "excelente"
    else:
        return "Nota fuera de rango (0-100)."


try:
    nota_usuario = int(input("Introduce la calificación numérica (0-100): "))
    resultado = obtener_calificacion_texto(nota_usuario)
    print("Calificación:", resultado)

except ValueError:
    print("Error: Debes introducir un número entero entre 0 y 100.")
