// ham map
/*function namesOnly ( arr){
    const new arr.map
}
namesOnly ([
    {
        name :"Angelina Jolie",
        age: 80
    },
])*/
//16:Ham flter 
//1: tao mang moi khong de len mang cu
// 2: thay doi kich thuong cuar mang cu khong thay doi ohan tu
/*const arrNumber = [ 5, 2, 10,20,11,15]
const newArr = arrNumber.filter(function (num,index){
    if (index %2 ==0){
        return true
    }
    return false
})
console.log(newArr)*/
/*function findDivisibleNum (array, x){
   const result = array.find(function(num){
       if (num % x ==0)
       return num
   })
    console.log(find)

}*/
// 17 : Ham reduce
/*const arrNumbers = [  5,2,10,20,11,15]
const result =  arrNumbers.reduce (function(accumulator, currentValue){
    console.log("Accumlator: " + accumulator);
    console.log("currentValue: " + currentValue);
    return accumulator + currentValue
    
}, 0 )
console.log(result)*/
// 18: Ham sort 
const Numbers = [ 1, 10 ,14,7,3,2]
const newNumbers = Numbers.sort( function(a,b){
    return a - b 
})
console.log(newNumbers)
