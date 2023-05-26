// given a aquare matrix turn it into 90 degree in an Anti-clock wise
const n = 4;
const matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[1, 2, 3, 4],
[5, 6, 7, 8]];

var arr = []
for (var i = n - 1; i >= 0; i--) {
    var arr1 = []
    for (var j = 0; j < n; j++) {
        arr1.push(matrix[i][j])
    }
    arr.push(arr1)

}
console.log(arr)

