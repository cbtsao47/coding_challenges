// factorials
function iterativeFactorial(n) {
  let answer = 1;
  for (let i = n; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

function recursiveFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// fibonacci sequence
// 1 1 2 3 5 8
function fibIterative(index) {}
function fibRecursive(index) {
  if (index <= 2) {
    return index;
  }
  return fibRecursive(index - 1) + fibRecursive(index - 2);
}
