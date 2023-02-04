const name = (names) => {
  console.log(names)
}

name("keisin")

const noBracket = (name) => console.log(name)
noBracket("Akmal")

const param = name => console.log(name)

param("Alfateh")

function callBackFun (callback) {
  callback("keisin")
}

callBackFun(name => console.log("Hell0 " + name))