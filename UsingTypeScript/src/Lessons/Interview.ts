export class Interview {

    public static ReverseString(aString: string): string {
        if (!aString) return aString;

        let reversedString = [];

        for (let i = aString.length - 1; i >= 0; i--) {
            reversedString.push(aString[i]);
        }

        return reversedString.toString();
    }
}