// // const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];

// // console.log(...books);
// const fruits = ["apples", "bananas", "pears"];
// const vegetables = ["corn", "potatoes", "carrots"];
// const produce = [...fruits, ...vegetables]
// console.log(produce);

// Rest calculating average.
function average(...rest) {
    let sum = rest.reduce((a, b)=> a + b, 0);
    for(let i = 0; i< rest.length; i++){
        
    
    let average = sum / rest.length;
    
    return average;
    }
    
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
