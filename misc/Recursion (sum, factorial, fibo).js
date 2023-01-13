// sumTo: recursion vs iterative vs progression
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

function sumTo2(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

//factorial
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

//Fibonacci: recursion vs iterative
function fibo(n) {
  if (n <= 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function fibo2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
