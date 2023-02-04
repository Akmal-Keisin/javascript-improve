class MathCalc {
  static sum(...num) {
    if (num.length <= 0) {
      throw new Error("Params must more than 0");
    }
  }
}

MathCalc.sum()