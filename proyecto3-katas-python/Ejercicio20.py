'''
Para una lista con elementos de tipo integer y string, obtén una nueva lista solo con los valores int. 
Usa la función filter().
'''

lista=[2,3,4,"Navidad", "Titanic"]
nueva_lista = list(filter(lambda x: isinstance(x, int), lista))
print (nueva_lista)