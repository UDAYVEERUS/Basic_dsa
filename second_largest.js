// sort the array in descending order

var array = [5,3,7,4,1,9,3]

array.sort((a,b)=>{
    return b - a
})
console.log(array.join())