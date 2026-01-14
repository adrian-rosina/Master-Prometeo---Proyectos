class UsuarioBanco:
    def __init__(self, nombre, saldo, cuenta_corriente):
        self.nombre = nombre
        self.saldo = saldo
        self.cuenta_corriente = cuenta_corriente

    def retirar_dinero(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad a retirar debe ser positiva.")
        if cantidad > self.saldo:
            raise ValueError(f"{self.nombre} no tiene suficiente saldo para retirar {cantidad}.")
        self.saldo -= cantidad

    def agregar_dinero(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad a agregar debe ser positiva.")
        self.saldo += cantidad

    def transferir_dinero(self, otro_usuario, cantidad):
        if not self.cuenta_corriente:
            raise PermissionError(f"{self.nombre} no tiene cuenta corriente para realizar transferencias.")
        if not otro_usuario.cuenta_corriente:
            raise PermissionError(f"{otro_usuario.nombre} no puede recibir transferencias sin cuenta corriente.")
        if cantidad <= 0:
            raise ValueError("La cantidad a transferir debe ser positiva.")
        if cantidad > self.saldo:
            raise ValueError(f"{self.nombre} no tiene suficiente saldo para transferir {cantidad}.")

        # Realizar transferencia
        self.saldo -= cantidad
        otro_usuario.saldo += cantidad
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
print(f"Saldo final de Alicia: {alicia.saldo}")
print(f"Saldo final de Bob: {bob.saldo}")
