import { purchaseItem, showPurchasedItems } from "../dsa-using-javascript/src/app/array-operations.js";
import { bubbleSort } from "./src/app/bubble-sort.js";
import { selectionSort } from "./src/app/selection-sort.js";


console.log(bubbleSort([10, 3, 5, 1, 93, 43, 68, 6, 9, -1]));
console.log(selectionSort([10, 3, 5, 1, 93, 43, 68, 6, 9, -1]));

console.log(purchaseItem('Headphones'));
showPurchasedItems();