function mergeSort(arr) {
  const length = arr.length;

  if (length <= 1) return arr;

  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    leftArr[leftIndex] < rightArr[rightIndex]
      ? sortedArray.push(leftArr[leftIndex++])
      : sortedArray.push(rightArr[rightIndex++]);
  }

  return [
    ...sortedArray,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

// TEST
a = [12, 8, 7, 14, 6, 9, 24, 45, 56, 3];

b = [1, 6, 5, 7, 4, 9, 4, 8];

c = [67, 58, 95, 12, 77, 44, 3];

d = [2, 1];

e = [0];

f = [];

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
