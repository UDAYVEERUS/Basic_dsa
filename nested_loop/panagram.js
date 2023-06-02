// const string = "udayveer"
const string = "racecar"

var str1 = ""
for(var i=0;i<string.length;i++){
    str1 = str1+ string[i]
}
// console.log(str1)
var str2  = ""
for(var i=string.length-1 ; i>=0; i--){
    str2 = str2+string[i]
}
// console.log(str2)
if(str1 === str2){
    console.log("String is panagram")
}
else{
    console.log("String is not pangaram")
}