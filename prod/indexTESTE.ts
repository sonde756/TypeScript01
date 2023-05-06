/*
let values:number[] = [10, 20, 30, 40]

let total: number = 0

for (let i = 0; i < values.length; i++) {
    total += values[i]
}

console.log(total)
*/

//Tuples
/*let item: [string, number, boolean] = ["Apple", 3, true]*/


/*enum Role {admin = 1, read = 2, backup = 3 }

let user = {
  firstName: "Edson",
  age: 21,
  role: Role.backup

}
document.getElementById("name")!.innerHTML = user.firstName

console.log(user);*/


/*
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function result(price: number) {
  console.log("The result is " + price)
}

result(add(6, 3))
*/

/*      Alias
type Users = {
  firstName: string
  age: number
}

const user: Users = {
  firstName: "Edson",
  age: 35
}*/


function userInput(num1: number | string, num2: number | string) {

  let result
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2
  } else {
    result = num1.toString() + num2.toString()
  }

  return result
}


let value1 = document.getElementById("value1") as HTMLInputElement;
let value2 = document.getElementById("value2") as HTMLInputElement;
// @ts-ignore
const btn = document.getElementById("btn") as HTMLButtonElement;
const resultElement = document.getElementById("result") as HTMLElement;

btn.addEventListener("click", () => {
  const num1 = Number(value1.value);
  const num2 = Number(value2.value);
  const result = userInput(num1, num2);
  console.log(result);
  resultElement.innerHTML = result.toString();
});


type User = {
  firstName: string
  age: number
}

type JobRole = {
  id: number,
  role: string
}

type employee = User & JobRole

const e1: employee = {
  firstName: "Edson",
  age: 31,
  id: 221,
  role: "Admin"
}


// Day 3 - Exercise 3

let isDouglas: boolean = true

console.log(`${isDouglas  ? 'Oh, Hi Douglas' : 'Who are you?'}`)


// Dia 3 - Exercício 3
/////////////////////////////////////////////////////////////////////----------////////////////////////////////////////////////////////


class Users {
  firsName: string
  balace: number

  constructor(n: string, b:number) {
    this.firsName = n
    this.balace = b
  }

  addMoney(amount: number){
    this.balace += amount
  }

}

const user1 = new Users('Edson', 10)
//const user2 = new Users('Hudson', 20)



console.log(user1)
//console.log(user2)


document.getElementById("name")!.innerHTML = user1.firsName

let addB = document.getElementById("value") as HTMLInputElement

// @ts-ignore
let btn = document.getElementById("addBalance") as HTMLButtonElement

document.getElementById("balance")!.innerHTML = String(user1.balace)


btn.addEventListener("click", () => {
  const value: number = Number(addB.value);
  user1.addMoney(value);
  document.getElementById("balance")!.innerHTML = String(user1.balace)

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface Item {
  name: string
  price: number

  itemMessage(message: string): void
}

const product1 = {
  name: "Apple",
  price: 2,
  itemPurchased: function(message: string): void {
    console.log(message + this.name);
  }
};



product1.itemPurchased("Voce acabou de compra uma ")
// Day 5 - Exercise 1

interface Item {
  id: number
  title: string
  variantId: number

  itemMessage(message: string): void
}

// @ts-ignore
const addToCart: Item = {
  id: 1,
  title: "Shoes",
  variantId: 2,
  itemMessage(message: string) {
    console.log(message + this.title)
  }

}

addToCart.itemMessage(`Adding ${addToCart.title} to cart`)


// Day 5 - Exercise 4

// @ts-ignore
class Employee {
  title: string;
  salary: number;
  constructor(title: string, salary: number) {
    this.title = title;
    this.salary = salary;
  }
}

// refatorado

// @ts-ignore
class Employee {
  constructor( public title: string, public salary: number) {}
}



const employee = new Employee('Engineer', 100000);

console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
