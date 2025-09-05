const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (let property in alien){
    console.log(`La propiedad ${property} tiene como valor: ${alien[property]}`);
}