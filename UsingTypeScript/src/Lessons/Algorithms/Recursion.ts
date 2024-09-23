const findFactorialRecursively = (number: number): number | null => {
    if (number == 0) return number;
    if (isDecimal(number)) return null;
    const factorialNumber:number = number - 1;
    if (factorialNumber <= 0) {
        return number;
    }
    return (number * findFactorialRecursively(factorialNumber)!);
}

const findFactorialIteratively = (number: number): number | null => {
    if (number == 0) return number;
    if (isDecimal(number)) return null;
    let factorialNumber:number = number;
    let result = 1;
    while (factorialNumber > 0) {
        result *= factorialNumber;
        factorialNumber--;
    }
    return result;
}
const isDecimal = (number: number) =>
    (number - Math.floor(number)) !== 0;

export {findFactorialRecursively, findFactorialIteratively};