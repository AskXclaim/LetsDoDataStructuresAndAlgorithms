namespace UsingCsharp.Lessons;

public static class Interview
{
    public static string ReverseString(string aString)
    {
        if (string.IsNullOrWhiteSpace(aString)) return aString;

        var reservedStringBuilder = new StringBuilder(aString.Length);

        for (var i = aString.Length - 1; i >= 0; i--)
        {
            reservedStringBuilder.Append(aString[i]);
        }

        return reservedStringBuilder.ToString();
    }

    public static int[] MergeArrays(int[] arrayOne, int[] arrayTwo)
    {
        if (arrayOne.Length == 0 || arrayTwo.Length == 0)
            return arrayOne.Length == 0 ? arrayTwo : arrayOne;
        
        var arrayOneLength = arrayOne.Length;
        var arrayTwoLength = arrayTwo.Length;
        var arrayOneIndex = 0;
        var arrayTwoIndex = 0;
        var arrayOneItem = arrayOne[arrayOneIndex];
        var arrayTwoItem = arrayTwo[arrayTwoIndex];
        var mergedArray = new int[arrayOneLength + arrayTwoLength];
        var mergedArrayIndex = 0;

        while (arrayOneIndex <= arrayOneLength - 1 || arrayTwoIndex <= arrayTwoLength - 1)
        {
            if (AreEqual(arrayOneItem, arrayTwoItem))
            {
                if (ShouldAddToArray(arrayOneIndex, arrayOneLength, arrayTwoIndex, arrayTwoLength))
                {
                    mergedArray[mergedArrayIndex] = arrayOneItem;
                    mergedArrayIndex++;
                }

                arrayOneIndex++;
                arrayTwoIndex++;

                if (ShouldAssignItem(arrayOneIndex, arrayOneLength))
                {
                    arrayOneItem = arrayOne[arrayOneIndex];
                }

                if (ShouldAssignItem(arrayTwoIndex, arrayTwoLength - 1))
                {
                    arrayTwoItem = arrayTwo[arrayTwoIndex];
                }

                continue;
            }

            if (ShouldUseArrayOneItem(arrayOneItem, arrayTwoItem, arrayOneIndex, arrayOneLength))
            {
                mergedArray[mergedArrayIndex] = arrayOneItem;
                arrayOneIndex++;
                mergedArrayIndex++;
                arrayOneItem = arrayOne[arrayOneIndex];
            }
            else
            {
                mergedArray[mergedArrayIndex] = arrayTwoItem;
                arrayTwoIndex++;
                mergedArrayIndex++;
                if (arrayTwoIndex <= arrayTwoLength - 1)
                    arrayTwoItem = arrayTwo[arrayTwoIndex];
            }
        }

        var result = GetResult(mergedArrayIndex, mergedArray);

        return result;
    }

    private static bool AreEqual(int arrayOneItem, int arrayTwoItem) =>
        arrayOneItem == arrayTwoItem;

    private static bool ShouldAddToArray(int arrayOneIndex, int arrayOneLength, int arrayTwoIndex,
        int arrayTwoLength) =>
        arrayOneIndex <= arrayOneLength - 1 && arrayTwoIndex <= arrayTwoLength - 1;

    private static bool ShouldAssignItem(int index, int arrayLength) =>
        index <= arrayLength - 1;

    private static bool ShouldUseArrayOneItem(int arrayOneItem, int arrayTwoItem, int arrayOneIndex,
        int arrayOneLength) =>
        arrayOneItem < arrayTwoItem && arrayOneIndex <= arrayOneLength - 1;

    private static int[] GetResult(int mergedArrayIndex, int[] mergedArray)
    {
        var result = new int[mergedArrayIndex];
        for (var i = 0; i < mergedArrayIndex; i++)
        {
            result[i] = mergedArray[i];
        }

        return result;
    }
}