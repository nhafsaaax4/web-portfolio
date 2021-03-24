//Assignment Exercise 1//
function largernumber(){
      let num1 = parseInt(prompt("Enter the first number: "));
      let num2 =  parseInt(prompt("Enter the second number: "));
      let output = ""
      if (num1 > num2){
          output = num1;
      } else if (num1 == num2){
          output = "The numbers entered are equal to.";
      } else if (num2 > num1){
          output = num2;
      } else {
          output = "Invalid Output.";
      }
      document.getElementById("assignment 1").innerHTML = output;
  }
  
  //Assignment Exercise 2//
  function signOfProduct(){
      var a = parseInt(prompt("Enter a number"));
      var b = parseInt(prompt("Enter a number"));
      var c = parseInt(prompt("Enter a number"));
      var totalProduct = a * b * c;
      if (totalProduct < 0 ){
        output = "The sign of the product is -."; 
      }
      if (totalProduct > 0 ){
        output = "The sign of the product is +.";  
      }
      document.getElementById("assignment 2").innerHTML = output;
  }
  
  //Assignment Exercise 3//
  function threeNumberSort() {
      var a = parseInt(prompt("Enter a number."));
      var b = parseInt(prompt("Enter a number."));
      var c = parseInt(prompt("Enter a number."));
      let array = [a, b, c];
      array.sort(function(a, b, c){return a - b});{
          output = "The number you entered have been ordered from from least to greatest. The order is, " + array + ".";
      }
      document.getElementById("assignment 3").innerHTML = output;
  }
  
  //Assignment Exercise 4//
  function SumOfThrees() {
      let sum = 0;
      for (let i = 0; i < 1000; i++) {
          ! (i % 3) && (sum += i)
      }
      output = "The sum of three is, " + sum + ".";
      document.getElementById("assignment 4").innerHTML = output;
  }
  
  //Assignment Exercise 5//
  function WhilesumThrees(){
      let sum = 0;
      let i = 0;
       while (i < 1000) {
           sum += i;
           i = i + 3;
       }
       output = "The while of three is, " + sum + ".";
       document.getElementById("assignment 5").innerHTML = output;
  }
  
  //Assignment Exercise 6//
  function tenFour() { 
  
    let multiples410 = 0;
     for(i = 1; i<101; i = i +1){
         if(i % 4 === 0 && i % 10 === 0){ 
            multiples410 += (' TenFour.'); 
         }
         else if(i % 4 === 0){ 
            multiples410 += (' Four.'); 
         }
         else if(i % 10 === 0){ 
            multiples410 += ('Ten.'); 
         }
         else(multiples410 += ' ' + i + ' '); 
     }
    alert (multiples410); 
    document.getElementById("assignment 6").innerHTML = output;
}
  
  //Assignment Exercise 7//
  function centuryFromYear() {
      let userYear = prompt ('Are you wondering what century any year could be in, I found a way!. Enter a year', '2021');
      let century = 0;
      century = Math.floor(userYear/100+1);
          if (toString(century)[-1] == 1){ 
      }
      output = "The year you entered is in the century of " + century + ".";
      document.getElementById("assignment 7").innerHTML = output;  
  }
  
  //Assignment Exercise 8//
  function thirdAngle() {
      alert ("Trying to calculate the missing angle of a triangle? Insert the two angles of a triangles inorder to find the third angle" );
      var a = parseInt(prompt("Enter the first angle of a triangle"));
      var b = parseInt(prompt("Enter the second angle of a triangle "));
      var totalSum = 0;
      if ((a + b) < 180){
      totalSum = 180 - (a + b); 
          alert ("The missing angle is, " + totalSum + ".");
          output = "The missing angle is, " + totalSum + ".";
      }
      else if ((a + b) > 180){
          alert ("Incorrect. Enter two angles of a triangle."); 
          output = "Incorrect. Enter two angles of a triangle.";
      }
      document.getElementById("assignment 8").innerHTML = output;  
  }

//Assignment 9
function function9() {
  alert("Assignment 9 is not completed...Please wait.");
  document.getElementById("assignment 9").innerHTML = output;
}
  
  
