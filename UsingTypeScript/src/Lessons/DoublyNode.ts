export class DoublyNode<T> {
    public next: null | DoublyNode<T> = null;
    public previous: null | DoublyNode<T> = null;

    constructor(public readonly value: T) {
    }

}