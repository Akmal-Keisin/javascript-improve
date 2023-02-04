function Job(jobName, jobCategories) {
  this.jobName = jobName
  this.jobCategories = jobCategories
  this.jobInfo = function() {
    console.log("Job Name : " + this.jobName + " Job Categories : " + this.jobCategories)
  }
}

function Person(firstName, lastName) {
  this.city = ''
  this.country = ''
  this.name = firstName + " " + lastName
  this.jobCategories = ""
  this.jobName = ""
  Job.call(this, this.jobName, this.jobCategories)

  this.sayHello = function() {
    console.log("Hello " + this.name)
  }
}

const akmal = new Person("Akmal", "Keisin")
// akmal.city = "Semarang""
akmal.country = "Indonesia"
akmal.jobCategories = "Technology"
akmal.jobName = "Web Enginer"

const afi = new Person("Ahmad", "Mu'afi")
afi.city = "Semarang"
afi.jobCategories = "Design"
afi.jobName = "Designer"
// afi.country = "Arab"

console.log(akmal)
console.log(afi)

afi.sayHello()
afi.jobInfo()
akmal.sayHello()
akmal.jobInfo()

