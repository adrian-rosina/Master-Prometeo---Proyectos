'''
Crea una función que calcule el cubo de un número dado mediante una función lambda.
'''

numero = 5
def calcular_cubo(numero):
    cubo = lambda x : x**3
    return cubo(numero)
    
print(calcular_cubo(numero))