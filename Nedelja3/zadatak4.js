/*Написати функцију која исписује све елементе низа који су дељиви са 5
function divisibleByFive(arr){
  ...
}

divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5*/


let niz=[1,3,5,8,10,12,15];


let a= niz.filter(x=>{
  return x%5==0;
})

console.log(a);