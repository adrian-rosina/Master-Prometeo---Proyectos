try:
    # a. Solicitar precio original
    precio_original = float(input("Introduce el precio original del artículo: "))

    # b. Preguntar si tiene cupón
    tiene_cupon = input("¿Tienes un cupón de descuento? (sí/no): ").strip().lower()

    # Inicializamos el precio final
    precio_final = precio_original

    # c. Si tiene cupón, solicitar valor
    if tiene_cupon == "sí" or tiene_cupon == "si":
        valor_cupon = float(input("Introduce el valor del cupón de descuento: "))

        # d. Aplicar descuento si es válido
        if valor_cupon > 0:
            precio_final = precio_original - valor_cupon
            if precio_final < 0:
                precio_final = 0  # Evitar precios negativos
        else:
            print("El cupón no es válido. No se aplicará descuento.")

    elif tiene_cupon == "no":
        pass  # No se hace nada, se mantiene el precio original

    else:
        print("Respuesta no válida. No se aplicará descuento.")

    # e. Mostrar precio final
    print(f"El precio final de la compra es: {precio_final:.2f} €")

except ValueError:
    print("Error: Debes introducir valores numéricos válidos.")
