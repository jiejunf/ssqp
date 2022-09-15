import { Equip, onceMap } from "./fca69cda69b4f22.js";
let ex_bracelets = new onceMap;
let t;
t = new Equip;
t.name = '火龙:爆发之力的根源';
t.attrs.push({ type: '冷却时间', value: -12, times: 1 });
ex_bracelets.set(t.name, t);
t = new Equip;
t.name = '金龙:华丽之力的气息';
t.attrs.push({ type: '攻击强化', value: 8597, times: 1 });
ex_bracelets.set(t.name, t);
t = new Equip;
t.name = '黑龙:黑暗之力的根本';
t.attrs.push({ type: '攻击强化', value: 1876, times: 5 });
ex_bracelets.set(t.name, t);
t = new Equip;
t.name = '真龙:压倒之力的源泉';
t.attrs.push({ type: '攻击强化', value: 4690, times: 1 });
t.attrs.push({ type: '攻击强化', value: 469, times: 10 });
ex_bracelets.set(t.name, t);
t = new Equip;
t.name = '天界联合军:牢不可破的意志';
t.attrs.push({ type: '攻击强化', value: 1890, times: 5 });
ex_bracelets.set(t.name, t);
for (const v of ex_bracelets.values()) {
    v.slot = 'ex手镯';
}
export default ex_bracelets;

