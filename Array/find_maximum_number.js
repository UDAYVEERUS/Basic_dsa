// find maximum number in an array
function findMaximumNumber(n, arr){
    let max = arr[0];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

const arr = [2,3,5,7,1,38,5,3]
const n  = 8
console.log(findMaximumNumber(n ,arr))

// find minimum number in an array
function findMinimumNumber(arr){
    let min = arr[0];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}

const array = [2,3,5,7,1,38,5,3]
console.log(findMinimumNumber(array))
