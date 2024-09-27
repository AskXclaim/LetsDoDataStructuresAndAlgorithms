export class SelectionSort {

    public static sort<T>(items: T[]): T[] {
        if (items === null || items === undefined || items.length === 0 || items.length === 1) {
            return items;
        }

        const arrayLength = items.length;
        const sortedItems: T[] = [...items];
        let leastItemIndex = 0;
        let leastItem = sortedItems[0];
        for (let i = 0; i < arrayLength; i++) {
            leastItem = sortedItems[i]
            leastItemIndex = i;
            for (let j = i + 1; j < arrayLength; j++) {
                if (sortedItems[j] < leastItem) {
                    leastItem = sortedItems[j]
                    leastItemIndex = j;
                }
            }
            sortedItems[leastItemIndex] = sortedItems[i];
            sortedItems[i] = leastItem;

            console.log(sortedItems);
        }
        return sortedItems;
    }
}