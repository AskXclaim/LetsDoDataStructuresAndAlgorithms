import { Node } from "./";
export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
        this.peek = () => {
            var _a;
            if (this.first)
                return (_a = this.first) === null || _a === void 0 ? void 0 : _a.value;
            return null;
        };
        this.enqueue = (value) => {
            if (!value && value != 0)
                throw new Error("value cannot be falsy");
            const newNode = new Node(value);
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
        };
        this.dequeue = () => {
            const requireNode = this.first;
            if (requireNode) {
                this.first = requireNode.next;
                this.length--;
                if (this.length === 0) {
                    this.last = null;
                }
                return requireNode === null || requireNode === void 0 ? void 0 : requireNode.value;
            }
            return null;
        };
        this.isEmpty = () => this.length === 0;
    }
}
