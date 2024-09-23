import { BinarySearchNode } from "../../";
export class BinarySearchTree {
    constructor() {
        this.root = null;
        this.length = 0;
        this.insert = (value) => {
            const newNode = new BinarySearchNode(value);
            if (this.root === null) {
                this.root = newNode;
            }
            else {
                let holdingPointer = this.root;
                let counter = 0;
                while (counter <= this.length) {
                    if (newNode.value > holdingPointer.value) {
                        if (holdingPointer.right === null) {
                            holdingPointer.right = newNode;
                            this.length++;
                            break;
                        }
                        else {
                            holdingPointer = holdingPointer.right;
                        }
                    }
                    else {
                        if (holdingPointer.left === null) {
                            holdingPointer.left = newNode;
                            this.length++;
                            break;
                        }
                        else {
                            holdingPointer = holdingPointer.left;
                        }
                    }
                }
            }
            return this;
        };
        this.lookup = (value) => {
            if (this.length == 0)
                return null;
            let holdingPointer = this.root;
            let counter = 0;
            while (counter <= this.length) {
                if (value === (holdingPointer === null || holdingPointer === void 0 ? void 0 : holdingPointer.value)) {
                    return holdingPointer;
                }
                if (value > holdingPointer.value) {
                    holdingPointer = holdingPointer.right;
                }
                else {
                    holdingPointer = holdingPointer.left;
                }
            }
            return null;
        };
    }
    // public remove = (value: T): null | BinarySearchNode<T> => {
    //
    //     if (this.length === 0) return null;
    //
    //     if (value === this.root?.value) {
    //         let right = this.root.right;
    //         let left = this.root.left;
    //         if (right !== null) {
    //             this.root = right;
    //             if (left!==null){
    //                
    //             }
    //         }
    //
    //     }
    //
    //     let leadingPointer: null | BinarySearchNode<T> = null;
    //     let holdingPointer: null | BinarySearchNode<T> = this.root;
    //     let counter: number = 0;
    //     while (counter <= this.length) {
    //         if (value === holdingPointer?.value) {
    //
    //         }
    //     }
    // }
    traverse(node) {
        const tree = new BinarySearchNode(node.value);
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }
}
