export class BinarySearchNode<T> {
    public left: BinarySearchNode<T> | null = null;
    public right: BinarySearchNode<T> | null = null;
    
    constructor(public readonly value:T) {
    }
}