const person = {
  firstName: "Akmal",
  middleName: "Keisin", 
  lastName: "Alfateh"
}

for (const item in person) {
  console.log(item)
}

const arrayPerson = [
  'Akmal',
  'Keisin',
  'Alfateh'
]

for (const item in arrayPerson) {
  console.log(item + ' ' + arrayPerson[item])
}