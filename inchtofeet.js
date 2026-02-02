//12 inch =1 feet


function inchToFeet(inch){
   let feet=inch/12;
   console.log('In Decimal:',feet);
     feet=parseInt(inch/12);
    remainingInch=inch%12;
   console.log('In Feet and Inch:',feet,'FT',remainingInch ,'INCH');
}
inchToFeet(75)