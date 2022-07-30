const car = {

    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function(speed) {
        //Objectname.key
        //car.currentSpeed
        this.currentSpeed = speed
        return `The ${this.name} is moving at speed of ${this.currentSpeed}km per sec`
    },
    stop: function() {
        this.currentSpeed = 0
        return `The ${this.name} stopped`
    }
}

//objectName.key
console.log(car.name);
car.stop()
console.log(car.move(100));

// class Car {
//     #currentSpeed;
//     static numberOfCars = 0;


//     constructor(name, color, currentSpeed) {
//         //console.log("constructor");
//         this.name = name
//         this.color = color
//         this.#currentSpeed = currentSpeed
//         Car.incrementNumberOfCars()
//     }
//     move(speed) {
//         this.#currentSpeed = speed
//         return `The ${this.name} is moving at speed of ${this.currentSpeed}km per sec`
//     }

//     move(speed) {
//         this.#currentSpeed = 0
//         return `The ${this.name} is stop at speed of ${this.currentSpeed}km per sec`
//     }

//     static incrementNumberOfCars() {
//         Car.numberOfCars++
//     }


// }
// const car1 = new Car('camry', 'white', 0)
// const car2 = new Car('corella', 'black', 10)
// console.log(car1);
// console.log(car2);

// console.log(Car.numberOfCars);

// const car = new Car('camry', 'white', 0)
// console.log(car.move(100));
// console.log(car)
// class Animal{
//     constructor(name,color){
//         this.name = name 
//         this.color = color
//         this.speed = 0
//     }
//     run(speed){
//         this.speed = speed
//         return `${this.name}runs with speed ${this.speed}`
//     }
// makeSound(){
//         console.log( 'sound...')
//     }

// }

// class Cat extends Animal{
  

// makeSound(){
//         console.log('mew..') 
//     }
 


// }


// class Fox extends Animal{
   

//     makeSound(){
//         console.log('fox...'); 
//     }
 


// }

// const cat = new Cat('snowy','white')
// cat.makeSound()
//console.log(cat);


// let user1 ={
//     firtName : "Khulood",
//     secondName: "Batis",

//     // printFullName(){
//     //     console.log("Hello," + this.firtName+""+this.secondName);
//     // }
// }

// let printFullName = function(age){
//     console.log("Hello," + this.firtName+" "+this.secondName+" " + age);
// }

// printFullName.call(user1,"25")
// printFullName.apply(user1,["25"])

// let newFunction = printFullName.bind(user1,"25")
// newFunction()


// let add1 = (num1,num2) =>{
//     return num1+ num2;
// }

// let add2 = (num1,num2) => num1+ num2;
// let add3 = (num1,num2) => num1+ num2;

// (function(n){console.log(n);})("Reem");


// let obj ={

//     title:"How to write a function in an object",

//     function1: function(){
//         return console.log("First function");
//     },

//     function2: ()=>{
//         return console.log("Second function");
//     },
//     function3(){
//         return console.log("Third function");
//     }

// }

// obj.function1()
// obj.function2()
// obj.function3()

// function rectangleAree(w,l){
//     let a = w *l;
//     return a;
// }

// let area = rectangleAree(4);
// console.log(area);

// function rectangleOrSquareArea(w,l){
//     if(l==undefined){
//         l=w;
//     }
//     let a = w *l;
//     return a;
// }

// let area = rectangleOrSquareArea(4,2);
// console.log(area);

// let area = rectangleOrSquareArea(4,2,5,7);
// console.log(area);

// let studentNames = function(name1 , name2, ...names){
//     console.log(name1,name2,names);
// }

// studentNames("Hind","Khaled","Abdullah","Reem","ali")

// let studentNames = function(name1 , name2,name3,name4,name5){
//     console.log(name1,name2,name3,name4,name5);
// }
// names=["Hind","Khaled","Abdullah","Reem","ali"]
// studentNames(...names)










