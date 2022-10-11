function selectionSort(array) {
    const moves = [];
    for (let i = 0; i < array.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < array.length; j++) {
        moves.push({indices:[lowest,j], type:"compare"});
        if (array[j] < array[lowest]) {
          lowest = j;
        }
      }
      if (lowest !== i) {
        // Swap
        moves.push({indices:[lowest,i], type:"swap"});
        [array[i], array[lowest]] = [array[lowest], array[i]];
      }
    }
    return moves;
}

//selection sort algorithm
// best: O(n^2)
// avg: O(n^2)
// worst: O(n^2)
// space: O(1)
// stability: unstable