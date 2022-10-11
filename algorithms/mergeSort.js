const moves = [];

//in-place merge sort 'gfg'
function merge(arr, start, mid, end)
{
    let start2 = mid + 1;

    // If the direct merge is already sorted
    if (arr[mid] <= arr[start2]) 
    {
        moves.push({indices:[mid,start2], type:"compare"});
        return;
    }
  
    // Two pointers to maintain start
    // of both arrays to merge
    while (start <= mid && start2 <= end)
    {
          
        // If element 1 is in right place
        if (arr[start] <= arr[start2])
        {
            moves.push({indices:[start,start2], type:"compare"});
            start++;
        }
        else 
        {
            let value = arr[start2];
            let index = start2;
  
            // Shift all the elements between element 1
            // element 2, right by 1.
            while (index != start) 
            {
                moves.push({indices:[index,index-1], type:"swap"});
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
  
            // Update all the pointers
            start++;
            mid++;
            start2++;
        }
    }
}

function mergeSortRec(array,low,high) {
    // Base case
    if (low >= high) return ;
    let mid = low + Math.floor((high-low) / 2);
    // Recursive calls
    moves.push({indices:[low,mid], type:"compare"});
    mergeSortRec(array, low, mid);
    moves.push({indices:[mid+1,high], type:"compare"});
    mergeSortRec(array, mid+1 ,high);
    merge(array,low,mid,high);
    
}

function mergeSort(array){
   mergeSortRec(array,0,array.length-1);
   return moves;
}

//merge sort algorithm
// best: O(nlogn)
// avg: O(nlogn))
// worst: O(nlogn)
// space: O(1) because this one is in-inplace 
// stability: stable