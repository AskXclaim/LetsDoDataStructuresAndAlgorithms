import {Node} from "./";

export class Queue<T> {
    private first: Node<T> | null = null;
    private last: Node<T> | null = null;
    private length: number = 0;

    public peek = (): T | null => {
        if (this.first) return this.first?.value

        return null;
    }

    public enqueue = (value: T): Queue<T> => {
        if (!value && value != 0) throw new Error("value cannot be falsy");

        const newNode: Node<T> = new Node(value);
        if (this.last) {
            this.last.next = newNode;
            this.last = newNode;
        }

        if (this.first === null) {
            this.last = newNode;
            this.first = newNode;
        }
        this.length++;
        return this;
    }

    public dequeue = (): T | null => {
        const requireNode: Node<T> | null = this.first;
        if (requireNode) {
            this.first = requireNode.next;
            this.length--;
            if (this.length === 0) {
                this.last = null;
            }
            return requireNode?.value;
        }

        return null;
    }

    public isEmpty = (): boolean => this.length === 0
}