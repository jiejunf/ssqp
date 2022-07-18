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
export class Character {
    constructor() {
        this.elementIncrease = {
            火: 250,
            光: 250,
            暗: 250,
            冰: 250
        };
        this.dotStatePercent = {
            出血: 0,
            灼烧: 0,
            感电: 0,
            中毒: 0
        };
        this.dotStateIncrease = {
            出血: 0,
            灼烧: 0,
            感电: 0,
            中毒: 0
        };
        this.cd = 0.95;
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
