// algoritmos.js

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

function sum(numbers) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  return total;
}

function fibonacci(n) {
  const sequence = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  
  return sequence[n];
}

function gcd(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  
  return a;
}

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const pivot = array[Math.floor(array.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];
  
  for (let element of array) {
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }
  
  return [...quicksort(less), ...equal, ...quicksort(greater)];
}

function countIntegersInRange(numbers, N) {
  let count = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= numbers[0] && numbers[i] <= N) {
      count++;
    }
  }
  
  return count;
}

module.exports = {
  isPrime,
  sum,
  fibonacci,
  gcd,
  quicksort,
  countIntegersInRange
};