
// // Before ES6 default paremeter update we used to use this ternory operator to check if the value is not undefined typeof and then give default value.

// // function greet(name, greeting) {
// //   name = (typeof name !== 'undefined') ?  name : 'Student';
// //   greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

// //   return `${greeting} ${name}!`;
// // }

// // console.log(greet()); // Welcome Student!
// // console.log(greet('James')); // Welcome James!
// // console.log(greet('Richard', 'Howdy')); // Howdy Richard!


// // ES6 default function parameters.
// // function greet(name = "Student", greeting = "Welcome"){
// //     return `${name} ${greeting}`;
// // }

// // console.log(greet());
// // console.log(greet("James"));
// // console.log(greet( "James", "Howdy"));

// // Default function paremeter using object as default.
// // Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:

// // floors = 1
// // color = 'red'
// // walls = 'brick'
// // The function should return the following if no arguments or any empty object is passed to the function.

// // Your house has 1 floor(s) with red brick walls.

// // function buildHouse({ floor = 1, color = 'red', walls = 'brick'} = {}){
// //     return `Your house has ${floor} floor(s) with ${color} ${walls} walls.`
// // };
// // console.log(buildHouse());
// // console.log(buildHouse({}));
// // console.log(buildHouse({floor: 3, color: 'yellow', walls: 'stone'}));

// // Defaults with destructuring arrays.
// function createGrid([width = 5, , height = 9] = []){
//     return `Generates a ${width} * ${height} grid`;
// }

// // console.log(createGrid())
// console.log(createGrid([6, 5, 8]));
// // console.log(createGrid([undefined, 3]));

// Arrays vs objects skipped options.
// function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}){
// return `Your sundae has ${scoops} ${toppings}`
// }

// console.log(createSundae( {toppings:['Hot Fudge', 'Sprinkles', 'Caramel']}));

// Arrays.
function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []){
return `Your sundae has ${scoops} ${toppings}`
}

console.log(createSundae( [ undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]));