/*const arrNums1 = [1,2,3,4,5]
const arrNums2 = [10,20,30]
for (var i = 0;i < arrNums1.length;i++){
    for(var y = 0;y < arrNums2.length;y++){
        console.log(arrNums1[i] * arrNums2[y])
    }
}*/


/*function multiply ( arr){
    result = 1
    for (const value of arr){
        result *= value
    }
    return result

}
console.log(multiply([2,3,4]))*/

/*const arrNumes = ["Teo","Ti","Tun","Hoa"]
const teo = {
    name: "Nguyen Van Teo",
    age: 20
}
for (var key in teo ){
    console.log(key)
}*/

/*var apartment  = {
    bedroom:{
        area:20,
        bed:{
            type:'twin - bed',
            price:100
        }
    }
};
function getkey(obj){
    for ( const key in obj){
        console.log(key)
        if(typeof obj [key]=== "object"){
            getkey(obj[key])
        }
    }
}
getkey(apartment)*/

/*const numbers = [2,5,7,9]
const newnumber = numbers.map((value) =>{
    return value * 2
})
console.log(newnumber)*/

/*function namesOnly (arr){
    const newArr = arr.map((person, index) =>{
        return person.name
    })
    console.log(newArr)
}
namesOnly([
       {
         name: "Angelina Jolie",
         age: 80
       },
       {
         name: "Eric Jones",
         age: 2
       },
       {
         name: "Paris Hilton",
         age: 5
       },
       {
         name: "Kayne West",
         age: 16
       },
       {
         name: "Bob Ziroll",
         age: 100
       }
     ])
     //["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]*/

     /*const arrNumbers = [5, 2,10,20,11,15]
     const newArr = arrNumbers.filter((num,index) =>{
         if(index % 5 ==0){
             return true
         }
         return false

     })
    console.log(newArr)*/