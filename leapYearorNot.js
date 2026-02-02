function year(check){
if(check%4==0 && check%100!=0 || (check%400==0) ){
    console.log(check,'is a leap year')
}
else{
console.log(check,'is not a leap year');
}
}
year(2026);
year(2024);
year(2066);
year(2000);

