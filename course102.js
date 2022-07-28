//const d = new Date(2020, 8, 17)

//console.log(d.getDate())
//console.log(d.getDay())
//console.log(d.getMonth())
//console.log(d.getFullYear())


// const number = Math.ceil(-9.12)
// console.log(number);

// const number = Math.floor(-9.12)
// console.log(number);

// const number = Math.round(9.12)
// console.log(number);

// const number = Math.abs(-8)
// console.log(number);

// const numbers = [4, 2, -9, 9, 7]

// const num = Math.min(...numbers)
// console.log("the small number is: " + num);

// const num2 = Math.max(...numbers)
// console.log("the larg number is: " + num2);

// const str = '1.45'
// const floatNumber = parseFloat(str)
// console.log(floatNumber + 1);

// const str = "9090"
// const inNumber = parseInt(str)
// console.log(inNumber + 1);

// const num = 4.16
// const number = Math.trunc(num)
// console.log(number);

// const number = 3
// const int = Number.isInteger(number)

// console.log(int);

// function square(number) {

//     if (isNaN(number))
//         return 'Invalid input'
//     return number * number
// }
// console.log(square(3));

//const number = 2 ** 3;
// const number = Math.pow(2, 3);

// console.log(number);

// const number = 16

// const sqrtNumber = Math.sqrt(number)
// console.log(sqrtNumber);

// const number = 0

// console.log(Math.sign(number));

// const result = 3 / 0
// console.log(result);

// const randomNumber = Math.random()
// console.log(randomNumber);

// const number = 357_643_912

// console.log(number);

// decimal 0-9
// let age = 14
//hexadecimal 0-A.B.C....
// let age = 0xe
//Octal: 0-7
//let age = 0o16 //14/8= 1.6 [0o6] 1/8=0.1   [0o16]
//Binary01->8421
// let age = 0b1110

// const number = 12
//2>bunary 8>octal 10>decimal 16>Hex

// console.log(number.toString(8));

// function sum(firstNumber, secondNumber) {

//     return firstNumber + secondNumber
// }

// console.log("The sum is " + sum(1, 2));

// function sub(firstNumber, secondNumber) {

//     return `${firstNumber - secondNumber}`
// }

// console.log("The sub is " + sub(1, 2));

// function mult(firstNumber, secondNumber) {

//     return firstNumber * secondNumber
// }

// console.log("The Mulit is " + mult(1, 2));

// function div(firstNumber, secondNumber) {

//     return firstNumber / secondNumber
// }

//console.log("The div is " + div(1, 2));

// function operator(firstNumber, secondNumber, opCollback) {

//     return `[${opCollback(firstNumber, secondNumber)}]`
// }

//console.log(operator(5, 2, mult));

// console.log(operator(5, 2, function(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }));

// console.log(operator(5, 2, sub));
// console.log(operator(5, 2, (firstNumber, secondNumber) => firstNumber + secondNumber))
// const sum = (firstNumber, secondNumber) => firstNumber + secondNumber
// console.log(operator(5, 2, sum))

// Advanced ARRAY ??????????????

// const colors = ['red', 'green', 'blue']

// colors.forEach(function(currentValue, index, array) {
//     console.log(currentValue, index, array);
// })

// const ages = [11, 13, 15, 12]

// const hasAdult = ages.some(function(element) {
//     return element >= 18
// })
// console.log(hasAdult);

// const ages = [21, 23, 27, 25, 22, 17]

// const areAdults = ages.every(function(element) {
//     return element >= 18
// })

// console.log(areAdults);

//const colors = ['red', 'green', 'blue']

// const isContaiRed = colors.includes('red')
// console.log(isContaiRed);

// const isContaiRed = colors.includes('red', 1)
// console.log(isContaiRed);

// const isContaiRed = colors.includes('red', -1)
// console.log(isContaiRed);

// const colors = ['red', 'green', 'blue', 'green']

// const index = colors.indexOf('green')
// console.log(index);

// const index = colors.indexOf('green', 2)
// console.log(index);

// const index = colors.indexOf('black')
// console.log(index);

// const index = colors.lastIndexOf('green', -1)
// console.log(index);

// const ages = [12, 14, 19, 21]

// const index = ages.findIndex(function(element) {
//     return element >= 25
// })
// console.log(index);

// const ages = [11, 7, 9, 15]

// const elm = ages.find(function(element) {
//     return element % 3 === 0
// })
// console.log(elm);//9

// const numbers = [2, 3, 7, 4, 9]

// const evenNumbers = numbers.filter(function(currentValue, index, array) {
//     return currentValue % 2 === 0
// })

// console.log("the Even numbers are : " + evenNumbers); //even  number

// const oddNumbers = numbers.filter(function(currentValue, index, array) {
//     return currentValue % 2 === 1
// })

// console.log("the Odd numbers are : " + oddNumbers); //odd  number

// const primaryColors = ['red', 'yellow', 'blue']
// const secondColors = ['green', 'orange', 'violet']

// const colors = primaryColors.concat(secondColors)

// console.log(colors);

// const colors = primaryColors.concat(secondColors, 'black', 'white')

// console.log(colors);
//+++++++++++++    0       1        2        3       4
// const colors = ['red', 'green', 'blue', 'black', 'white']
// const rbgColors = colors.slice(1, 4)

// console.log(rbgColors);

// colors.splice(3) //without 3+4

// console.log(colors);

// colors.splice(2, 2)

// console.log(colors);

// colors.splice(2, 2, 'gray', 'yellow') 
// colors.splice(2, 0, 'gray', 'yellow')
// console.log(colors);

// const arrColors = ['red', 'green', 'blue']

// const strColors = arrColors.join(' )$<*~*>$( ')
// console.log(strColors)

// const colors = ['red', 'green', 'blue', 'black', 'white']
// const numbers = [2, 3, 7, 4, 9]


// colors.sort()
// console.log("Colors : " + colors);


// numbers.sort()
// console.log(numbers);


// const colors = ['red', 'green', 'blue', 'black', 'white']

// colors.reverse()

// console.log(colors);


// const numbers = [3, 7, 9]

// const squartNumbers = numbers.map(function(currentValue, index, array) {
//     return currentValue * currentValue
// })


// console.log(squartNumbers);


// const strColors = 'red ; green ; blue ; black'
//     // const arrColors = strColors.split(' ; ')

// // console.log(arrColors);

// const arrColors = strColors.split(' ; ', 3)

// console.log(arrColors);

const numbers = [2, 4, 1, 3, 5]

const total = numbers.reduce(function(acumulator, currentValue, index, array) {
    // console.log('index :' + index);
    // console.log('currentValue :' + currentValue);

    // console.log('acumulator :' + acumulator);
    // return acumulator + 1


    return acumulator + currentValue
}, 100)

console.log(total);