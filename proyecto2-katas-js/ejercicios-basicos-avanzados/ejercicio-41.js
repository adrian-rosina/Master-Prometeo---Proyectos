function rollDice(numFaces) {
    return Math.floor(Math.random() * numFaces) + 1;
  }

console.log(rollDice(6));  
console.log(rollDice(20)); 
console.log(rollDice(4));  