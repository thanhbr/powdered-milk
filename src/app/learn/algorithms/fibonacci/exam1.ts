// Problem: Give a number "n", find the first "n" elements of
// the Fibonacci sequence. In mathematics, the Fibonacci sequence
// is a sequence in which each number is the sum of the two preceding ones.

// This first two numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]


function fibonacci(num) {
  const fib = [0, 1]
  for(let i = 2; i < num; i++) {
    fib[i] = fib[i-1] + fib[i-2]
  }
  return fib;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]


// Iterative Fibonacci: This function calculates the Fibonacci number
// using an iterative approach, typically using a loop or memoization
// to avoid repeated calculations.

function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  } else {
    let previous = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
      const next = previous + current;
      previous = current;
      current = next;
    }
    return current;
  }
}

// Kiểm tra có phải số fibonacci không
function isFibonacci(n) {
  if (n == 0 || n == 1) {
    return true;
  }

  let a = 0;
  let b = 1;
  let current;

  while (current <= n) {
    current = a + b;
    if (current == n) {
      return true;
    }
    a = b;
    b = current;
  }

  return false;
}

console.log('[1] isFibonacci', isFibonacci(1));
console.log('[20] isFibonacci', isFibonacci(20));
