// const string = "udayveer"
const string = "r"
if(string.length<=1){
    console.log("Length of string is very short")
}
else{
var str1 = ""
for(var i=0;i<string.length;i++){
    str1 = str1+string[i]
}
var str2 = ""
for(var j=string.length-1;j>=0;j--){
    str2= str2+string[j]
}

if(str1 == str2){
    console.log(true)
}
else{
    console.log(false)
}
}