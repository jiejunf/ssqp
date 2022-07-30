import { Equip, onceMap, dataWords } from "./type.js";
let weapons = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (const word of dataWords) {
    t.data.push({ type: word, value: 0, times: 1 });
    t.data.push({ type: word, value: 0, times: 1 });
}
weapons.set(t.name, t);
t = new Equip;
t.name = '吞噬本源武器';
t.data.push({ type: '攻击强化', value: 5336, times: 1 });
t.data.push({ type: '技能攻击力', value: 49, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.data.push({ type: '技能攻击力', value: 4, times: 1 });
t.other = ["全技能等级+1(觉醒除外)", "自定义技能攻击力"];
weapons.set(t.name, t);
t = new Equip;
t.name = '胜负之役武器';
t.data.push({ type: '攻击强化', value: 5928, times: 1 });
t.data.push({ type: '技能攻击力', value: 50, times: 1 });
t.data.push({ type: '技能攻击力', value: 0, times: 1 });
t.data.push({ type: '技能攻击力', value: 0, times: 1 });
t.data.push({ type: '技能攻击力', value: 0, times: 1 });
t.data.push({ type: '冷却恢复速度', value: 0, times: 1 });
t.data.push({ type: '冷却时间', value: 0, times: 1 });
t.other = ["自定义攻击强化", "自定义技能攻击力", "自定义冷却恢复速度", "自定义冷却时间减少"];
weapons.set(t.name, t);
for (const v of weapons.values()) {
    v.slot = '武器';
}
export default weapons;

