class Customer {
  name
  age = 18
  job

  info() {
    console.log("Name : " + this.name + " Age : " + this.age + " Job : " + this.job)
  }
}

const keisin = new Customer() 
keisin.name = "Keisin"
keisin.job = "Web Enginer"
keisin.info()

class Counter {
  #counter = 0

  #decrement() {
    this.#counter--
  }

  increment() {
    this.#counter++
    if (this.#counter === 5) {
      this.#decrement()
    }
  }


  get getCounter() {
    return this.#counter
  }
}

const number = new Counter

number.increment()
number.increment()
number.increment()
number.increment()
number.increment()

console.log(number.getCounter)