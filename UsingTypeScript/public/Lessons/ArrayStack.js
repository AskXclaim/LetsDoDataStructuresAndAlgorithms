export class ArrayStack {
    constructor() {
        this.data = [];
        this.length = 0;
        this.peek = () => {
            if (this.length === 0)
                return null;
            return this.data[this.length - 1];
        };
        this.push = (value) => {
            if (!value && value != 0)
                throw new Error("value needs to be truthy");
            this.data.push(value);
            this.length++;
            return this;
        };
        this.pop = () => {
            if (this.data.length === 0)
                return null;
            const item = this.data.pop();
            if (item)
                return item;
            return null;
        };
    }
}
