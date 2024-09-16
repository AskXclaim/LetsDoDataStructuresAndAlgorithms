import {Node} from "./";

export class Stack<T> {
    private top: null | Node<T> = null;
    private bottom: null | Node<T> = null;
    private length: number = 0;

    constructor() {
        // this.top = this.bottom;
    }

    public peek = (): T | null => {
        if (this.top) return this.top.value;
        return null;
    }

    public push = (value: T): Stack<T> => {
        if (!value) throw new Error("value has to be truthy");

        const newNode: Node<T> = new Node(value);
        if (this.top) {
            const holdingPointer: Node<T> = this.top;
            this.top = newNode;
            newNode.next = holdingPointer;
        } else {
            this.top = newNode;
            this.bottom = newNode;
        }
        this.length++;
        return this;
    }

    public pop = (): T | null => {
        const requireNode = this.top;
        if (requireNode) {
            this.top = requireNode?.next;
            this.length--;
            if (this.length === 0) {
                this.bottom = null;
            }
            return requireNode?.value
        }

        return null;
    }
}