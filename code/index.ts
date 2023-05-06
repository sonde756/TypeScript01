// Day 5 - Exercise 5

interface UserSchema {
  id: number
  name: string
}

class User implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const user = new User('Dog', 1)

console.log(user)

user.name = 'Harold' // pode mudar


console.log(`User:`, user)
