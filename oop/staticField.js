class Config {
  static version = "1"
  static database = "Pgsql"

  static info() {
    console.log(this.version)
  }
}

console.log(Config.version)
Config.version = '123'
console.log(Config.version)

Config.info()