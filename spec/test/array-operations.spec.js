import { purchaseItem } from "../../src/app/array-operations.js"
describe('Test Array Operations', () => {
    it('Check if item is available in list', () => {
        expect(purchaseItem('Headphone')).toEqual('Item is now added in purchased list');
    });

    it('Check if item is already available', () => {
        expect(purchaseItem('Trolly Bag')).toEqual('Item is already purchased');
    });
})