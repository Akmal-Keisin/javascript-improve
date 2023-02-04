let parameter = null

let data = parameter
console.log(data)
if (data == null || data == undefined) {
  data = "nama"
}
console.log(data)


// Nullish coalecing operator
let data2 = parameter ?? 'Nama default'
console.log(data2)