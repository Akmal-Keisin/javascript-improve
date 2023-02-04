const mobil = {
  name: "",
  getter: function() {
    console.log(this.name)
  },
  setter: function(set) {
    this.name = set
  },
  get getName() {
    return `${this.name}`
  },
  set setName(val) {
    this.name = val
  }
}

// mobil.setter("Ferrari")
// mobil.getter()
mobil.setName = "Lamborgini"
console.log(mobil.getName)