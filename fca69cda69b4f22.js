import { copy } from "./4ec836d061f4fc50.js";
export class Equip {
    constructor() {
        this.name = '';
        this.slot = '上衣';
        this.attrs = [];
        this.tag = [];
        this.isMyth = false;
        this.备注 = '';
    }
    攻施速模板0(n, t) {
        this.attrs.push({ type: '攻击速度', value: n, times: t });
        this.attrs.push({ type: '施放速度', value: n * 1.5, times: t });
    }
    移攻施速模板0(n, t) {
        this.攻施速模板0(n, t);
        this.attrs.push({ type: '移动速度', value: n, times: t });
    }
    所有速度(n, t) {
        this.attrs.push({ type: '攻击速度', value: n, times: t });
        this.attrs.push({ type: '施放速度', value: n, times: t });
        this.attrs.push({ type: '移动速度', value: n, times: t });
    }
    属强(n, t) {
        this.attrs.push({ type: '火强', value: n, times: t });
        this.attrs.push({ type: '冰强', value: n, times: t });
        this.attrs.push({ type: '光强', value: n, times: t });
        this.attrs.push({ type: '暗强', value: n, times: t });
    }
}
export const eqAttrTypeWords = [
    '火强', '冰强', '光强', '暗强',
    '中毒伤害', '灼烧伤害', '感电伤害', '出血伤害',
    '中毒比例', '出血比例', '感电比例', '灼烧比例',
    '技能攻击力', '攻击强化', '冷却时间', '冷却恢复速度',
    '移动速度', '攻击速度', '施放速度', '攻击强化百分比提升'
];
export class Character {
    constructor() {
        this.other = {
            装备以外_攻速鞋适用攻速: 32
        };
        this.异常伤害系数 = {
            感电伤害: 1, 灼烧伤害: 1.05, 出血伤害: 1.1, 中毒伤害: 1
        };
        this.attrs = {
            //属强
            火强: 308,
            冰强: 308,
            光强: 308,
            暗强: 308,
            //异常伤害
            中毒伤害: 100,
            灼烧伤害: 100,
            感电伤害: 100,
            出血伤害: 100,
            //异常比例
            中毒比例: 0,
            出血比例: 0,
            感电比例: 0,
            灼烧比例: 0,
            //技攻冷
            技能攻击力: 1,
            攻击强化: 0,
            冷却时间: 0.95,
            冷却恢复速度: 100,
            攻击强化百分比提升: 60,
            //速度
            移动速度: 0,
            攻击速度: 0,
            施放速度: 0,
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

