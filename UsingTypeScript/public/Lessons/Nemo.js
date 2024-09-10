export class Nemo {
}
Nemo.IsNemoPresent = (words) => {
    for (const word of words) {
        if (word.toLowerCase() === "nemo") {
            return true;
        }
    }
    return false;
};
