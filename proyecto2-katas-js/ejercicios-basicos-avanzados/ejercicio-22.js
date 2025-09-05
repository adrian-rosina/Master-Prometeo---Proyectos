const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
const newVeganSchedule = [];
let fruitIndex = 0;
for(let food of foodSchedule){
    if(!food.isVegan ){
        newVeganSchedule.push({name: fruits[fruitIndex], isVegan: true});
        fruitIndex++;
    }else{
        newVeganSchedule.push(food)
    }
}
console.log(newVeganSchedule);