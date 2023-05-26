function newLine(array){
    for(var i=0;i<array.length;i++){
        console.log(array[i])
    }
}
// const n = 5
const num = [1,2,3,4,5]
console.log(newLine(num))

//print reverse traversal array
function traversalArray(n , arr){
    let reverse = []
    for(var i=arr.length-1;i>=0;i--){
        reverse = reverse  +arr[i]+ " "
    }
    return reverse
}
var  n = 5;
var array  = [1,2,3,4,5]
console.log(traversalArray(n,array))