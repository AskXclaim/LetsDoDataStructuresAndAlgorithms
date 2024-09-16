export class Node<T> {
    public next: null | Node<T> = null;
    constructor(public readonly value : T) {
    }
}