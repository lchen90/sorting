function bubbleSort(array, func = null) {
  /* your code here */
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (func) {
        if (func(array[j], array[j + 1]) === 1) {
          swap(j, j + 1, array);
        }
      } else {
        if (bubbleSort.compare(j, j + 1, array)) {
          bubbleSort.swap(j, j + 1, array);
        }
      }
    }
  }
  return array;
}

bubbleSort.swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

bubbleSort.compare = (i, j, array) => {
  return array[i] > array[j];
};
