//1. Assign arithmetic operators to combination variables (use 'const' to keep your numbers and messages consistently as programmed. They are NOT changing):
const numAdd = 8 + 2
const numSubtract =  60 - 20
const numMultiply = 13 * 3 
//2. Make a string to combine my user's numbers into one message. Lucy, use the '$' to make the numbers appear! 
const comboMessage = `${numAdd} - ${numSubtract} - ${numMultiply}`;
//3. Activate a pop-up box, showing the vault's combination. 
function lockAlert (){
    alert(comboMessage)
}   
//5. Done! :)