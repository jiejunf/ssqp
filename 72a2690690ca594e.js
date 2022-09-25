import { Equip, onceMap } from "./fca69cda69b4f22.js";
let ex_pants = new onceMap;
let t;
t = new Equip;
t.name = '冰花:残酷的寒气';
t.attrs.push({ type: '攻击强化', value: 1704, times: 4 });
ex_pants.set(t.name, t);
t = new Equip;
t.name = '激怒:贪图万物的欲求';
t.attrs.push({ type: '攻击强化', value: 6213, times: 1 });
t.tag = ['激怒气息'];
ex_pants.set(t.name, t);
t = new Equip;
t.name = '雷光:降雷之龙角';
t.attrs.push({ type: '攻击强化', value: 4685, times: 1 });
ex_pants.set(t.name, t);
t = new Equip;
t.name = '交感:保护的温气';
t.attrs.push({ type: '攻击强化', value: 4325, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 10, times: 0 });
t.tag = ['CDR(10*4)'];
ex_pants.set(t.name, t);
t = new Equip;
t.name = '暴食:褪色的苦痛';
t.attrs.push({ type: '攻击强化', value: 6213, times: 1 });
t.攻施速模板0(8, 1);
t.tag = ['异常抗性'];
ex_pants.set(t.name, t);
export default ex_pants;

