def obtener_momento_del_dia(hora):
    if 0 <= hora < 6:
        return "Es de noche."
    elif 6 <= hora < 12:
        return "Es de día (mañana)."
    elif 12 <= hora < 20:
        return "Es de por la tarde."
    elif 20 <= hora <= 23:
        return "Es de noche."
    else:
        return "Hora fuera de rango (0-23)."


try:
    hora_usuario = int(input("Introduce la hora (0-23): "))
    resultado = obtener_momento_del_dia(hora_usuario)
    print(resultado)

except ValueError:
    print("Error: Debes introducir un número entero entre 0 y 23.")
