console.log("Your Password is Generating....")
const capitalLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const simpleLetter= "abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="!@#$%&=(){}[]./?";
const characters=capitalLetter+number+symbol+simpleLetter;
//Edit Length Of Password Here
var Passlength=15;
//----------------------------
var Password="";
for(i=0;i<Passlength;i++){
    var randomPass=Math.floor(Math.random()*characters.length)
    Password+=characters.substring(randomPass,randomPass+1)
}
console.log(Password);
