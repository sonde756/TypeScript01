"use strict";
// Day 5 - Exercise 5
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new User('Dog', 1);
console.log(user);
user.name = 'Harold'; // pode mudar
console.log(`User:`, user);
