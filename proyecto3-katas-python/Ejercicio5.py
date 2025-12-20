'''
Escribe una función que tome una lista de números como parámetro y un valor opcional
nota_aprobado (por defecto 5). La función debe calcular la media de los números en la 
lista y determinar si la media es mayor o igual que nota_aprobado. Si es así, el estado será 
"aprobado"; de lo contrario, "suspenso". La función debe devolver una tupla que contenga la media 
y el estado.

'''
notas = [5,7,4,3,9]
def aprovado(notas, nota_aprovado = 5):
    media = sum(notas) / len(notas)
    if media >= nota_aprovado:
        estado = "Aprobado"
    else:
        estado = "Suspenso"
    return(media, estado)
print(aprovado(notas))