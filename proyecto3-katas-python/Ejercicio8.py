'''
Escribe un programa que pida al usuario dos números e intente dividirlos. Si el usuario ingresa 
un valor no numérico o intenta dividir por cero, maneja esas excepciones de manera adecuada y 
muestra un mensaje indicando si la división fue exitosa o no.
'''
try:
    n1 = float(input("Escibe un numero"))
    n2 = float(input("Escribe otro numero"))
    resultado = float(n1 / n2)
    print(f"La división fue exitosa. El resultado es {resultado}")

except ValueError:
    print("Error: Debes introducir valores numéricos.")

except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")

except Exception as e:
    print(f"Ocurrió un error inesperado. {e}")
