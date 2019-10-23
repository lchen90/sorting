describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
  });
});

describe('MergeSort function', function() {
  it('is able to mergesort an array', function() {
    // test the merging algorithm
    expect(mergeSort([5, 4, 1, 2])).toEqual([1, 2, 4, 5]);
    expect(mergeSort([89, 23, 10, 3, 49])).toEqual([3, 10, 23, 49, 89]);
  });
});
