function mergeSort(arr) {
  if (arr.length < 1) {
    console.log("This array is empty");
    return;
  }

  if (!Array.isArray(arr)) {
    console.log("Please enter an array");
    return;
  }

  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArray = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

// TEST
a = [12, 8, 7, 14, 6, 9, 24, 45, 56, 3];

b = [1, 6, 5, 7, 4, 9, 4, 8];

c = [67, 58, 95, 12, 77, 44, 3];

d = [2, 1];

e = [0];

f = [];

g = {
  name: "John",
  age: 21,
};

const resultA = mergeSort(a);
if (resultA)
  console.log(`Test 1. Array = [ ${a} ] - Sorted Array = [ ${resultA} ]`);
const resultB = mergeSort(b);
if (resultB)
  console.log(`Test 2. Array = [ ${b} ] - Sorted Array = [ ${resultB} ]`);
const resultC = mergeSort(c);
if (resultC)
  console.log(`Test 3. Array = [ ${c} ] - Sorted Array = [ ${resultC} ]`);
const resultD = mergeSort(d);
if (resultD)
  console.log(`Test 4. Array = [ ${d} ] - Sorted Array = [ ${resultD} ]`);
const resultE = mergeSort(e);
if (resultE)
  console.log(`Test 5. Array = [ ${e} ] - Sorted Array = [ ${resultE} ]`);
const resultF = mergeSort(f);
if (resultF)
  console.log(`Test 6. Array = [ ${f} ] - Sorted Array = [ ${resultF} ]`);
const resultG = mergeSort(g);
if (resultG)
  console.log(`Test 7. Array = [ ${g} ] - Sorted Array = [ ${resultG} ]`);
