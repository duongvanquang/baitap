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
/*var a = 1
function random (){
    var a = Math.random ()
    console.log(a)
}
random ()
console.log(a)*/

// 21 : var let const
// nen su dung let de tranh : Redeclaration, Hoisting, Block scope

/*const teo = {
    name: "Nguyen Van Teo",
    age: 20,
    showInfo : function (){
        console.log("name :" + this.name + " , age : " + this.age);
    }
}
const coppy = teo.showInfo.bind(teo)
coppy ()
console.log(this)*/
/*function run (cb) {
    console.log('run...')

    cb ()
}
const mouse = {
    name: 'mickey',
    run: function (){
        console.log(this.name + 'is running')
    }
}
run (mouse .run.bind(mouse))*/
// 23 : Arrow function
/*const arrNums = [ 2,3,4,6,8,9]
const newArrnums = arrNums.map(function(value){
    return value * 2
})
const newArrNums = arrNums . map ((value) =>{
    return value * 2
})
console.log(newArrNums)*/
// 25 : Template string (backtick)
function greeting ( name){
    return `Hi , ${name} !`
}
console.log(greeting("phat"))
// 26 : Argument ( array like object)
/*function tinhtong() {
    const arr = Array.from(arguments)
    const result = arr.reduce((accumulator , currentValue) =>{
        return accumulator + currentValue
    }, 0)
    console.log(result)
}
tinhtong (2,5,6,9,3,6)*/
// 27: rest 
/*function sum(... nums){
    return nums.reduce((a , b) =>a +b)

    

}
sum(1,3,4,6)*/
// 28: spread
/*const names = ["Teo","Ti","Tun"]
const */
