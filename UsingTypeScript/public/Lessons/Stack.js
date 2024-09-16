import { Node } from "./";
export class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.peek = () => {
            if (this.top)
                return this.top.value;
            return null;
        };
        this.push = (value) => {
            if (!value)
                throw new Error("value has to be truthy");
            const newNode = new Node(value);
            if (this.top) {
                const holdingPointer = this.top;
                this.top = newNode;
                newNode.next = holdingPointer;
            }
            else {
                this.top = newNode;
                this.bottom = newNode;
            }
            this.length++;
            return this;
        };
        this.pop = () => {
            const requireNode = this.top;
            if (requireNode) {
                this.top = requireNode === null || requireNode === void 0 ? void 0 : requireNode.next;
                this.length--;
                if (this.length === 0) {
                    this.bottom = null;
                }
                return requireNode === null || requireNode === void 0 ? void 0 : requireNode.value;
            }
            return null;
        };
        // this.top = this.bottom;
    }
}
