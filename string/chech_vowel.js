const str = "udayveer"
// const str = "stryhg"
var count = 0
for(var i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        count++
        // console.log("Vowels are present")
    }
}
if(count >=1){
    console.log("vowels are present")
}else{
    console.log("vowels are not present")
}