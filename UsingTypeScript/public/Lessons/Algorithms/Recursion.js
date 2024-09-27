const findFactorialRecursively = (number) => {
    if (number == 0)
        return number;
    if (isDecimal(number))
        return null;
    const factorialNumber = number - 1;
    if (factorialNumber <= 0) {
        return number;
    }
    return (number * findFactorialRecursively(factorialNumber));
};
const findFactorialIteratively = (number) => {
    if (number == 0)
        return number;
    if (isDecimal(number))
        return null;
    let factorialNumber = number;
    let result = 1;
    while (factorialNumber > 0) {
        result *= factorialNumber;
        factorialNumber--;
    }
    return result;
};
const isDecimal = (number) => (number - Math.floor(number)) !== 0;
const getValueOfFibonacciIndexIteratively = (index) => {
    let previous = 0;
    let current = 1;
    let result = 0;
    if (index === 0)
        return result;
    result = 1;
    while (index > 1) {
        result = previous + current;
        previous = current;
        current = result;
        index--;
    }
    return result;
};
const getValueOfFibonacciIndexRecursively = (index) => {
    if (index < 2)
        return index;
    return getValueOfFibonacciIndexRecursively(index - 1) + getValueOfFibonacciIndexRecursively(index - 2);
};
export { findFactorialRecursively, findFactorialIteratively, getValueOfFibonacciIndexIteratively, getValueOfFibonacciIndexRecursively };
