class Vehicles{
     constructor(id,name,company){
        this.id = id,
        this.name = name ,
        this.company = company
     }
   
}

class Car extends Vehicles{
    constructor(id,name,company, type){
        super(id,name,company),
        this.type  = type
     }

}



class Airplane extends Vehicles{
    constructor(id,name,company, type){
        super(id,name,company),
        this.type  = type
     }

}



class Employee {
    constructor(id,name,birthDay){
        this.id = id,
        this.name = name ,
        this.birthDay = birthDay
     }

}

class Driver extends Employee{
    constructor(id,name,birthDay, lice){
        super(id,name,birthDay),
        this.lice  = lice
     }
}


class Pilot extends Employee{
    constructor(id,name,birthDay, lice){
        super(id,name,birthDay),
        this.lice  = lice
     }
}

class Reserved{
    constructor( employeeId , vehiclesId , reservationDate,reservationID){
    
      this.employeeId=employeeId,
      this.vehiclesId=vehiclesId,
      this.reservationDate= reservationDate,
      this.reservationID=reservationID
    }
}

let car1 = new Car(1,'cona','camry',' electric')
let car2 = new Car(2,'cera','ford','gas')
let plane1 = new Airplane(3,'TA200','LKJS','TurbopropAircraft')
let plane2 = new Airplane(4,'TA509','KSA','Piston Aircraft')
let plane3 = new Airplane(5,'TA398','BREA','Narrow Body Aircraft')
// console.log(car1);
// console.log(car2);
// console.log(plane1);
// console.log(plane2);
// console.log(plane3);

let driver1 = new Driver(1,'Carlos','1999-3-12','20910')
let driver2 = new Driver(2,'Jack','1989-4-30','472397')  
let pilot1 = new Pilot(3,'Jonh','1992-6-22','2741974') 
let pilot2 = new Pilot(4,'Arther','1993-2-25','74203') 
let pilot3 = new Pilot(5,'jonh','1992-6-12','937490') 
// console.log(driver1);
// console.log(driver2);
// console.log(pilot1);
// console.log(pilot2);
// console.log(pilot3);
// let x = car1.id;
// let y = plane1.id;

let cars = [car1.id,car2.id]
console.log(cars);
let drivers =[driver1.id,driver2.id]
console.log(drivers);
let plants = [plane1.id,plane2.id,plane3.id]
console.log(plants);
let pilots = [pilot1.id,pilot2.id,pilot3.id]
console.log(pilots);
//console.log(cars.includes(2));

function bookTicket(empId, vehId,ticketDate,ticketId) {
    // emp == pilot && vic == car // log('NO')
    //if(employeeId != car1.id && vehiclesId != pilot1.id){
    if(( cars.includes(empId) && drivers.includes(vehId)) || (pilots.includes(empId)&& plants.includes(vehId))){
       // console.log('Yes the same');
        // return  reserved = new Reserved(employeeId,vehiclesId)
        // return employeeId,vehiclesId
        // return   Reserved(employeeId,vehiclesId)
        // return Reserved.prototype.getInFo=function(){
        //     this.employeeId =empId,
        //     this.vehiclesId = vehId
        // }
      let  reserved = new Reserved(empId,vehId,ticketDate,ticketId)
      return reserved ;
     
    }else{
      console.log('Not the same'); 
    }
 

}

//bookTicket(2,1)
//bookTicket(4,3)
//arr=[employeeId,vehiclesId] 
// arr=[3,3] 
// // let reserved1 = new Reserved(...arr,'2022-2-3',1)
// let reserved2 = new Reserved(bookTicket(4,3),'2022-2-3',2)
// // console.log(reserved1);
// //console.log(car1.id);
 
// //  list.push(reserved1)
//bookTicket(1,3)
//const list = []
//list.push(bookTicket(1,3))
//console.log('The list is ',list);//Not the same

//bookTicket(4,3)

const list = []
list.push(bookTicket(4,3,'2022-12-23',1))
list.push(bookTicket(5,3,'2022-1-30',2))
list.push(bookTicket(4,5,'2022-12-13',3))
list.push(bookTicket(3,2,'2022-3-13',4))
//console.log('The list is ',list);//

const printReserved = list.map(function(currentValue,array){
    return currentValue
})

console.log('The print Book Ticket',printReserved);
