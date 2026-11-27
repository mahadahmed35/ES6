// class student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     introduce(){
//         console.log(`I am ${this.name} and my I am ${this.age} years old.`)
//     }
// }

// const person1 = new student("Mahad", 20)

// person1.introduce()

// Student name, age and introduce method shared class.

// class student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     introduce(){
//      console.log(`I am ${this.name} and I am ${this.age} years old.`)
//     }
// }


// const student1 = new student('Mahad', 20)
// const student2 = new student('Ahmed', 20)
// console.log(student1.introduce());
// console.log(student2.introduce());

// this can be lost if you put it in method.
// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     greet(){
//         console.log(this.name);
//     }
// }

// const person = new Person("Mahad");

// const greet = person.greet.bind(person);
// console.log(greet());

// Inheritance extends and super.
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    greet(){
        console.log(`Hello, I am ${this.name}`)
    }
};

// const Student = new Person('Mahad');

// console.log(Student.greet());
class Student extends Person{
    constructor(age, course){
        super(age);
        this.course = course;
    }
    study(){
        console.log(`I study ${this.course}`);
    }
};

const student1 = new Student('Mahad', 20);
console.log(student1.study())
console.log(student1.greet())