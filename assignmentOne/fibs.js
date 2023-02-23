/**
 * Using iteration, write a function fibs which takes a number and returns
 * an array containing that many numbers from the Fibonacci sequence.
 * Using an example input of 8, this method should return the array
 * [0, 1, 1, 2, 3, 5, 8, 13].
 * @param {Number} n - Integer
 * @returns {Array} Fibonacci Sequence 
 */
function fibs(n) {
  const sequence = [];
  let a = 0;
  let b = 1;

  if (n >= 0) sequence.push(a);

  if (n >= 1) sequence.push(b);

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    sequence.push(c);

    a = b;
    b = c;
  }
  return sequence;
}

const test = fibs(8);
console.log(test);
