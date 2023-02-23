/**
 * Using recursion, write a function fibsRec which takes a number and returns
 * an array containing that many numbers from the Fibonacci sequence.
 * Using an example input of 8, this method should return the array
 * [0, 1, 1, 2, 3, 5, 8, 13].
 * This can be done in a couple of line of code (or 1 if you are crazy, but
 * don't consider either of these lengths a requirement... just get it done).
 * @param {Number} n - Integer
 * @returns {Array} Fibonacci Sequence
 */
function fibsRec(n, arr = [0, 1]) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  return arr.length >= n
    ? arr
    : fibsRec(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
}

const test = fibsRec(8);
console.log(test);
