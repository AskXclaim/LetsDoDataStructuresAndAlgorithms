export class BubbleSort {
    static sort(items) {
        if (items === null || items === undefined || items.length === 0 || items.length === 1) {
            return items;
        }
        const sortedItems = [...items];
        for (let i = 0; i < sortedItems.length - 1; i++) {
            for (let j = 0; j < sortedItems.length - 1; j++) {
                if (sortedItems[j] > sortedItems[j + 1]) {
                    let holder = sortedItems[j];
                    sortedItems[j] = sortedItems[j + 1];
                    sortedItems[j + 1] = holder;
                }
            }
        }
        return sortedItems;
    }
}
