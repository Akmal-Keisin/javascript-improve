const person = {
  name: "Akmal",
  sayHello: function() {
    console.log("hello " + this.name)
    console.log(this)
  }
}
person.sayHello()

const mobil = {
  name: "Avanza",
  specific: (info) => {
    console.log(this)
    console.log(info)
  }
}

mobil.specific("Speed")