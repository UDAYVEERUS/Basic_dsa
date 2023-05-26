// check vowels are present or not
const str = "udayveer"
// const str = "stryhg"
var count = 0
for(var i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        count++
    }
}
if(count >=1){
    console.log("vowels are present")
}else{
    console.log("vowels are not present")
}

// check count of vowels or consonents in the string

const string = "udayveersingh"
var vowels = 0
var consonents = 0
var count = 0
for(var i=0;i<string.length;i++){
    if(string[i]=="a"||string[i]=="e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
        vowels++
    }
    else{
        consonents++
    }
}
var bag = "vowels are "+vowels  +" consonents are  "+ consonents
console.log(bag)