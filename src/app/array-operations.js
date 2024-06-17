
// Initialize Array of items
let  purchasedItems = ['Trolly Bag', 'Pendrive', 'Hard Disk', 'Laptop', 'Mobile'];

// Function to check if item is available in list
export function purchaseItem(item) {
    if(purchasedItems.indexOf(item) >= 0) {
        return 'Item is already purchased';
    }
    else {
        purchasedItems.push(item);
        return 'Item is now added in purchased list';
    }
 }

 // Print purchased items list
export function showPurchasedItems() {
    console.log(purchasedItems);
 }
