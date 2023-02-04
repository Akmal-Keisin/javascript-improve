class Person {
  constructor(name) {
    console.log("Hai " + name)
    this.name = name
  }
  test = "hest"
  sayHello() {
    console.log("Hello " + this.name)
  }
}

const keisin = new Person("Keisin")
// console.log(keisin.name)
keisin.sayHello()
console.log(keisin.test)


// inheritance

class school {
  constructor (age) {
    this.age = age
  }
  sayHello(name) {
    console.log("Hello " + name)
  }
}

class student extends school{
  constructor(city, age) {
    super(age)
    this.city = city
  }
}

const afi = new student("Semarang",18)

afi.sayHello("Semarang")
console.log(afi.age)


class box {
  show() {
    console.log("Box")
  }
}

class Shape extends box {
  show() {
    // super.show()
    console.log("Shape")
  }
}

const shape = new Shape() 

shape.show()

class car {
  constructor (name, engine) {
    this.name = name
    this.engine = engine
  }

  get info() {
    return `${this.name}, ${this.engine}`
  }

  set carName (name) {
    this.name = name
  }
}

const ferrari = new car("Ferrari", "Trubo")

console.log(ferrari.info)
ferrari.carName = "Lamborgini"
console.log(ferrari.info)