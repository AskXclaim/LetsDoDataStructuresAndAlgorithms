import { Node } from "./";
export class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.append = (value) => {
            if (!this.isValid(value)) {
                throw this.getInvalidValueError();
            }
            const newNode = new Node(value);
            if (this.length === 0) {
                this.instantiateHeadAndTail(newNode);
            }
            else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
        };
        this.prepend = (value) => {
            if (!this.isValid(value))
                throw this.getInvalidValueError();
            const newNode = new Node(value);
            if (this.length === 0) {
                this.instantiateHeadAndTail(newNode);
            }
            else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        };
        this.insert = (index, value) => {
            if (!this.isValid(value))
                throw this.getInvalidValueError();
            if (index <= 0)
                return this.prepend(value);
            if (index >= this.length)
                return this.append(value);
            const newNode = new Node(value);
            let leadingNode = this.getLeadingNode(index);
            newNode.next = leadingNode.next;
            leadingNode.next = newNode;
            return this;
        };
        this.remove = (index) => {
            if (index < 0)
                throw Error("index cannot be less than 0");
            if (this.length === 0)
                throw Error("linkedList is empty, no item to remove");
            if (index >= this.length)
                throw Error("index cannot be greater than the number of items" +
                    " contained in the LinkedList");
            if (index === 0) {
                this.head = this.head.next;
            }
            else {
                let leadingNode = this.getLeadingNode(index);
                const tobeDeleteNode = leadingNode.next;
                if (tobeDeleteNode === null || tobeDeleteNode === void 0 ? void 0 : tobeDeleteNode.next) {
                    leadingNode.next = tobeDeleteNode.next;
                }
                else {
                    leadingNode.next = null;
                }
            }
            this.length--;
            if (this.length === 0)
                this.instantiateHeadAndTail(null);
            return this;
        };
        this.isValid = (value) => value || value == 0;
        this.getInvalidValueError = () => new Error("value cannot be falsy");
        this.instantiateHeadAndTail = (value) => {
            this.head = value;
            this.tail = value;
        };
        this.getLeadingNode = (index) => {
            let leadingNode = null;
            for (let i = 0; i < index - 1; i++) {
                leadingNode = this.head.next;
            }
            return leadingNode;
        };
        this.append(value);
    }
}
