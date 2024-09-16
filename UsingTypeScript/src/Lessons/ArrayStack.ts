export class ArrayStack<T> {
    private data: T[] = [];
    private length: number = 0;

    constructor() {
    }

    public peek = (): T | null => {
        if (this.length === 0) return null;

        return this.data[this.length - 1];
    }

    public push = (value: T): ArrayStack<T> => {
        if (!value && value != 0) throw new Error("value needs to be truthy");

        this.data.push(value);
        this.length++;

        return this;
    }

    public pop = (): T | null => {
        if (this.data.length === 0) return null;

        const item: T | undefined = this.data.pop();
        if (item) return item;

        return null;
    }
}