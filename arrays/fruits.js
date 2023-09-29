const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];

console.table(fruits);
//Removing items from your list temporarily. It's kind of like a filter. Putting 1 and 4 removes items 1 & 4. 
console.table(fruits.slice(1, 4));

//remove last item in array
const lastFruit = fruits.pop();

//add an item to the END of the array (at n-1)
fruits.push("mango");

//to remove first item in array
const firstFruit = fruit.shift();

//add an item to the FRONT of the array (at index 0)
fruits.unshift("banana");
//adds a few more items to the end of the array. 
const listTotal = fruits.push("apple", "kiwi", "peach");

//While loops can cause broken code and go one forever. Be careful! 
//while console.log("Hello")

console.log(lastFruit);
console.log(firstFruit);
console.table(fruits); 
console.log(listTotal);
