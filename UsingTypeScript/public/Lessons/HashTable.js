export class HashTable {
    constructor(size) {
        this.size = size;
        this.set = (key, value) => {
            if (!this.isValid(key))
                throw this.getInvalidError("key");
            if (!this.isValid(value))
                throw this.getInvalidError("value");
            const address = this.getAddress(key);
            if (!this.data[address])
                this.data[address] = [];
            this.data[address].push([key, value]);
            return this.data;
        };
        this.get = (key) => {
            if (!this.isValid(key))
                throw this.getInvalidError("key");
            const address = this.getAddress(key);
            const data = this.data[address];
            if (!data)
                throw new Error(`Not entry matches key:${key}`);
            for (const element of data) {
                if (element[0] === key)
                    return element[0][1];
            }
        };
        this.getHashTable = () => this.data;
        this.getAddress = (key) => this._hash(key);
        this.isValid = (value) => {
            if (typeof value === "string" && value.length === 0)
                return false;
            return value || value == 0;
        };
        this.getInvalidError = (name) => new Error(`${name} cannot be falsy`);
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}
