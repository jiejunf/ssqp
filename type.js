import { copy } from "./util.js";
export class Equip {
    constructor() {
        this.name = '';
        this.slot = '上衣';
        this.data = [];
        this.other = [];
        this.tag = [];
        this.isMyth = false;
    }
}
export class onceMap extends Map {
    set(k, t) {
        if (this.has(k)) {
            throw new Error(`Error:key [${k}] already exists.`);
        }
        super.set(k, t);
        return this;
    }
    clone() {
        const r = new onceMap();
        for (const [key, value] of this) {
            r.set(key, copy(value));
        }
        return r;
    }
}
