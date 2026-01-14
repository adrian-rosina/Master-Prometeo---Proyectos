import math

def calcular_area(figura, datos):
    figura = figura.lower()

    if figura == "rectangulo":
        if len(datos) != 2:
            raise ValueError("Para un rectángulo debes proporcionar (base, altura).")
        base, altura = datos
        return base * altura

    elif figura == "circulo":
        if len(datos) != 1:
            raise ValueError("Para un círculo debes proporcionar (radio,).")
        (radio,) = datos
        return math.pi * radio ** 2

    elif figura == "triangulo":
        if len(datos) != 2:
            raise ValueError("Para un triángulo debes proporcionar (base, altura).")
        base, altura = datos
        return (base * altura) / 2

    else:
        raise ValueError("Figura no válida. Usa: rectangulo, circulo o triangulo.")

print(calcular_area("rectangulo", (5, 3)))   
print(calcular_area("circulo", (4,)))        
print(calcular_area("triangulo", (6, 2)))    
