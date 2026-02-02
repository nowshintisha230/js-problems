const numbers=[3,5,4,7];
function average(newArray){
console.log('ARRAY:',newArray.join());


let oddNumbers=[];
sum=0;
for(let i=0;i<newArray.length;i++){
    if(newArray[i]%2!=0){
        oddNumbers.push(newArray[i]);
        sum+=newArray[i];

    }
avg=sum/oddNumbers.length;
}

console.log('Odd numbers:', oddNumbers.join(" "));
console.log('Sum of ODD numbers:', sum);
console.log('Average of ODD numbers:', avg);

}
average(numbers);