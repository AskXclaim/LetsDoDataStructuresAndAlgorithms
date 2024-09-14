export class Interview {
    static ReverseString(aString) {
        if (!aString)
            return aString;
        let reversedString = [];
        for (let i = aString.length - 1; i >= 0; i--) {
            reversedString.push(aString[i]);
        }
        return reversedString.toString();
    }
    static MergeArray(arrayOne, arrayTwo) {
        if (arrayOne.length == 0 && arrayTwo.length == 0)
            return arrayOne;
        let arrayOneIndex = 0;
        let arrayTwoIndex = 0;
        let arrayOneItem = arrayOne[arrayOneIndex];
        let arrayTwoItem = arrayTwo[arrayTwoIndex];
        const mergedArray = [];
        while (arrayOneItem !== undefined || arrayTwoItem !== undefined) {
            console.log(arrayOneItem === arrayTwoItem);
            if (arrayOneItem === arrayTwoItem) {
                mergedArray.push(arrayOneItem);
                arrayOneItem = arrayOne[++arrayOneIndex];
                arrayTwoItem = arrayTwo[++arrayTwoIndex];
                continue;
            }
            if (arrayTwoItem === undefined || arrayOneItem < arrayTwoItem) {
                console.log("I'm in first");
                mergedArray.push(arrayOneItem);
                arrayOneItem = arrayOne[++arrayOneIndex];
                continue;
            }
            if (arrayOneItem === undefined || arrayTwoItem < arrayOneItem) {
                console.log("I'm in second");
                mergedArray.push(arrayTwoItem);
                arrayTwoItem = arrayTwo[++arrayTwoIndex];
            }
        }
        return mergedArray;
    }
}
