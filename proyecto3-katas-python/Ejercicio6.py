'''
Escribe una función que calcule el factorial de un número de manera recursiva.

'''
numero = 34

def calcular_factorial(numero):
    if numero == 0 or numero==1:
        return 1
    else:
        return numero * calcular_factorial(numero-1)
print(calcular_factorial(numero))