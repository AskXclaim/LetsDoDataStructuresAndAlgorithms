export class Interview {

    public static ReverseString(aString: string): string {
        if (!aString) return aString;

        let reversedString = [];

        for (let i = aString.length - 1; i >= 0; i--) {
            reversedString.push(aString[i]);
        }

        return reversedString.toString();
    }

    public static MergeArray(arrayOne: number[], arrayTwo: number[]): number[] {
        if (arrayOne.length == 0 && arrayTwo.length == 0) return arrayOne;

        let arrayOneIndex: number = 0;
        let arrayTwoIndex: number = 0;
        let arrayOneItem: number | undefined = arrayOne[arrayOneIndex];
        let arrayTwoItem: number | undefined = arrayTwo[arrayTwoIndex];
        const mergedArray: number[] = [];

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