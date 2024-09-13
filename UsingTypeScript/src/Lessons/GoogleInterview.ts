export class GoogleInterview {
    public static DoesContainMatch(arrayOne: number[], arrayTwo: number[]): boolean {
        const uniqueSet: Set<number> = new Set();

        for (const item of arrayOne) {
            uniqueSet.add(item);
        }

        for (const item of arrayTwo) {
            if (uniqueSet.has(item)) return true;
        }

        return false;
    }
}