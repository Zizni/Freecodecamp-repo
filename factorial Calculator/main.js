// 1. Declare a variable num and assign it a number between 1 and 20 (inclusive)
let num = 7; // You can change this to any number from 1 to 20

// 2. Create the factorialCalculator function
function factorialCalculator(number) {
  let result = 1; // Initialize result to 1
  // Loop from 1 to the input number (inclusive)
  for (let i = 1; i <= number; i++) {
    result *= i; // Multiply result by the current number
  }
  return result; // Return the computed factorial
}

// 3. Call the function with num and store the result
let factorial = factorialCalculator(num);

// 4. Create the formatted result message
let resultMsg = `Factorial of ${num} is ${factorial}`;

// 5. Output the message to the console
console.log(resultMsg);