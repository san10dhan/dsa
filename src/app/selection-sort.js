const arrForSelectionSort = [-2, -1, 34, 5, 2, 78, 1, 45];

// logic step1: start with index 0; step2: assume the no is smallest; compare with all other elements;
// if any other small no found swap

export function selectionSort(arr) {
    for(let i=0; i< arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) indexOfMin = j;
        }
        if(indexOfMin !== i) {
            [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]]
        }
    }
    return arr;
}