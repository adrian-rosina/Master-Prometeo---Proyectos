'''
Escribe un programa que pida al usuario que introduzca su edad. Si el usuario ingresa un valor no numérico o un valor fuera del rango esperado 
(por ejemplo, menor que 0 o mayor que 120), maneja las excepciones adecuadamente.
'''
try:
    edad = int(input("introduce tu edad"))


    if edad < 0 or edad > 120:
        raise ValueError("La edad debe estar entre 0 y 120")
    print("Tu edad es: ", edad)

except ValueError as e:
    print("Error:", e)


