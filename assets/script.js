// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Brian Gentoso" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1;
    total +=1;
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = total
})
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb <= 0){
        gb -= 0}
        else {
            gb -= 1
        } 
    if (total <=0){
        total -= 0}
        else {
            total -= 1 
        };
    document.getElementById('qty-gb').textContent = gb
    document.getElementById('qty-total').textContent = total
})
document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1;
    total +=1;
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = total
})
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc <= 0){
        cc -= 0}
        else {
            cc -= 1
        } 
    if (total <=0){
        total -= 0}
        else {
            total -= 1 
        };
    document.getElementById('qty-cc').textContent = cc
    document.getElementById('qty-total').textContent = total
})
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar += 1;
    total +=1;
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = total
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar <= 0){
        sugar -= 0}
        else {
            sugar -= 1
        } 
    if (total <=0){
        total -= 0}
        else {
            total -= 1 
        };
    document.getElementById('qty-sugar').textContent = sugar
    document.getElementById('qty-total').textContent = total
})
