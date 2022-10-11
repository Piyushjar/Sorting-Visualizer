function insertionSort(array) {
    const moves = [];
    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i];
      let j=i-1;
      moves.push({indices:[i,j], type:"compare"});
      while (j >= 0 && array[j] > currentValue) {
        moves.push({indices:[j+1,j], type:"swap"});
        array[j + 1] = array[j];
        j -= 1;
      }
      array[j + 1] = currentValue;
    }
    return moves;
}

//insertion sort algorithm
// best: O(n)
// avg: O(n^2)
// worst: O(n^2)
// space: O(1)
// stability: stable