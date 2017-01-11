var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();
fruit.splice(0,1);
fruit.push(fruit.indexOf("orange"));
vegetables.push(vegetables.length);
var food = fruit.concat(vegetables);
food.splice(4,2);
food.reverse();

console.log(food.toString());
