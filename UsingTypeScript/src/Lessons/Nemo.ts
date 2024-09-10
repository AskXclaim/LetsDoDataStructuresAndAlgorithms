export class Nemo {
    public static readonly IsNemoPresent = (words: string[]): boolean => {
        for (const word of words) {
            if (word.toLowerCase() === "nemo") {
                return true;
            }
        }
        return false;
    }
}