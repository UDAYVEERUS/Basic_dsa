// print all character in traverse way in a new line
var string = "udayveersingh"
for(var i=string.length-1;i>=0;i--){
    console.log(string[i])
}
// print reverse all characters on the same line
var reverse = ""
for(var j=string.length-1;j>=0;j--){
    reverse =reverse+string[j]
}
console.log(reverse)