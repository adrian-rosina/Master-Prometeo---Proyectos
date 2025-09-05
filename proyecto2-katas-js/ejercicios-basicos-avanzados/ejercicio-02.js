//1.Luke Skywalker cumple años
const jedi = {nombre: "Luke Skywalker", edad: 19 };
jedi.edad=25;
console.log("Luke ahora tiene", jedi.edad, "años");
 
//2. Presentación al estilo Leia Organa
const nombre = "Leia";
const apellido = "Organa";
const edad = 20; 
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

//3. Calculando el coste total de sables de luz
const sable1 = {nombre:"Shoto de Yoda", precio: 1500 };
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
let sumaSables = sable1.precio + sable2.precio;
console.log("La suma de los precios de ambos sables es:", sumaSables, "créditos");


//4. Actualizando el precio final de las naves
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;
const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcon Milenario", precioBase: 70000, precioFinal: 80000};
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log("El precio final de la nave1 es:", nave1.precioFinal, "créditos");
console.log("El precio final de la nave2 es:", nave2.precioFinal, "créditos");


