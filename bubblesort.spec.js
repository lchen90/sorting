describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts correctly', function() {
    expect(bubbleSort([3, 1, 5])).toEqual([1, 3, 5]);
  });
  beforeEach(function() {
    spyOn(bubbleSort, 'compare').and.callThrough(); //
    spyOn(bubbleSort, 'swap').and.callThrough(); //
  });
  it('calls compare 10 times and swap 2 times', function() {
    bubbleSort([2, 6, 1, 10, 80]);
    expect(bubbleSort.compare.calls.count()).toEqual(10);
    expect(bubbleSort.swap.calls.count()).toEqual(2);
  });
});
