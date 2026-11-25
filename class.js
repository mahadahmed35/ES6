class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`I am ${this.name} and my I am ${this.age} years old.`)
    }
}

const person1 = new student("Mahad", 20)

person1.introduce()