// 19 : Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    this.setName = function(name){
        this.name = name
    }
}
const teo = new Person ("Nguyen van Teo", 20)
teo.setName("Teo")
console.log(teo)