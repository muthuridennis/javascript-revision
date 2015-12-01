// ==== Terminology ======
// 1. Variables
// 1.2 Defining a variable
// 1.2.1 Using the var keyword variable

var firstName;

// 1.2.2 Without using the var keyword
lastName = 'Mburugu';


// 2.Basic math
// 2.1 BODMAS
// Javascript math operators follow the BODMAS 
// convention
problemOne = (5+2)-4/2*2;
console.log(problemOne);


// 3. If statements
// 3.1 if else if else if
// This type of if statement allows us to check for
// multiple truth values. 
// PLEASE NOTE: The first expression that evaluates
// to true, is the ONLY ONE that gets executed.
age = 20;

if (age < 18){
	console.log("Not an adult");
} else if (age === 18){
	console.log("Is an adult");
} else if (age > 18){
	console.log("Over adult age");
} else if (age % 2 === 0){
	console.log("Age is an even number");
}

// 3.2 Switch statement
// This is similar to the if else if, else if statement
switch (age){
	case 18:
		console.log("CASE: You are an adult");
		break;
	case 17:
		console.log("CASE: You are not an adult");
		break;
	case 19:
		console.log("CASE: You are above the adult age");
		break;
	default:
		console.log("CASE: Your age is not accounted for");
}

// 4. Arrays
// 4.1 Definition and initialization
// Arrays in javavscript belong to the Object data type
// They are used to store lists and are have zero 
// indexed keys. 

// Empty array 
years = [];

// Populated with array
names = ['Vinnecent','Munene','George', 'Harrison'];


// Excersize
carModels = ['Ferrari','Zonda','Land rover','Passat','Toyota','Mercedes']; 

// 4.2 Common operations on an array
// 4.2.1 Retrieving elements
// Using the index

console.log(carModels[2]);

// 4.2.2 Adding elements
// Using concatenation
newCarModels = carModels.concat(['Subaru', 'Honda']);

console.log('New Car Models', newCarModels);

// Using the push method
// Push is a destructive method. It manipulates the
// original array

carModels.push('Escallade');
console.log('Car models after push: ', carModels);

// 4.2.3 Removing elements
// To remove the last element of an array
// Using the pop method
carModels.pop();
console.log('Car models after pop', carModels);

// 4.2.4 Finding length
numberOfCarModels = carModels.length

console.log('Number of car models: ',numberOfCarModels);

// 4.2.4 Adding and Removing elements at a particular index
// Using the splice method

// Removing
// carModels = ['Ferrari','Zonda','Land rover','Passat','Toyota','Mercedes']; 
carModels.splice(2, 1);
console.log('Car Models after removing using splice: ', carModels);

// Adding
carModels.splice(2, 0, 'Vitz');
console.log('Car Models after adding using splice: ', carModels);


// 5. Objects
// 5.1 Definition and initialization

// Empty object 
person = {};

// Populated object
customer = {
	name: 'Dennis',
	age: 100,
	loyalty_points: 50
};

// Defining an object dynamically
car = {};

car["name"] = 'Vitz';
car["year_of_manufacture"] = 2010;
car["model"] = 'Toyota';

console.log('Car object', car);

// 5.2 Common operations on objects
// 5.2.1 Accessing values
// Using the 'dot' notation 

console.log('Car name', car.name);

// Using brackets
year_of_manufacture = car["year_of_manufacture"];

console.log('Using brackets: year_of_manufacture', year_of_manufacture);

// 5.2.2 Changing values
car.year_of_manufacture = 2015;
car["name"] = 'Prado';

console.log('Updated object', car);

// 6. Functions
// Excersize:
// Define a function called createContact that takes in
// the arguments, name and phoneNumber.
function createContact(name, phoneNumber){

}

createContact = function(name, phoneNumber){
	
}
// 6.1 Definitions
// Named Functions
function makeTea(){

}

// Anoymous functions
// This function should buyCoffe
(function(){

})

// 6.2 using functions
// to use/run a function, you have to call it
// Calling named functions
makeTea();

// Calling anonymous functions
buyCoffee = function(){

}
buyCoffee();


// to make tea we need: tea leaves, milk, water, sugar
function makeTea(teaLeaves, milk, water){
	console.log(teaLeaves, milk, water);
}
makeTea('Fresha', 'City council', 'ketepa');

function orderFood(restaurantName, price, foodName){
	order = {};
	order.restaurant_name = restaurantName;
	order.price = price;
	order.food_name = foodName;
}

orderFood(20.00, 'Kengeles', 'Nyama choma')


// 7. Loops
// - Iterating over arrays
// - Iterating over objects

// Looking for help
// - Using built in functions before writing your own.
