console.info("hello" || "") //hello
console.info("hello" || "Hai") //hello
console.info("hello" || []) //hello
console.info("0" || 0) //"0"
console.info(0 || []) // []


console.info("hello" && "") //""
console.info("hello" && "Hai") //"hai"
console.info("hello" && []) //[]
console.info("0" && 0) //0
console.info(0 && []) // 0

