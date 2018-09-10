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

console.log("<<<<< If Else If Statement >>>>>");

var book = "maths";

if (book == "history") {
	console.log("History Book");
} else if (book == "maths" ) {
	console.log("Maths Book")
} else {
	console.log("unknown Book");
}

console.log("<<<<< Switch Statement >>>>>");

var grade = 'A';
console.log("Entering Switch block");
switch (grade) {
	case 'A' : console.log("Good Job");
	break;

	case 'B' : console.log("Pretty good");
	break

	default : console.log("Unknown grade");
}
console.log("Exiting switch block");

console.log("<<<<< The While Loop >>>>>");

var count = 0;
console.log("starting Loop");

while (count < 5) {
	console.log("Current Count : " + count);
	count++;
}
console.log("loop Stopped");

console.log("<<<<< For Loop >>>>>");

var count;
console.log("starting loop");

for (count = 0; count < 5; count++) {
	console.log("current Count : " + count);
}
console.log("loop Stopped");

console.log("<<<<< For In Loop >>>>>");

var person = {
	fname : "john",
	lname : "Deep",
	age : "24"
};

for ( i in person) {
	console.log(i + " = " + person[i]);
}

console.log("<<<<< Calling a Function >>>>>");

function sayHello() {
	console.log("Hello There");
}

sayHello();

console.log("<<<<< Function Parameters >>>>>");

function sayHello2(name, age) {
	console.log(name + " is " + age + " years old");
}

sayHello2("dicky", 23);

console.log("<<<<< The Return Statement >>>>>");

function concatenate(first, last) {
	var full;
	full = first + " " + last;
	return full;
}

function secondFunction() {
	var result;
	result = concatenate("dicky", "fajar");
	console.log(result);
}

secondFunction();

console.log("<<<<< Redirect Page >>>>>");

function redirect() {
	window.location = "redirect.html";
}

console.log("<<<<< The Object >>>>>");

var book = new Object(); // create the object
book.subject = "perl";
book.author = "mohtashim";

console.log("book object = " + book);
console.log("book subject = " + book.subject);
console.log("book author = " + book.author);

console.log("<<<<< The Object Example 2 >>>>>");

function addPrice(amount) {
	this.price = amount;
}

function buku(judul, author) {
	this.judul = judul;
	this.author = author;
	this.addPrice = addPrice;
}

var myBook = new buku("Perl", "Mohtasium");
console.log("myBook.judul = " + myBook.judul);
console.log("myBook.author = " + myBook.author);

myBook.addPrice(100);
console.log("myBook.price = " + myBook.price);