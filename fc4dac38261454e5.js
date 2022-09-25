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
t = new Equip;
t.name = '信赖死灭武器';
t.attrs.push({ type: '攻击强化', value: 5928, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 55, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['异常赋予', '异常抗性', 'hp恢复', 'mp恢复'];
weapons.set(t.name, t);
t = new Equip;
t.name = '狂暴战意武器';
t.attrs.push({ type: '攻击强化', value: 7112, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 55, times: 1 });
t.属强(30, 1);
t.移攻施速模板0(20, 1);
t.tag = ['技能范围', '被击霸体'];
weapons.set(t.name, t);
t = new Equip;
t.name = '抗御凛冬光剑';
t.attrs.push({ type: '攻击强化', value: 4744, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 50, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 30, times: 0 });
t.tag = ['冰属性附魔', '冰冻抗性', '冰属性抗性', 'CDR加成'];
weapons.set(t.name, t);
for (const v of weapons.values()) {
    v.slot = '武器';
}
export default weapons;

