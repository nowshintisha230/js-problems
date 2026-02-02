let array=[3,3,5,6,4,3,1,3,2];
function duplicate(items){
    let sharpArray=[];
for(let i=0;i<items.length;i++){
    if(items.indexOf(items[i])===i){
       sharpArray.push(items[i]);
    }
}
console.log('Clean Array:',sharpArray.join(" "))
}
duplicate(array);