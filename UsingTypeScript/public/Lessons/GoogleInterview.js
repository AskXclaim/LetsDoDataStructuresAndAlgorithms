export class GoogleInterview {
    static DoesContainMatch(arrayOne, arrayTwo) {
        const uniqueSet = new Set();
        for (const item of arrayOne) {
            uniqueSet.add(item);
        }
        for (const item of arrayTwo) {
            if (uniqueSet.has(item))
                return true;
        }
        return false;
    }
}
