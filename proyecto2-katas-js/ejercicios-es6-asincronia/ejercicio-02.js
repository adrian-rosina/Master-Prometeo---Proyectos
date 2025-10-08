// 2.1 - Crear una copia de un array usando spread operator
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log(pointsListCopy); 


// 2.2 - Crear una copia de un objeto usando spread operator
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };

console.log(toyCopy); 


// 2.3 - Unir dos arrays usando spread operator
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const combinedPoints = [...pointsList1, ...pointsList2];

console.log(combinedPoints); 


// 2.4 - Fusionar dos objetos con spread operator
const toyBase = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };

const updatedToy = { ...toyBase, ...toyUpdate };

console.log(updatedToy);


// 2.5 - Crear una copia de un array eliminando la posición 2 (sin modificar el original)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// Eliminamos la posición 2 (índice 2 = 'amarillo') con slice + spread
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);
console.log(colors);    