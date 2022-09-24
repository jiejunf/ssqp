import { Equip, onceMap } from "./fca69cda69b4f22.js";
let weapons = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
weapons.set(t.name, t);
t = new Equip;
t.name = '吞噬本源武器';
t.attrs.push({ type: '攻击强化', value: 5336, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 49, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
weapons.set(t.name, t);
t = new Equip;
t.name = '胜负之役武器';
t.attrs.push({ type: '攻击强化', value: 5928, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 50, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 0, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 0, times: 1 });
t.attrs.push({ type: '冷却时间', value: 0, times: 1 });
weapons.set(t.name, t);
for (const v of weapons.values()) {
    v.slot = '武器';
}
export default weapons;

