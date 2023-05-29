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


// print n starts
function startPattern(num){
    for(var i=0;i<=num;i++){
        var line = ""
        for(var j=1; j <= num; j++){
            line=line+"*"+" "
        }
    }
    return line
}
const n = 5;
console.log(startPattern(n))

// Pattern printing
function patternPrinting(numbers){
    for(var i=1; i<= numbers; i++){
        var line = ""
        for(var j=1; j<=i;j++){
            line = line + "*" +" "
        }
        return line
    }
}
const patt_num = 5;
console.log(patternPrinting(patt_num))