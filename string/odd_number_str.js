// print all charcaters who present on odd indexes
const string = "udayveersingh"
for(var i=0;i<string.length;i++){
    if(i%2==0){
        console.log("Even Indexes string are "+string[i])
    }
}

// print all charcaters who present on Even indexes
for(var j=0;j<string.length;j++){
    if(j%2!==0){
        console.log("Odd Indexes string are "+string[j])
    }
}