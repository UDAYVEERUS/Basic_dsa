// print all the numbers from 1 to the value stored in num.
function firstNested(num){
    for(var j=1; j<= num; j++){
        var line = ""
        for(var i=1; i<=num;i++){
            line = line + i + " "
        }
    }
    // console.log(line)
    return line
}
const num = 12
console.log(firstNested(num))