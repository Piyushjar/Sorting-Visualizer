function bubbleSort(array){
    const moves = [];
    for(let f=0; f<array.length; f++){
        var swapped = false;
        for(let i=1; i<array.length-f; i++){
            moves.push({indices:[i-1,i], type:"compare"});
            if(array[i-1]>array[i]){
                swapped=true;
                moves.push({indices:[i-1,i], type:"swap"});
                [array[i-1],array[i]]=[array[i],array[i-1]];
            }
        }
        if(!swapped) break;
    }
    return moves;
}

//bubble sort algorithm
// best: O(n)
// avg: O(n^2)
// worst: O(n^2)
// space: O(1)
// stability: stable