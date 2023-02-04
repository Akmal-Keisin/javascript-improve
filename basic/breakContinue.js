
// let index = 1
// while(true) {
//   console.log(index)
// 
//   if (index == 20) {
//     break
//   }
//   index++
// }

let i = 1

while(true) {
  // console.log(i)
  
  if (i === 10) {
    break
  }
  i++
  if(i % 2 === 0) {
    console.log(i + '\n')
    continue
  }
}