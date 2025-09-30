function quickSort(arr, desc = false) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const leftElements = [];
    const rightElements = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (desc) {
            if (arr[i] > pivot) {
                leftElements.push(arr[i]);
            } else {
                rightElements.push(arr[i]);
            }
        } else {
            if (arr[i] < pivot) {
                leftElements.push(arr[i]);
            } else {
                rightElements.push(arr[i]);
            }
        }
    }
    const leftSorted = quickSort(leftElements, desc);
    const rightSorted = quickSort(rightElements, desc);
    return [...leftSorted, pivot, ...rightSorted];
}

// Example usage:
const array = [3, 6, 8, 10, 1, 2, 5];
console.log(quickSort(array).join(' '));
console.log(quickSort(array, true).join(' '));

/*
I this the Quick Sort is so good, but it not stable, because the complexity can be O(n^2) in the worst case
Example for the worst case: you need to sort the array [1,2,3,4,5,6,7,8,9,10] desc
As my knowledge, the Merge Sort is stable and the complexity is O(n log n) in all cases, 
this is the reason why Merge Sort is implemented in a large number of programming languages standard libraries
*/