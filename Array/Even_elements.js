// Print even elements from an array
const array = [22,33,41,65,32,44]

for(var i=0;i<array.length;i++){
    if(array[i]%2==0){
        console.log("even numbers are "+array[i])
    }
}
for(var j=0;j<array.length;j++){
    if(array[j]%2!==0){
        console.log("Odd numbers are "+array[j])
    }
}