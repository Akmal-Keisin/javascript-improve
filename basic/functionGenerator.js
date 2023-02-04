function* generatorFunction() {
  yield "Akmal"
  yield "Keisin"
  yield "Alfateh"
}
console.info(generatorFunction())

const names = generatorFunction()
console.log(names[0])
for (const name of names) {
  console.info(name)
}

function* buatGanjil(value) {
  for(let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      console.log('yield ' + i)
      yield i
    }
  }
}

const ganjil = buatGanjil(100)

// for (const number of ganjil) {
//   console.log(number)
// }
// console.log(ganjil.next().value)
// console.log(ganjil.next().value)
// console.log(ganjil.next().value)