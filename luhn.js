'use strict';

const luhn = function(input){
  console.log(`Account Number: ${input}`);

  const accountStr = input.toString();
  let arr = [];
  let even = true;
  let sum = 0;
  let lastDigit = accountStr[accountStr.length - 1];
  console.log(`Last Digit: ${lastDigit}`);

  // From the rightmost digit, which is the check digit, moving left, double the value of every second digit;
  for(let i = accountStr.length - 2; i >= 0; i--){
    let add = Number(accountStr[i]);
    if(even){
      add = Number(accountStr[i]) * 2;
    }
    arr.push(add);
    even = !even;
  }
  arr = arr.reverse();
  console.log(`Double every other: ${arr}`);

  // If the product of this doubling operation is greater than 9, subtract 9 from the product;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 9){
      arr[i] = arr[i] - 9;
    }
  }
  console.log(`Sum digits: ${arr}`);

  // Take the sum of all the digits;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  console.log(`Sum: ${sum}`);

  // If the total modulo 10 is equal to 0 (if the total ends in zero)
  // then the number is valid according to the Luhn formula; else it is not valid.
  // if(sum % 10 == 0){
  //   console.log("=> valid");
  // }
  // else{
  //   console.log("=> invalid");
  // }
  let mult9 = sum * 9;
  let a = mult9.toString();
  let checkSum = a[a.length-1];
  console.log(checkSum);

  if(lastDigit === checkSum){
    console.log("==> valid");
  }
  else{
    console.log("==> invalid");
  }
}



const accountNumber = 79927398713;
const accountNumber2 = 79927398710;
luhn(accountNumber);
