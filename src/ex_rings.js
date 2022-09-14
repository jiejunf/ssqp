import { Equip, onceMap } from "./type.js";
let ex_rings = new onceMap;
let t;
t = new Equip;
t.name = '火龙:燃烧的烈焰之怒';
t.attrs.push({ type: '冷却时间', value: 25, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
ex_rings.set(t.name, t);
t = new Equip;
t.name = '金龙:无限的光之结界';
t.attrs.push({ type: '攻击强化', value: 7034, times: 1 });
ex_rings.set(t.name, t);
t = new Equip;
t.name = '黑龙:不绝的暗黑源能';
t.attrs.push({ type: '攻击强化', value: 1876, times: 5 });
ex_rings.set(t.name, t);
t = new Equip;
t.name = '真龙:沉重的钢之斗志';
t.attrs.push({ type: '攻击强化', value: 3126, times: 1 });
t.attrs.push({ type: '攻击强化', value: 1563, times: 0 });
t.attrs.push({ type: '攻击强化', value: 4696, times: 1 });
ex_rings.set(t.name, t);
t = new Equip;
t.name = '天界联合军:明亮的光之希望';
t.attrs.push({ type: '攻击强化', value: 7815, times: 1 });
ex_rings.set(t.name, t);
for (const v of ex_rings.values()) {
    v.slot = 'ex戒指';
}
export default ex_rings;

