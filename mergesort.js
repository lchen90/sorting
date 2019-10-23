function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middle = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  const newArr = [];
  let i = 0;
  let j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      newArr.push(firstHalf[i++]);
    } else {
      newArr.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) {
    newArr.push(firstHalf[i++]);
  }
  while (j < secondHalf.length) {
    newArr.push(secondHalf[j++]);
  }
  return newArr;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    const [array1, array2] = split(array);
    const sortedArr1 = mergeSort(array1);
    const sortedArr2 = mergeSort(array2);
    return merge(sortedArr1, sortedArr2);
  }
}
