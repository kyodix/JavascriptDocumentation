// VARIABLES

var money;
var name;
var duit, nama;
nama = "Dicky";
money = 5000;

console.log("<<<<< VARIABLES >>>>>");
console.log("nama = " + nama);
console.log("money = " + money);

// VARIABLES SCOPE
var myVar = "global"; //declare a global variable
function checkscope() {
	var myVar = "local" // declare a local variable
	document.write("Check Scope = " + myVar);
}

// OPERATORS

console.log("<<<<< OPERATORS >>>>>");
var a = 33;
var b = 10;
console.log("a = " + a);
console.log("b = " + b);

result = a + b;
console.log("a + b = " + result);

result = a - b;
console.log("a - b = " + result);

console.log("<<<<< COMPARISON OPERATORS >>>>>");

result = a < b;
console.log("a < b = " + result);

result = a > b;
console.log("a > b = " + result);

console.log("<<<<< LOGICAL OPERATORS >>>>>");

result = ((a < b) && (a > b));
console.log("(a < b) && (a > b) = " + result);

result = ((a < b) || (a > b));
console.log("(a < b) || (a > b) = " + result);

console.log("<<<<< MISCELLANOUS OPERATORS >>>>>");

result = (a > b) ? "True" : "False";
console.log("(a > b) ? 'True' : 'False' = " + result);

result = (a < b) ? "True" : "False";
console.log("(a < b) ? 'True' : 'False' = " + result);