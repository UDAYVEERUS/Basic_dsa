const n = 4
const m = 5
const matrix = [[1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20],
            ]
var arr = []
for(var i=0;i<n;i++){
    if(i%2==0){
        for(var j=m-1;j>=0;j--){
            arr.push(matrix[i][j])
        }
    }
    if(i%2!==0){
        for(var j=0;j<m;j++){
            arr.push(matrix[i][j])
        }
    }
}
console.log(arr.join(' '))
console.log(arr)