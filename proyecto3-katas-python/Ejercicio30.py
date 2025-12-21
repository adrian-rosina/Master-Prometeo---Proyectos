'''
Crea una función que determine si dos palabras son anagramas, es decir, si están formadas por las mismas 
letras pero en diferente orden.
'''

def son_anagramas(p1, p2):
    p1 = p1.replace(" ", "").lower()
    p2 = p2.replace(" ", "").lower()
    return sorted(p1) == sorted(p2)

print(son_anagramas("Roma", "Amor"))
print(son_anagramas("Navidad", "Halloween"))


