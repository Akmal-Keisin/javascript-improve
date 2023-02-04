function sayHelloWorld() {
  console.log('Hello World')
}
sayHelloWorld()

// Parameter
function sayHello(name) {
  console.log("Hello "  + name)
}

sayHello("Keisin")

function say(firstName, secondName) {
  let say = firstName + " " + secondName
  return say
}

console.log(say("Akmal", "Keisin"))


// Rest parameter

function sum(...data) {
  console.log(data)
}

sum(1,2,3,4,5,6,7,8,9)

// spread syntax

sum(...[1,2,3,4,5,5,6])

// function as value

function sayHai(name) {
  console.log('Hai ' + name)
}

let chat = sayHai

sayHai('Akmal')
chat('Keisin')


function respondChat(chat) {
  console.log(chat('Akmal'))
}

respondChat(chat)

// annonymous function

function chatMe(talk) {
  talk('Hi')
}

chatMe(function(name) {
  console.log(name)
})


// nested function

function outer() {
  function inner() {

  }
  inner()
}
outer()