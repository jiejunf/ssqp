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
export const dataWords = [
    '属强', '火强', '冰强', '光强', '暗强',
    '中毒伤害', '灼烧伤害', '感电伤害', '出血伤害',
    '中毒比例', '出血比例', '感电比例', '灼烧比例',
    '技能攻击力', '攻击强化', '冷却时间', '冷却恢复速度', '攻击强化百分比'
];
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

