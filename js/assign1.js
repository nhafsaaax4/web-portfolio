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


  //Assignment 9//
  function encryption(){

    let plaintext = prompt('Enter a message');
    let etext = "";

    plaintext = plaintext.split(" "); //breaking words of the messgae into substrings 

    for(let i = 0; i < plaintext.length; i= i+ 1 ){ // i = 0, plaintext- variable less than number of character, '.length' returns lenght of msg user sends
        if(plaintext[i].length >= 2){
            let firstletter = plaintext[i][0]; //first letter on encrypted text = first letter of plain text
            let secondletter = plaintext[i][1] // second letter of encrypted text = second letter of plain text
            //encrypted text code "zm" , "ss" , "w"
           etext += 'zm' + (plaintext[i]).slice(1) + 'ss' + secondletter + firstletter + "w" + ' '
        }
        else {
            let firstletter = plaintext[i][0];
            etext += (plaintext[i][0]) + '9d6' + firstletter + ' '; //excrypted text= //first letter on encrypted text = first letter of plain text + "969" + "w"
        }
    }
    alert("The encrypted message is " + etext ); //output of encrypted text
    document.getElementById("assignment 9").innerHTML = teext;  
}

  //assignment 10//
  function decryption(){
    let ciphertext = prompt("Enter your encrypted text message")
    let plaintext = " "; //decrypted text
    let decrypt = " "; //letter value of encrypted text moved to the front of decrpted text
    let text= " ";
    
    ciphertext = ciphertext.split(" "); 
    for(let i = 0; i < ciphertext.length; i = i + 1){ //when i=0, length of cipertext should be less and add 1
      
        //Replacing 'zm', 'ss' , 'w', '9d6' 
        ciphertext[i] = ciphertext[i].replace(/zm/g, ""); 
        ciphertext[i] = ciphertext[i].replace(/ss/g, "");                  
        ciphertext[i] = ciphertext[i].replace(/w/g, "");                     
        ciphertext[i] = ciphertext[i].replace(/9d6/g, "");                  
    
        if(ciphertext[i].length > 2){
     decrypt = ciphertext[i].slice(-1);
     text =  (ciphertext[i]).slice(0, -2); 
    
     plaintext += decrypt + text + ' ';
        }
        //one letter words
        else {
          plaintext += ciphertext[i][0] + " ";
            }
    }
    alert('Your original message was ' +  plaintext)
    document.getElementById("assignment 9").innerHTML = plaintext;

    }
