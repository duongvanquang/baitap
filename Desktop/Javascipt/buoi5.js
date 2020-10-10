// 19 : Prototype
/*function Person(name, age){
    this.name = name;
    this.age = age;
    this.setName = function(name){
        this.name = name
    }
}
const teo = new Person ("Nguyen van Teo", 20)
teo.setName("Teo")
console.log(teo)
Person.prototype.getInFo = function (){
    return this
}
const teo = new Person("Nguyen Van Teo",20);
const ti = new Person ("Nguyen Van Ti",20);
console.log(Person.prototype)*/
// 20 : Function scope
var a = 1
function random (){
    var a = Math.random ()
    console.log(a)
}
random ()
console.log(a)

