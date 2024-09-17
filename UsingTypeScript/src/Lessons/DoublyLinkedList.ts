import {DoublyNode} from "./";

export class DoublyLinkedList<T> {
    private head: null | DoublyNode<T> = null;
    private tail: null | DoublyNode<T> = null;
    private length: number = 0;

    constructor(value: T) {
        this.append(value);
    }

    public append = (value: T): DoublyLinkedList<T> => {
        if (!this.isValueValid(value)) throw this.getInvalidValueError();

        const newNode: null | DoublyNode<T> = new DoublyNode(value);
        if (this.length === 0) {
            this.tail = newNode;
            this.head = this.tail;
        } else {
            newNode.previous = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }


    public prepend = (value: T): DoublyLinkedList<T> => {
        if (!this.isValueValid(value)) throw this.getInvalidValueError();
        const newNode: null | DoublyNode<T> = new DoublyNode(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head!.previous = newNode;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    public insert = (index: number, value: T): DoublyLinkedList<T> => {
        if (!this.isValueValid(value)) throw this.getInvalidValueError();

        if (index <= 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);

        const newNode = new DoublyNode(value);
        let leadingNode = this.getLeadingNode(index-1);

        newNode.next = leadingNode!.next;
        newNode.previous = leadingNode;

        this.length++;

        return this;
    }

    public remove = (index: number): DoublyLinkedList<T> => {
        if (index < 0) throw Error("index cannot be less than 0");
        if (this.length === 0) throw Error("linkedList is empty, no item to remove");
        if (index >= this.length) throw Error(
            "index cannot be greater than the number of items" +
            " contained in the LinkedList");

        if (index === 0 && this.length === 1) {
            this.instantiateHeadAndTail(null)
            this.length--;
            return this;
        }

        if (index === 0) {
            this.head = this.head!.next;
        }

        if (index > 0) {
            const leadingNode = this.getLeadingNode(index - 1);
            const nodeToDelete = leadingNode!.next;
            leadingNode!.next = nodeToDelete!.next;
        }
        this.length--;

        return this;
    }

    private isValueValid = (value: T) => value || value == 0;
    private getInvalidValueError = () => new Error("value cannot be falsy");
    private instantiateHeadAndTail = (newNode: DoublyNode<T> | null) => {
        this.head = newNode;
        this.tail = newNode;
    }
    private getLeadingNode = (index: number) => {
        let leadingNode: null | DoublyNode<T> = this.head;
        let i: number = 0;
        while (i !== index) {
            leadingNode = leadingNode!.next;
            i++;
        }
        return leadingNode;
    }
}