// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd

// var firstnumber=1024 
// var secondnumber=128 
// var SUBTRACTION=1024-128
//  console.log(SUBTRACTION);
// function divisionnumber(number1,number2){
// var result=number1/number2;
// return result;
// }
// var devisionResult=(1024,128);

// document.getElementById("color_button").onclick= function(){
//  document.getElementById("color_button2").style.background="red";
//  document.getElementById("color_button2").style.display="inline";
//  document.getElementById("crossButton").style.display="inline";
// }
// document.getElementById("crossButton").onclick=function(){
//     document.getElementById("color_button2").style.display="none";
//     document.getElementById("crossButton").style.display="none";
// }
// var clickButton = document.getElementById("color_button");
// var showButton = document.getElementById("hide");

// clickButton.onclick = function () {
//     document.getElementById('box2').classList.add("show")
// document.getElementById('box2').classList.toggle("show")

// showButton.onclick = function () {
//     document.getElementById("box2").classList.remove("show")
// }
var submitButton = document.getElementById('submit');
var nameValue = document.getElementById('name');

var displayText = document.getElementById('ghj')

  submitButton.onclick = function (e)  {
    e.preventDefault();
    // var value=nameValue.value;
    displayText.textContent = nameValue.value
    console.log(nameValue.value);
}