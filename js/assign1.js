//Assignment Exercise 1//
function largernumber(){
      //Get an input from users
      let num1 = parseInt(prompt("Enter the first number: "));
      let num2 =  parseInt(prompt("Enter the second number: "));
      let output = ""

      if (num1 > num2){ //If number 1> number 2 
          output = num1; //then output to user number 1 is bigger
      } else if (num1 == num2){
          output = "The numbers entered are equal to.";
      } else if (num2 > num1){ //if number 2>1 
          output = num2; //then output to user number 2 is bigger
      } else {
          output = "Invalid Output."; //numbers are the same = output  invalid
      }
      document.getElementById("assignment 1").innerHTML = output;
  }
  
  //Assignment Exercise 2//
  function signOfProduct(){
    //Input from the user
      var a = parseInt(prompt("Enter a number"));
      var b = parseInt(prompt("Enter a number"));
      var c = parseInt(prompt("Enter a number"));
      var totalProduct = a * b * c; //multiply to see the sign of the number
      if (totalProduct < 0 ){ //greater than 0 = output negative
        output = "The sign of the product is -."; 
      }
      if (totalProduct > 0 ){ // less than 0 = output positive
        output = "The sign of the product is +.";  
      }
      document.getElementById("assignment 2").innerHTML = output;
  }
  
  //Assignment Exercise 3//
  function threeNumberSort() {
    //declared the variable for prompt outputs
      var a = parseInt(prompt("Enter a number."));
      var b = parseInt(prompt("Enter a number."));
      var c = parseInt(prompt("Enter a number."));
      let array = [a, b, c]; //array the numbers
      array.sort(function(a, b, c){return a - b});{// '.sort' to sort the function from least to greatest
          output = "The number you entered have been ordered from from least to greatest. The order is, " + array + ".";
      }
      document.getElementById("assignment 3").innerHTML = output;
  }
  
  //Assignment Exercise 4//
  function SumOfThrees() {
      let sum = 0; // variable sum is equal to 0
      //created a loop
      for (let i = 0; i < 1000; i++) {
          ! (i % 3) && (sum += i) 
      }
      output = "The sum of three is, " + sum + "."; // i less then 1000, number outputted to user
      document.getElementById("assignment 4").innerHTML = output;
  }
  
  //Assignment Exercise 5//
  function WhilesumThrees(){ 
      //while loop- both i and sum is set to 0
      let sum = 0;
      let i = 0;
       while (i < 1000) { // i is less than 1000
           sum += i; // i should add to sum
           i = i + 3;// but i should add 3 everytime
       }
       output = "The while of three is, " + sum + "."; // once reached to 1000, number it outputted to used
       document.getElementById("assignment 5").innerHTML = output;
  }
  
  //Assignment Exercise 6//
  function tenFour() {
    //For Loop
    for (let i = 1; i <= 100; i++) {// i= 1, 1 should be less than 100
  
      if (i % 4 === 0 && i % 10 === 0) {// i divisble by 4 and 10- it says TenFour
        console.log("TenFour!");
      } else if (i % 4 === 0) { // disivible by 4 output Four
        console.log("Four");
      } else if (i % 10 === 0) { // divisible by 10 output ten
        console.log("Ten");
      } else {
        console.log(i);// when not divisible by anything, number shows
      }
    }
    document.getElementById("assignment 6").innerHTML = output;
  }


  //Assignment Exercise 7//
  function centuryFromYear() {
      let userYear = prompt ('Are you wondering what century any year could be in, I found a way!. Enter a year', '2021'); // asking for an input of a century
      let century = 0; // variable century equals to 0
      century = Math.floor(userYear/100+1); // mathfloor get rid of decimals allowing full numbers to appear
          if (toString(century)[-1] == 1){ 
      }
      output = "The year you entered is in the century of " + century + ".";
      document.getElementById("assignment 7").innerHTML = output;  
  }
  
  //Assignment Exercise 8//
  function thirdAngle() { 

    alert (" Trying two find an angle with two given angles. Insert two angles of a triangle and the function will return the third angle, totaling to 180°." );
    let a = parseInt(prompt("Enter the first angle")); // enter an angle
    let b = parseInt(prompt("Enter the second angle")); // enger an angle
    let totalSum = 0;
    if ((a + b) < 180){ //angle add upto more than 180 = no triable
    totalSum = 180 - (a + b); //180 subtracted by the to inputted angles
        output = "The angle that is missing is, " + totalSum + "."; 
    }
    else if ((a + b) > 180){ //add upto less than 180 = angle being calculated
        output = "Invalid. Please enter two angles of a triangle."; 
    }
    document.getElementById("assignment 8").innerHTML = output;  
}

//Assignment Exercise 9//
  function encryption() {
    let plaintext = prompt ("Please enter a message:"); // enter message
    let ciphertext = ("");
    plaintext = plaintext.split(); //breaks word into array or substrings
    for(let i = 0; i < plaintext.length; i = i + 1) {  // i = 0, plaintext- variable less than number of character, '.length' returns lenght of msg user sends
        firstletter = ((plaintext[i][0]).replace("", "zm")).toUpperCase(); // uppercases of the first letter in word has a 'zm' between them first and second letter
        lastletter = (((plaintext[i]).slice(-1)).toUpperCase()).replace("", "w"); // uppercase in the last letter of the word is followed by a ‘w’ in front of it
        ciphertext += "ss" + (plaintext[i]).slice(1, -1) + firstletter + lastletter + "ss" ; // ‘ss' to the first and last letter of the changed word.

    }
    document.getElementById("assignment 9").innerHTML = ciphertext;  
    alert("Your encrypted message is: " + ciphertext) // alert to display given msg
}

//Assignment Exercise 10//
function decryption(){
  let ciphertext = prompt ("Enter your encrypted message:"); //user inputs the encrypted message
  let plaintext = ""; //empty variable called plain text
  ciphertext = ciphertext.split(""); 
  for(let i = 0; i < ciphertext.length; i = i + 1) {  //when i=0, length of cipertext should be less and add 1
      firstletter = ((ciphertext[i]).slice(-newFunction(), -4)); //new variable... slices numbers from decrypted messages and makes it lowercase.
      lastletter = ((ciphertext[i]).toLowerCase().slice(-3, -2)); //new variable...slices cipertext and makes ir lowercase
      plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; 
  }
  document.getElementById("assignment 10").innerHTML = plaintext; 

  }
