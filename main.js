//console.log("welcome to JavaScript Course");
// let color = 'red'
// console.log(color);
// console.log(color);
// console.log(color);
// console.log(color);

// let age = 25;
// let yearOfBirth = 1957;
// console.log(yearOfBirth)

// let result = 2 > 3;
// console.log(result);

// let language = 'javaScript';
// let message = `welcome to ${language}`;
// console.log(message);

// let name;
// console.log(typeof name); //undefined

// let number = 5.9;
// console.log( number);

// let value = null;
// console.log(value);

// let language = 'JavaScript'
// console.log(language[4])

// let color = 'red'
// let colors = ['red', 'green', 'blue'];

// console.log(color);
// console.log(colors);
//console.log(colors[0]);
//console.log(colors[1]);
// colors[1] = 'black'
// console.log(colors[1]);
//console.log(colors.includes('red'));

// colors.unshift('black');
// colors.unshift('white');
//colors.shift();
// colors.shift('white');
//const redColor = colors.shift()

// colors.push("black")
// colors.pop("black")

// console.log(colors);

// console.log(Array.isArray(colors));

// const values = [
//     [1, 2, 3], true, 'JavaScript'
// ]
// console.log(values[0]) 

// const values = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(values[0][1])

// let message = "Welcome to JavaScript"

// console.log(message.split('to'))

// let message = ["Welcome", "to", "JavaScript"]
// let result = message.join('@')
// console.log(result)

// let age = 14
// if (age < 12) {
//     console.log('Sorry, you are not old enough to play this game')
// } else {
//     console.log('Welcome to  the game')
// }

// let number = 1

// if (number > 0) {
//     console.log('+')
// } else if (number < 0) {
//     console.log('-')
// } else {
//     console.log('0')

// }

// const colors = ['red', 'green', 'blue']
// let colorNumber = 5

// switch (colorNumber) {
//     case 1:
//         console.log(colors[0]);
//         break;
//     case 2:
//         console.log(colors[1]);
//         break;
//     case 3:
//         console.log(colors[2]);
//         break;
//     default:
//         console.log('white')

// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (num of numbers) {
//     if (num == 5) {
//         continue
//     }
//     console.log(num)
// }

// function printNumber() {
//     console.log(1);
//     console.log(2);
//     console.log(3);

// }

// function printNumber() {
//     for (let i = 1; i <= 4; i++) {
//         console.log(i);
//     }

// }

// printNumber();
// printNumber();
// printNumber();

// function printNumber(x) {
//     for (let i = 1; i <= x; i++) {
//         console.log(i);
//     }

// }

//printNumber(2);
// printNumber();
// printNumber();

// function add(firstNumber, secondNmber) {

//     console.log(firstNumber + secondNmber)
// }

// function add(firstNumber, secondNmber) {

//     return firstNumber + secondNmber;

// }
// printNumber(add(2, 7));

//add("welcome to ", "JavaScript")
// let value = add(2, 7) - add(2, 3);
// console.log(value)

const square = function(number) {
    console.log(number * number)
}
square(2)

// function myFunc(number) {
//     console.log(number * number)
//     return number
// }
// myFunc(2)

// function printYourName(name) {
//     return "Your name is " + name
// }
// let functionOutput = printYourName("Reem")
// console.log(functionOutput)

// function myFunc(number) {
//     console.log(`${number} x ${number} = ` + number * number)
//     return number * number
// }
// myFunc(2)