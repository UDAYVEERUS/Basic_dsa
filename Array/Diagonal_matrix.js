
//print diagonal matrix
const n = 5;
const m = 4;
const matrix = [[0,0,0,0],
                [1,1,1,1],
                [2,2,2,2],
                [3,3,3,3],
                [4,4,4,4]]

for(var i=0;i<m;i++){
    var arr = ""
    for(var j=0;j<n;j++){
        arr += matrix[j][i] + " "

    }
    console.log(arr)
    
}