const n = 4
const m = 3
const matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[10, 11, 12]]
var arr = []
for (var i = 0; i < m; i++) {
    for (var j = n - 1; j >= 0; j--) {
        // console.log(matrix[j][i])
        arr.push(matrix[j][i])
    }
}
console.log(arr.join(" "))