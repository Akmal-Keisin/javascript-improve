function callback() {
  console.log("Hello World")
}

function async() {
  setTimeout(() => {
    callback()
  },3000)
  console.log('Async')
}

async()