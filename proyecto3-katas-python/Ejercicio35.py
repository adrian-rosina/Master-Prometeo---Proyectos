class UsuarioBanco:
    def __init__(self, nombre, saldo, cuenta_corriente):
        self.nombre = nombre
        self.saldo = saldo
        self.cuenta_corriente = cuenta_corriente

    def retirar_dinero(self, cantidad):
        if cantidad > self.saldo:
            raise Exception(f"{self.nombre} no tiene suficiente saldo para retirar {cantidad}.")
        self.saldo -= cantidad

    def transferir_dinero(self, destino, cantidad):
        if cantidad > self.saldo:
            raise Exception(f"{self.nombre} no tiene suficiente saldo para transferir {cantidad}.")
        if not self.cuenta_corriente or not destino.cuenta_corriente:
            raise Exception("Ambos usuarios deben tener cuenta corriente para transferencias.")
        self.saldo -= cantidad
        destino.saldo += cantidad

    def agregar_dinero(self, cantidad):
        self.saldo += cantidad

    def __str__(self):
        return f"{self.nombre} → Saldo: {self.saldo}, Cuenta corriente: {self.cuenta_corriente}"


# ----- CASO DE USO -----

# a. Crear dos usuarios
alicia = UsuarioBanco("Alicia", 100, True)
bob = UsuarioBanco("Bob", 50, True)

# b. Agregar 20 unidades al saldo de Bob
bob.agregar_dinero(20)

# c. Transferir 80 unidades de Bob a Alicia
bob.transferir_dinero(alicia, 70)

# d. Retirar 50 unidades del saldo de Alicia
alicia.retirar_dinero(50)

# Mostrar resultados finales
print(alicia)
print(bob)
