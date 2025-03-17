/**
 * Three different implementations of a function to calculate the sum of numbers from 1 to n
 * Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER
 */

/**
 * Implementation A: Using a for loop
 * Time Complexity: O(n) - We iterate from 1 to n once
 * Space Complexity: O(1) - We only use a single variable to store the sum
 * 
 * Assumes n is small enough that the sum will be less than Number.MAX_SAFE_INTEGER
 */
function sum_to_n_a(n: number): number {
  // Input validation
  if (n < 0) return 0;
  
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Implementation B: Using the mathematical formula (n * (n + 1)) / 2
 * Time Complexity: O(1) - Constant time regardless of input size
 * Space Complexity: O(1) - We only use a single variable
 * 
 * Assumes n is small enough that the sum will be less than Number.MAX_SAFE_INTEGER
 */
function sum_to_n_b(n: number): number {
  // Input validation
  if (n < 0) return 0;
  
  return (n * (n + 1)) / 2;
}

/**
 * Implementation C: Using recursion
 * Time Complexity: O(n) - We make n recursive calls
 * Space Complexity: O(n) - The call stack grows to size n
 * 
 * Assumes n is small enough that the sum will be less than Number.MAX_SAFE_INTEGER
 * and small enough to avoid stack overflow
 */
function sum_to_n_c(n: number): number {
  // Base case and input validation
  if (n <= 0) return 0;
  
  return n + sum_to_n_c(n - 1);
}

// Example usage
console.log(sum_to_n_a(5)); // 15
console.log(sum_to_n_b(5)); // 15
console.log(sum_to_n_c(5)); // 15 