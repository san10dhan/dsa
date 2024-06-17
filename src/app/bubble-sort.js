// const initializedArray = [10, 3, 5, 1, 93, 43, 68, 6, 9, -1];

export function bubbleSort(initializedArray) {
    let flag = 0;
    for (let i=0; i<initializedArray.length-1; i++) {
        for(let j=0; j< initializedArray.length-1-i; j++) {
            if(initializedArray[j] > initializedArray[j+1]) {
                [initializedArray[j+1], initializedArray[j]] = [initializedArray[j], initializedArray[j+1]];
                flag = 1;
            }
        }
        if(flag === 0) {
            break;
        }
    }
    return initializedArray;
}