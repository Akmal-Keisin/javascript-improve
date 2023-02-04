const arr = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh']
const [satu, dua, tiga, empat, ...lima] = arr

console.log(satu)
console.log(dua)
console.log(tiga)
console.log(empat)
console.log(lima)

const person = {
  name: "aknmal",
  age: 18,
  hobby: "game",
  address: {
    city : "semarang", 
    country : "Indonesia"
  }
}

const {name, age, address: {city, country}, ...other} = person
console.log(name)
console.log(age)
console.log(city)
const {name : nama, age: umur, address: {city: kota, country: negara}, ...lainnya} = person
console.log(nama)
console.log(umur)
console.log(kota)
