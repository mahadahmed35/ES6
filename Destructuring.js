// const point = [10, 25, -35];
// const [x,y,z]= point;
// console.log(x,y,z)

// ignoring value.
// const point = [10, 25, -35];
// const [x,,z]= point;
// console.log(x,z)

// // Destructuring an object.
// const gamstone = {
//     type: 'quartz',
//     color: 'rose',
//     carat: 21.29,

// };
// const {type, color, carat}= gamstone;
// console.log(type, color, carat)

// Object destructuring.
// const circle = {
//   radius: 10,
//   color: 'orange',
//   getArea: function() {
//     return Math.PI  *this.radius*  this.radius;
//   },
//   getCircumference: function() {
//     return 2  *Math.PI*  this.radius;
//   }
// };

// let {radius, getArea, getCircumference} = circle;
// console.log(getArea(circle));

// Default values.
// const student = {
//     name: "Mhad",
//     hoppy: "Reading",

// };

// const {name, hoppy= Gym, age= 21}= student;
// console.log(name, hoppy, age);

// Object Literal Shorthand.
// let type = 'quartz';
// let color = 'rose';
// let carat = 21.29;

// const gemstone = {
//      type,
//     color,
//     carat,
//     caltualteWorth(){}
// }

// console.log(gemstone);


// const name = "Laptop";
// const price = 800;
// const stock = 15;

// const product = {
//   name,
//   price,
//   stock,

//   getDetails() {
//     return `${this.name} costs $${this.price}`;
//   }
// };

// console.log(product.getDetails());

// Function Destructuring.
// Without destructuring.
// function introduce(student) {
//   console.log(student.name);
//   console.log(student.age);
// }

// introduce({ name: "Mahad", age: 20 });

// With destructuring.
// function introduce({name, age: ageNumber, hoppy = "Reading", }){
//     console.log(name);
//     console.log(ageNumber);
//     console.log(hoppy);
// };


// console.log(introduce({name: "Mahad", age: 20}));

// Object destructuring in functions.
function createUser({ name = "Guest", role = "Member", isActive = true } = {}){
    console.log(`${name} (${role}) - Active: ${isActive}`)
};

console.log(createUser({name: "Alice"}));
console.log(createUser({}));
console.log(createUser());