'''
Crea una función lambda que calcule el resto de la división entre dos números dados.
'''

n1 = 24
n2 = 5
def calcular_resto(numero1, numero2):
    resto = lambda x,y: x % y
    return resto(numero1,numero2)
    
    
print(calcular_resto(n1,n2))