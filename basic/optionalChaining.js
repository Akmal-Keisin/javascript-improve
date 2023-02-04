const person = {
  address: {
    country: "Indonesia"
  }
}

// undefined data
// const data = person.address.country

let country
// if (person.address !== undefined && person.address !== null) {
//   country = person.address
// }

console.log(person?.address?.country)

// error
console.log('success')
console.log(country)
console.log('success')
// error