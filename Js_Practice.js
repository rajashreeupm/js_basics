//1. Function to count character of a string
function countChar(str)
{
    var count = str.length;
     return count;
}

var str1 = "Count me please!";
console.log(countChar(str1)); 
// Output: 16

//2. function to return largest of 2 numbers
function findLargest(num1,num2)
{
    if (num1>num2)
    {
        return num1;
    }
    else{
        return num2;
    }
}
var a=20;
var b=30;
console.log("The largest of "+a+" and "+b+" is: " +findLargest(a,b))
//Output: The largest of 20 and 30 is: 30

//3. return boolean for number b/w 5000 and 9999
function findBool(number)
{
    if(number>=5000 && number<=9999)
    {
        return true;
    }
    else
    {
        return false;
    }
}
var num = 6000;
console.log("Does the number "+num+" is between 5000 and 9999 ? "+findBool(num))
//Output: Does the number 6000 is between 5000 and 9999 ? true

//4. find cube root of a number
function findCubeRoot(cubeRt)
{
    return Math.cbrt(cubeRt);
}
console.log("The cube root of this number is " +findCubeRoot(64))
//The cube root of this number is 4

//5. convert inches to feet
function inToFt (inch)
{
    var ft = inch/12;
    return ft;
}
console.log("The Measurement in feet is: "+inToFt(67))
// Output: The Measurement in feet is: 5.583333333333333

//6. Degrees to Farenheit
function cToF(C)
{
    F=(C*1.8) + 32;
    return F;
}
var cel = 25;
console.log( +cel+" degree Celcius in Farenheit is: "+cToF(cel)+" F")
//Output: 25 degree Celcius in Farenheit is: 77 F

//7. Covert kg to lb and viceversa
function kgToLb(kg)
{
    var lb= kg*2.2;
    return lb;
}
function lbToKg(lb)
{
    var kg = lb/2.2;
    return kg;
}
var weight = 50;
    console.log(weight+" kg in pounds is "+kgToLb(weight)+" lbs")
    console.log(weight+" lbs in kilogram is "+lbToKg(weight)+" kg")
/* 
 Output: 50 kg in pounds is 110.00000000000001 lbs
         50 lbs in kilogram is 22.727272727272727 kg */

//8. **States with properties** Json file created states.json

//9. **NFL Team details using objects** Json File created NFL_Team.json

//10. Find longest string
function findLong(str1,str2)
{
    var len1= str1.length;
    var len2= str2.length;
    if(len1>len2)
    {
        console.log("The longest string is \" "+str1+" \"");
    }
    else
    {
        console.log("The longest string is \" "+str2+" \"")
    }

}
findLong('Hello!','Welcome');
//Output: The longest string is " Welcome "

//11. String of shortest length from an array

var arrayList  = ["Elements", "Console", "Sources", "Performance", "Network", "Memory"];
var shortest_string =   arrayList.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
})


console.log(shortest_string);