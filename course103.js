//Regex

//++++++Test+++++++


// const myString = "I Love JavaScript"
// const regex = /Kotlin/
// const containsRegex = regex.test(myString)

// console.log(containsRegex)

//++++++++++Replace++++++++++

// const myString = "I Love JavaScript"
// const  myRegex = /JavaScript/
// let  newString = myString.replace(myRegex,'kotlin')
// console.log(newString);

///+++++++++++Search+++++++++
// const myString = "I Love JavaScript"
// let newRegex = myString.search(/JavaScript/)
// console.log(newRegex);

///+++++++++++++++Match+++++++++++++++++++
// const str = "RegExr was created by gskinner.com,and is proudly hosted by Media TempleEdit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode. The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.";

// let myRegex= str.match(/and/g)
// console.log(myRegex.length);

///+++++++++++++

// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// },3000)
// console.log(3);
// console.log(4);
// console.log(5);

///+++++++++++++
// console.log('Start')
//  function userInfo(name){
//     //return name
//     setTimeout(()=>{
//         console.log("** User info received **");
//         return name;
//     },3000)
//  }

//  let userName = userInfo('Khalid')
//  console.log(userName);
//  console.log('End')

 ///+++++++++++++ Promise
// console.log('Start')
// const newUser = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const userInfo ={
//             name: 'Khalid',
//             age: 19 
//         }
//         resolve(userInfo)
//     },3000)
// })

// newUser.then(res=>{
//     console.log("** User info received **");
//     console.log(res);
// })
// console.log('End')

 ///+++++++++++++ Promise

//  const newUser = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          const userInfo ={
//              name: 'Khalid',
//              age: 19 
//          }
//          resolve(userInfo)
//      },3000)
//  })
//  const addNewUser = userInfo => {
//     let userAge = userInfo.age;
//     let adultAge;
//      if(userAge >= 18){
//           adultAge = `${userInfo.name} is an Adult`
//      }else{
//         adultAge = `${userInfo.name} is Not an Adult`
//      }
//      return Promise.resolve(adultAge)
//  }
//  newUser
//  .then(addNewUser)
//      .then(res=>{
//      console.log("** User info received **");
//      console.log(res);
//  })
 
  ///+++++++++++++ Promise

//   const newUser = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const userInfo ={
//             name: 'Khalid',
//             age: 11 
//         }
//         resolve(userInfo)
//     },3000)
// })
// const addNewUser = userInfo => {
//    let userAge = userInfo.age;
//    let adultAge;
//     if(userAge >= 18){
//          adultAge = `${userInfo.name} is an Adult`
//          return Promise.resolve(adultAge)
//     }else{
//        adultAge = `${userInfo.name} is Not an Adult`
//        return Promise.reject(new Error(adultAge))
//     }
    
// }
// newUser
// .then(addNewUser)
//     .then(res=>{
//     console.log("** User info received **");
//     console.log(res);
// })
//     .catch(err=>{
//         console.log(err.message);
//     })
//++++++++++++++++++++++++++++++++++

// let ages = [25,30,32]

// let [first,second,third]= ages 

// console.log(first,second,third);
//++++++++++++++++++++++++++++++++
//  let colors =['red','green']
//  let [first,second,third]=colors

//  console.log(first,second,third);
//++++++++++++++++++++++++++++++++
// let colors =['red','green','black']
// let [first,second,third ='blue']=colors

// console.log(first,second,third);

//++++++++++++++++++++++++++++++++++++++++

// let colors =['red','green','blue']
// let [,,,firts] = colors
// console.log(firts);
 //++++++++++++++++++++++++++++++

//  let numbers =[1,2,[3,4]]

//  let [first ,second,third] = numbers

//  console.log(first ,second,third[0],third[1]);

///+++++++++++++++++++++++++++++++++++++++++

// let first = 5, second = 7;

//  [first,second] = [first,first]
// console.log(first,second);
///+++++++++++++++++++++++++++++++++++++++
// let colors = ['red','green'];
// [colors[0],colors[1]]=['blue','black','white']

// console.log(colors);
//+++++++++++++++++++++++++++++

// let student ={
//     name: 'Ali',
//     age: 25
// }

// let {name: yourName , age: yourAge} = student
// console.log(yourName,yourAge);
//+++++++++++++++++++++++++++++

// let student ={
//     name: 'Ali',
//     age: 25
// }

// let {name , age} = student
// console.log(name, age);
//+++++++++++++++++++++++++++++

// let student ={
//     name: 'Ali',
//     age: 25
// }
// let name ="Salah" , age =22;
// ( {name , age} = student)
// console.log(name, age);
//+++++++++++++++++++++++++++++

// let student ={
//     name: {
//         firsName: 'Ali',
//         lastName: 'Nasser'
//     },
//     age : 25
  
// }
// let {name:{lastName: yourLastName}}=student
// console.log(yourLastName);

//+++++++++++++++++++++++++++++
// let number =[1,2,3,4,5]
// let [first,second,...others] =number
// console.log(first,second,others[0],others[1],others[2]);
//+++++++++++++++++++++++++++++++++
//spread
// let first =[1,2,3]
// let second =[4,5]
// let third =[...first,...second]
// console.log(third);

//++++++++++++++++++++++++
// function sum (first,second,...others){
//     console.log(others);
//     return first+second
// }

// console.log(sum(1,2,6,80,75))


//+++++++++++++++++++++++++++++
// let number =[1,2]
// let [first,second,...others] =number
// console.log(first,second,others);
//+++++++++++++++++++++++++++++

let student = {
    name:'Salem',
    age:18,
    gender: false
}
//  let {name,...others} = student
// console.log(name,others);

let {name,nickname = 'unknow'} = student

console.log(name,nickname);






