// const colors = ["red", "blue", "green"];
// for(let i = 0; i< colors.length; i++){
//     console.log(colors[i]);
// };
// // for in loop;
// for(const index in colors){
//     console.log(index);
// };

// // for of loop.
// for(const color of colors){
//     console.log(color);
// };

// const person = {
//     name: "Mo",
//     age: 23, 
//     hoppy: "Gym",
//     education: "Uni"
// };

// for(const key in person){
//     console.log(key, person[key]);
// }


// Looping days array using for of loop and capitalizing first letter.
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for(const day of days){
let date = day[0].toUpperCase() + day.slice(1);
    console.log(date)
}