// 10: Vong lap
/*const arrNumbers1 = [ 1, 2, 3, 4, 5]
const arrNumbers2 = [ 10, 20 ,30]
for (var i =0; i < arrNumbers1.length; i++){
    for ( var y = 0; y < arrNumbers2.length;y++){
        console.log(arrNumbers1[i] * arrNumbers2[y])
    }
}*/
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
/*const arrNames =  ["Teo","Ti","Hoa","Tun"]
for (const value of arrNames){
    console.log(value)
} */
/*function multiply (arr){
    var result = 1 
    for (const value of arr){
        result *= value
    }
    return result 
}
console.log(multiply([2,3,4]));*/
// 12: for in (lay key trong mang)
/*const arrNames = ["Teo","Ti","Tun","Hoa"]
const teo ={
    name: "Nguyen Van Teo",
    age: 20
}
for (var key in teo){
    console.log(key) */
   /* var apartment ={
        bedroom: {
            area: 20,
            bed : {
                type:'twin - bed',
                price:100
            }
        }
    };
    function getKey(obj){
        for (const key in obj){
            console.log(key)
            if(typeof obj [key]==="object"){
                getKey(obj[key])
            }
        }
    }
    getKey (apartment) */
   // 13 : Array method
// const arrNums = [5,1,10,20,30]
// Them phần tử vào cuối mảng
// arrNums.push(40)
// Xóa phần tử ở cuối
// arrNums.pop()
// Thêm phần tử đầu mảng
// arrNums.unshift(0)
// Xóa phần tử đầu mảng
// arrNums.shift()
// Xóa phần tử ở giữa
// arrNums.splice(1 , 3)
// Thêm phần tử ở giữa
// arrNums.splice(-1 , 0 , 50)

// console.log(arrNums)

// 14: callback la tham so 
/*function tinhtong(a ,b){
    return a + b
}
function inThongTin(cb){
    console.log(cb)
}
inThongTin(tinhtong(10 ,5)) */
// vong lap 1...100
// in so chan
// in so le
// in so chia cho 3 du 1
// in so chinh phuong

/*function insochan (){
    for (var i = 1 ; i <= 100;i++){
        if (i % 2=== 0 ){
            console.log(i)
        }
    }
}
insochan (1,100)*/
/*function insole(){
    for ( var i =1; i<=100;i++){
        if(i % 2 ===1){
            console.log(i)
        }
    }
}
insole (1,100)*/

/*function insochia3du1 (){
    for (var i = 1;i<=100;i++)
    {
        if(i % 3 ===1){
            console.log(i)
        }
    }
}
insochia3du1 (1,100)*/

/*function insochinhphuong (){
    for ( var i =1;i <=100;i++){
        if(Math.sqrt(i) % 1 ===0){
            console.log(i)
        }
    }
}
insochinhphuong (1,100)*/
function inSo(cb){
    for (var i =1;i <= 100;i++){
        const dk = cb(i)
        if (dk) console.log(i)
    }
}
inSo (function(i){
    return Math.sqrt(i) % 1 == 0
})
insochan (1,100)
insole(1,100)
insochia3du1 ()
insochinhphuong ()