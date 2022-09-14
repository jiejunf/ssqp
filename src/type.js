import { copy } from "./util.js";
export class Equip {
    constructor() {
        this.name = '';
        this.slot = '上衣';
        this.attrs = [];
        this.other = [];
        this.tag = [];
        this.isMyth = false;
    }
    攻施速模板(n, t) {
        this.attrs.push({ type: '攻击速度', value: n, times: t });
        this.attrs.push({ type: '施放速度', value: n * 1.5, times: t });
    }
    移攻施速模板(n, t) {
        this.攻施速模板(n, t);
        this.attrs.push({ type: '移动速度', value: n, times: t });
    }
}
export const eqAttrTypeWords = [
    '属强', '火强', '冰强', '光强', '暗强',
    '中毒伤害', '灼烧伤害', '感电伤害', '出血伤害',
    '中毒比例', '出血比例', '感电比例', '灼烧比例',
    '技能攻击力', '攻击强化', '冷却时间', '冷却恢复速度',
    '移动速度', '攻击速度', '施放速度', '所有速度', '攻击强化百分比'
];
export class Character {
    constructor() {
        this.固有属强 = {
            火: 308,
            光: 308,
            暗: 308,
            冰: 308
        };
        this.异常伤害比例 = {
            出血: 0,
            灼烧: 0,
            感电: 0,
            中毒: 0
        };
        this.异常伤害提升率 = {
            出血: 0,
            灼烧: 0,
            感电: 0,
            中毒: 0
        };
        this.冷却 = 0.95;
        this.装备以外_攻速鞋适用攻速 = 28;
        this.固有防御 = {
            物理: 0,
            魔法: 0
        };
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

