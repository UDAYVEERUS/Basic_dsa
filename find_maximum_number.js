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