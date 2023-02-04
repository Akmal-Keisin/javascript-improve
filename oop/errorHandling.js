class MathCalc {
  static calc(...number) {
    if (number.length <= 0) {
      throw new Error("parameter harus lebih dari 1")
    }
    let result = 0
    for (let index = 0; index < number.length; index++) {
      result += number[index]
    }
    console.log(result)
  }

  num = 0
  static next() {
    try {
      console.log(this.num)
    } finally {
      this.num++
    }
  }
}

try {
  MathCalc.next()
  // MathCalc.calc()
} catch (error) {
  console.error("Error " + error.message)
} 

class ErrorInstance extends Error {
  constructor(message, field) {
    super(message)
    return this.field = field
  }
}

throw new ErrorInstance("Ada yang salah", "Error")