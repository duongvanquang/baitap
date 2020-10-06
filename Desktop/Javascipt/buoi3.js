// 10: Vong lap
//const arrNumbers1 = [ 1,2,3,4,5]
//const arrNumber2 =[10, 20,30]

//for (var i =0;i <10 ;i++){
//   console.log(i)

//for (var i =0; i<arrNumbers1.length;i++){
//   for(var y =0;y<arrNumber2.length;y++){
//      console.log(arrNumbers1[i] * arrNumber2[y])
//   }
//}
// 10
// 20
// 30
//20
// 40
// 60
//30
//60
// 90
// 40
// 80
// 120
// 50
// 100
// 150
// 11: For of (lay gia tri trong mang)
//const arrNames = ["Teo", "Ti","Tun","Hoa"]
//for (const value of arrNames){
//   console.log(value)
//}
/*function multiply (arr) {
    var result =1
    for (const value of arr){
        result *= value
    }
    return result
}
console.log(multiply([2,3,4]));*/
// for in (lay key trong mang)
// const arrNames = ["Teo","Ti","Tun","Hoa"]
/*const teo = {
    name : "Nguyen Van Teo",
    age: 20
}
for ( var key in teo){
    console.log(key)
}*/
/*var apartment = {
    bedroom: {
        age: 20,
        bed: {
            type: 'twin - bed',
            price: 100
        }
    }
};*/
/*function getkey(object){
    for (const keyobject in object){
        console.log(keyobject)
        for (const keyBedroom in object [keyobject]){
            console.log(keyBedroom)
            for (const KeyBed in object [keyobject][keyBedroom]){
                console.log(KeyBed)
            }
        }
    }
}*/
/*function getkey (object){
    for (const key in object){
        console.log(key)
        if(typeof object [key] === "object"){
            getkey(object[key])
        }
    }
}
getkey(apartment) */
//13: Arry method
//const arrNums = [5,1,10,20,30]
// Them phan tu cuoi mang
/*arrNums.push (40)
console.log(arrNums)*/
// xoa phan tu cuoi
//arrNums.pop()
// them phan tu dau mang
// arrNums.unshift (0)
// xoa phan tu dau mang
// arrNums.shift()
// them phan tu o giua
// arrNums.splice(1,0,50)
// xoa phan tu o giua
// arrNums.splice (1,3)
//14: callback la tham so
/*function TingTong (a,b){
    return a + b
}
function inThongTin (cb){
    console.log(cb)
}
inThongTin(TingTong(10 ,5))*/
/*function insochan (){
    for (var i =1; i<=100;i++){
        if (i %2 ==0){
            console.log(i)
        }
    }
}
function inso (sochia,sodu){
    for (var i =0;i<=100;i++){
        if(i % sochia ===sodu){
            console.log(i)
        }
    }
}
inso (1)*/
function inso (cb){
    for ( var i = 1 ; i<= 100;i++){
        const dk = cb(i)
        if (dk) console.log(i)
    }
}
inso (function(i){
    return Math.sqrt(i) % 1==0
})

