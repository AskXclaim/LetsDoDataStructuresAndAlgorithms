import {Node} from "./";

export class LinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    constructor(value: T) {
        this.append(value);
    }

    public append = (value: T): LinkedList<T> => {
        if (!this.isValid(value)) {
            throw this.getInvalidValueError();
        }
        const newNode: Node<T> = new Node(value);
        if (this.length === 0) {
            this.instantiateHeadAndTail(newNode);
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }


    public prepend = (value: T): LinkedList<T> => {
        if (!this.isValid(value)) throw this.getInvalidValueError();

        const newNode: Node<T> = new Node(value);
        if (this.length === 0) {
            this.instantiateHeadAndTail(newNode);
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    public insert = (index: number, value: T): LinkedList<T> => {
        if (!this.isValid(value)) throw this.getInvalidValueError();

        if (index <= 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        const newNode: Node<T> = new Node(value);
        let leadingNode = this.getLeadingNode(index);
        newNode.next = leadingNode!.next;
        leadingNode!.next = newNode;

        return this;
    }
    public remove = (index: number): LinkedList<T> => {
        if (index < 0) throw Error("index cannot be less than 0");
        if (this.length === 0) throw Error("linkedList is empty, no item to remove");
        if (index >= this.length) throw Error(
            "index cannot be greater than the number of items" +
            " contained in the LinkedList");
        if (index === 0) {
            this.head = this.head!.next;
        } else {
            let leadingNode = this.getLeadingNode(index);
            const tobeDeleteNode = leadingNode!.next;
            if (tobeDeleteNode?.next) {
                leadingNode!.next = tobeDeleteNode.next
            } else {
                leadingNode!.next = null;
            }
        }
        this.length--;
        if (this.length === 0) this.instantiateHeadAndTail(null);

        return this;
    }

    private isValid = (value: T) => value || value == 0;
    private getInvalidValueError = () => new Error("value cannot be falsy");
    private instantiateHeadAndTail = (value: Node<T> | null) => {
        this.head = value;
        this.tail = value;
    }
    private getLeadingNode = (index: number) => {
        let leadingNode: null | Node<T> = null;
        for (let i = 0; i < index - 1; i++) {
            leadingNode = this.head!.next;
        }
        return leadingNode;
    }
}