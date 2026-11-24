// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((square) =>  square * square
// );

// console.log(...squares);

// Regular function to arrow function.
// const upperizedNames = [
// 'Farrin', 'Kagure', 'Asser'
// ].map(function(name){
//     return name.toUpperCase();
// });

// //
// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(name => name.toUpperCase());


// console.log(upperizedNames);

// Block body syntax.
// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
//   name = name.toUpperCase();
//   return `${name} has ${name.length} characters in their name`;
// });

// console.log(upperizedNames)

// Single body syntax.
// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
//   name => name.toUpperCase()
// );
// console.log(upperizedNames)

// const student = {
//     name: "Mahad",

//     introduce: function(){
//         console.log(this.name);
//     }
// }

// student.introduce();


// call(), apply(), and bind().
const person1 = {
    name: "Mahad"
};

const person2 = {
    name: "Ahmed"
};

function introduce(city, country) {
    console.log(
        `I am ${this.name} from ${city}, ${country}`
    );
}

// introduce.call(person1, "Kigali", "Rwanda");
// introduce.apply(person2, ["Kigali", "Rwanda"]);
