//Assignment 1
function largerNumber() {
  let num1 = parseInt(prompt('Insert an number! :'))
  let num2 = parseInt(prompt('Insert another number to find out which one is larger!'))

  if (num1 > num2) {
    return alert('If the calculations are correct, ' + num1 + ' is larger!');
  } else if (num2 > num1) {
    return alert('If the calculations are correct, ' + num2 + ' is larger!');
  } else if (num1 == num2) {
    return alert('If the calculations are correct, it seems as if ' + num1 + ' and ' + num2 + ' are the same!');
  } else {
    alert('Please enter 2 numbers!');
  }
};

//Assignment 2
function signOfProduct() {
  let numSign = parseInt(prompt('Let\'s find the sign of a product! Enter a number', '0'));
  let numSign2 = parseInt(prompt('Enter another number', '0'));
  let numSign3 = parseInt(prompt('Enter one last number', '0'));
  if (numSign * numSign2 * numSign3 > 0) {
    return alert('The sign for the product of ' + numSign + ' ,' + numSign2 + ' and ' + numSign3 + ' is positive')

  } else if (numSign * numSign2 * numSign3 < 0) {
    return alert('The sign for the product of ' + numSign + ' ,' + numSign2 + ' and ' + numSign3 + ' is negative')
  } else {
    return alert('Please enter 3 numbers')
  }
}

//Assignment 3
function threeNumberSort() {

  let num1 = parseInt(prompt('Let\'s sort some numbers! Enter a number!'));
  let num2 = parseInt(prompt('Enter another number!'));
  let num3 = parseInt(prompt('Enter one last number!'));

  let numSort = [num1, num2, num3];
  numSort.sort(function(a, b) {
    return a - b
  })
  return alert('These are the numbers you have entered from least to greatest: ' + numSort);
}

//Assignment 4
function SumOfThrees() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
      ! (i % 3) && (sum += i)
  }
  output = "The sum of three is, " + sum + ".";
  document.getElementById("SumThree").innerHTML = output;
}

//Assignment 5
function WhileThrees(){
  let sum = 0;
  let i = 0;
   while (i < 1000) {
       sum += i;
       i = i + 3;
   }
   output = "The while of three is, " + sum + ".";
   document.getElementById("WhileThree").innerHTML = output;
}

//Assignment 6
function tenFour() {
  let multiples410 = 0;
   for(i = 1; i<101; i = i +1){
       if(i % 4 === 0 && i % 10 === 0){
          multiples410 += (' TenFour, ');
       }
       else if(i % 4 === 0){
          multiples410 += (' Four, ');
       }
       else if(i % 10 === 0){
          multiples410 += ('Ten, ');
       }
       else(multiples410 += ' ' + i + ' ');
   }
  alert (multiples410);
}

//Assignment 7
function centuryFromYear() {
  let userYear = prompt(' Enter a year and find out what century is any year in!', '2020');
  let century = 0;

  century = Math.floor(userYear / 100 + 1);
  if (toString(century)[-1] == 1) {
    century = toString(century) + 'st'
  }

  return alert('The year you entered is in the century of ' + century);
}

//Assignment 8
function thirdAngle() {

  let angle1 = parseInt(prompt('Finding an angle for a triangle may be hard. Let\'s find the missing angle for a triangle together! Enter an angle'));
  let angle2 = parseInt(prompt('Enter another second angle'));

  let totalAngle = angle1 + angle2;

  if (totalAngle < 180) {
    let missingAngle = 180 - totalAngle;

    return alert('The missing angle is ' + totalAngle);
  } else if (totalAngle > 180) {
    return alert('The angles in a triangle add up to 180. The angles you entered are larger than 180!')
  } else {
    alert('Please enter valid angles.')
  }
}

//Assignment 9
function function9() {
  alert("Assignment 9 is not completed...Please wait.");
}
  
  
