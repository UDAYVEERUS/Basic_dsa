var num = [2,4,6,70,20,28,59,29,17,37,888,382882,298349,65382]
var sum = 0;
for(var i=0;i<num.length-1;i++){
    // printing sum of even numbers
    if(num[i]%2==0){
        sum = sum+num[i]
    }
}

// print the sum of numbers
console.log(sum)