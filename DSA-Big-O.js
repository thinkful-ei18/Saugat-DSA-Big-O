function whatDoesThisDo(array){
for (let i = 0; i<array.length/2; i++){
   let other = array.length - i - 1 ;
    let temp = array[i];
    array[i] = array[other]; 
    array[other] = temp
  }
}

let arr = [3,6,1,7,9,12,34,30]
console.log(whatDoesThisDo(arr));