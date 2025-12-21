'''
Crea una función que convierta una variable en una cadena de texto y enmascare todos los caracteres con el carácter '#' excepto los últimos cuatro.
'''

def enmascarar(variable):
    texto = str(variable)
    if len(texto) <= 4:
        return texto
    return "#" * (len(texto) -4) + texto[-4:]

print(enmascarar("Ya llegó la navidad"))
print(enmascarar(1234567))