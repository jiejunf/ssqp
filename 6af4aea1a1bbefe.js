import { Equip, onceMap } from "./fca69cda69b4f22.js";
let ex_necklaces = new onceMap;
let t;
t = new Equip;
t.name = '火龙:沸腾的龙之气息';
t.attrs.push({ type: '攻击强化', value: 6252, times: 1 });
ex_necklaces.set(t.name, t);
t = new Equip;
t.name = '金龙:灿烂的龙之平衡';
t.attrs.push({ type: '攻击强化', value: 7034, times: 1 });
ex_necklaces.set(t.name, t);
t = new Equip;
t.name = '黑龙:注视的龙之眼球';
t.attrs.push({ type: '攻击强化', value: 1876, times: 5 });
ex_necklaces.set(t.name, t);
t = new Equip;
t.name = '真龙:残酷的龙之趾甲';
t.attrs.push({ type: '攻击强化', value: 208, times: 30 });
ex_necklaces.set(t.name, t);
t = new Equip;
t.name = '天界联合军:为天下苍生的祈祷';
t.attrs.push({ type: '攻击强化', value: 7815, times: 1 });
ex_necklaces.set(t.name, t);
for (const v of ex_necklaces.values()) {
    v.slot = 'ex项链';
}
export default ex_necklaces;

