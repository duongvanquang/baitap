// 15 : Map method

/*const arrNumbers = [ 5 , 2, 10 , 20, 11,15]

// 1: tao ra mang moi va khong ghi de mang cu
// 2: thay doi gia tri trong tung phan tu va khong them hoac xoa phan tu

const newArrNums  = arrNumbers . map(function(value,index){
    return value * 3
})
console.log(newArrNums)*/
// vi du
// make an array of strings of the names
/*function namesOnly (arr){
    const newArr  = arr.map(function(person, index){
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
     ])*/
     //["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// 16: Ham filter

// 1: tao ra mang moi va khong ghi de len mang cu
// 2: thay doi kich thuoc cua mang chu khong thay doi gia tri cua phan tu

/*const arrNumbers = [ 5, 2, 10, 20, 11, 15]
const newArr = arrNumbers.filter(function(num,index){
    if (index % 2 ==0){
        return true
    }
    return false
})
console.log(newArr)*/
// vi du:
/*function findFirstEvenNumber (Array){
    return Array.find(function(value){
        if(value % 2 == 0)
        return value
    })
}
console.log(findFirstEvenNumber([ 9 , 4, 5],1))*/

/*function findDivisibleNum (array,x){
    const result = array.find(function(num){
        if(num % x ==0 )
        return num
    })
    console.log(result)
}
findDivisibleNum([1,3,4],2)*/
/*var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
  var listProducts = [
      {id: 1, categoryId: 1, name: 'Tivi'},
      {id: 2, categoryId: 1, name: 'Tủ lạnh'},
      {id: 3, categoryId: 3, name: 'Ghế sofa'},
      {id: 4, categoryId: 1, name: 'Máy giặt'},
      {id: 5, categoryId: 2, name: 'Chén bát'},
      {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
      {id: 7, categoryId: 3, name: 'Cửa kính'},
      {id: 8, categoryId: 1, name: 'Điều hoà'},
      {id: 9, categoryId: 3, name: 'Bàn tròn'},
      {id: 10, categoryId: 2, name: 'Lò vi sóng'},
     ];
function filterProductsByCategoryId(products , categoryId){
    return products.filter(function(product){
        if (product.categoryId === categoryId){
            return true
        }
        return false
    }).map(function(product){
        delete product.categoryId
        return {id: product.id, name:product.name}
    })
}
console.log(filterProductsByCategoryId(listProducts,2))*/
// 17: Ham reduce
/*const arrNumbers = [5 , 2 , 10, 20, 11, 15]
const result = arrNumbers.reduce(function (accumulator , currentValue){
    console.log("Accumlator : " + accumulator );
    console.log(" CurrentValue : " + currentValue);
    return accumulator + currentValue
}, 0)
console.log(result)*/
/*function totalVotes (arr){
    const result = arr.reduce(function(accumulator , currentValue){
        if(currentValue.voted){
            accumulator +=1
        }
        return accumulator
    }, 0)
    return result
}
var voters = [
       {name:'Bob' , age: 30, voted: true},
       {name:'Jake' , age: 32, voted: true},
       {name:'Kate' , age: 25, voted: false},
       {name:'Sam' , age: 20, voted: false},
       {name:'Phil' , age: 21, voted: true},
       {name:'Ed' , age:55, voted:true},
       {name:'Tami' , age: 54, voted:true},
       {name: 'Mary', age: 31, voted: false},
       {name: 'Becky', age: 43, voted: false},
       {name: 'Joey', age: 41, voted: true},
       {name: 'Jeff', age: 30, voted: true},
       {name: 'Zack', age: 19, voted: false}
     ];
console.log(totalVotes(voters))*/
/*function countOccurrences (arr){
    const result = arr.reduce(function(accumulator , currentValue){
        if (currentValue in accumulator){
            accumulator[currentValue]++
        } else{
            accumulator[currentValue] = 1
        }
        return accumulator
    },{})
    console.log(result)
}
countOccurrences(["a","b","c","a","a","b","a"])*/
// 18: Ham sort
const numbers = ["Teo","A Tuan","Ba","Ca","Da"]
const newNumbers = numbers.sort ()
console.log(newNumbers)

