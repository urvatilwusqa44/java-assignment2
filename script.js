//Question no.1
//part-01
let markhigherBMI=true;
var BMIofMark=80;
 var BMIofJohn=83;
 if(BMIofJohn>BMIofMark)
 {
    console.log("John BMI is higher than Mark.");
 }
 else
 {
    console.log("Mark BMI is higher than John.");
 }
//part-02

let higherBMI=true;
var MarkBMI=80;
 var JohnBMI=83;
 if(MarkBMI>JohnBMI)
 {
    let bmimark=`Mark BMI(${80}) is higher than John`;
    console.log(bmimark);
 }
 else
 {
   let bmijohn=`John BMI(${83}) is higher than Mark.`;
   console.log(bmijohn);
 }
 //Question no.2
 //part-01
 let userage=16;
 if(userage>=18)
 {
   console.log("user is eligible for vote");
 }
 else{
   console.log("user is not eligible for vote");
 }
 //part-03
 let humanage=20;
 if(humanage<=3)
 {
   console.log("user is kid.");
   
 }
 else if(humanage>=3 && humanage<=5)
 {
console.log("user is a toddler.")
 }
 else if(humanage>5 && humanage<=12)
 {
console.log("user is a child.")
 }
 else if(humanage>12 && humanage<=18)
 {
console.log("user is a teenager.")
 }
 else 
 {
console.log("user is a older.")
 }
//part-04
usernumber=0;
if(usernumber<0)
{
   console.log("number is negative");
}
else if(usernumber>0)
{
console.log("number is positive");
}
else{
   console.log("number is zero");
}
//part-02
let usergrade=prompt("Please enter your grade.");

if(usergrade=='A')

{
   console.log("Excellent");
}
else if(usergrade=='B')
{
   console.log("Great job!");
}
else if(usergrade=='C')
{
   console.log("Good job");
}
else if(usergrade=='D')
{
   console.log("Average");
}
else{
   console.log("Try hard");
}