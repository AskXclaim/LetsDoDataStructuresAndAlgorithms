export class HashTable {
    private readonly data: any[];

    constructor(private readonly size: number) {
        this.data = new Array(size);
    }

    _hash(key: any): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    public set = (key: any, value: any): any[] => {
        if (!this.isValid(key)) throw this.getInvalidError("key");
        if (!this.isValid(value)) throw this.getInvalidError("value");
        const address = this.getAddress(key);

        if (!this.data[address]) this.data[address] = [];

        this.data[address].push([key, value]);
        return this.data;
    }


    public get
        = (key: any): any => {
        if (!this.isValid(key)) throw this.getInvalidError("key");

        const address = this.getAddress(key);
        const data = this.data[address];
        if (!data) throw new Error(`Not entry matches key:${key}`);

        for (const element of data) {
            if (element[0] === key) return element[0][1];
        }
    }

    public getHashTable = (): any[] => this.data;
    private getAddress = (key: any): number => this._hash(key);
    private isValid = (value: any): boolean => {
        if (typeof value === "string" && value.length === 0) return false;
        
        return value || value == 0;
    };

    private getInvalidError = (name: string): Error => new Error(`${name} cannot be falsy`)
}
