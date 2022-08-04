import { Equip, onceMap, dataWords } from "./type.js";
let necklaces = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (const word of dataWords) {
    t.data.push({ type: word, value: 0, times: 1 });
    t.data.push({ type: word, value: 0, times: 1 });
}
necklaces.set(t.name, t);
t = new Equip;
t.name = '第一个黑桃-贵族';
t.data.push({ type: '攻击强化', value: 3180, times: 1 });
t.tag = ['附魔翻倍'];
t.other = ["附魔翻倍"];
necklaces.set(t.name, t);
t = new Equip;
t.name = '生命的脉动';
t.data.push({ type: '攻击强化', value: 3180 + 1886 - 404, times: 1 });
t.tag = ['光强', '光属性自击'];
t.data.push({ type: '光强', value: +30, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '黯星项链';
t.data.push({ type: '攻击强化', value: 4702, times: 1 });
t.data.push({ type: '攻击强化', value: 2668, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['低血', '所有速度'];
t.data.push({ type: '属强', value: +15, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '风化的恶意';
t.data.push({ type: '攻击强化', value: 3180 + 1886 - 404, times: 1 });
t.tag = ['暗强', '暗属性自击'];
t.data.push({ type: '暗强', value: +30, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '领域之心项链';
t.data.push({ type: '攻击强化', value: 5416, times: 1 });
t.data.push({ type: '攻击强化', value: 222, times: 20 });
t.data.push({ type: '技能攻击力', value: 3, times: 1 });
t.tag = ['金币数量'];
t.data.push({ type: '属强', value: +15, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '战士的荣耀项链';
t.data.push({ type: '攻击强化', value: 3450 + (1482 - 539) * 2, times: 1 });
t.tag = ['灼烧', '特效'];
t.data.push({ type: '火强', value: +15, times: 1 });
t.other = ["攻击灼烧敌人时,剩余CD-0.5%"];
necklaces.set(t.name, t);
t = new Equip;
t.name = '高科技闪影项链';
t.data.push({ type: '攻击强化', value: 4876, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['手搓', 'CD'];
t.data.push({ type: '属强', value: +15, times: 1 });
t.data.push({ type: '冷却时间', value: -15, times: 0 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '五感之灵项链';
t.data.push({ type: '攻击强化', value: 4796 + (2290 - 1212) * 2, times: 1 });
t.tag = ['特效'];
t.other = ["施放悦翔后霸体30s", "跳跃力增加"];
necklaces.set(t.name, t);
t = new Equip;
t.name = '浮光跃金项链';
t.data.push({ type: '攻击强化', value: 3450 + (1078 - 539) * 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 12, times: 1 });
t.tag = ['破招'];
necklaces.set(t.name, t);
t = new Equip;
t.name = '守护龙的庇护-勇气';
t.data.push({ type: '技能攻击力', value: 0, times: 1 });
t.data.push({ type: '攻击强化', value: 4796 + (1751 - 1212) * 2, times: 1 });
t.tag = ['技能等级'];
t.data.push({ type: '属强', value: +30, times: 1 });
t.other = ["lv40技能等级上升"];
necklaces.set(t.name, t);
t = new Equip;
t.name = '脉冲触发器';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.data.push({ type: '攻击强化', value: 2964, times: 1 });
t.tag = ['近战', '攻击速度'];
necklaces.set(t.name, t);
t = new Equip;
t.name = '石巨人之心项链';
t.data.push({ type: '攻击强化', value: 3180 + 1886 - 404, times: 1 });
t.tag = ['冰强', '冰属性自击'];
t.data.push({ type: '冰强', value: +30, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '无尽的愤怒项链';
t.data.push({ type: '攻击强化', value: 5240, times: 1 });
t.data.push({ type: '技能攻击力', value: 8.64, times: 1 });
t.tag = ['无视防御'];
t.data.push({ type: '属强', value: +15, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '残忍之心项链';
t.data.push({ type: '攻击强化', value: 3180 + 1886 - 404, times: 1 });
t.tag = ['火强', '火属性自击'];
t.data.push({ type: '火强', value: +30, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '熔丝项链';
t.data.push({ type: '攻击强化', value: 3720 + (2155 - 674) * 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['弱点'];
t.other = ["更变弱点属性"];
necklaces.set(t.name, t);
t = new Equip;
t.name = '蓝色自然的种子';
t.data.push({ type: '攻击强化', value: 3720 + (1616 - 674) * 2, times: 1 });
t.tag = ['灼烧', '灼烧伤害'];
t.data.push({ type: '冰强', value: +15, times: 1 });
t.data.push({ type: '灼烧伤害', value: 35, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '遥感之心项链';
t.data.push({ type: '攻击强化', value: 5510, times: 1 });
t.tag = ['恢复mp', 'mp消耗量增加'];
t.data.push({ type: '属强', value: +15, times: 1 });
necklaces.set(t.name, t);
t = new Equip;
t.name = '骑士的赎罪';
t.data.push({ type: '攻击强化', value: 4528 + (1616 - 1078) * 2, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['所有速度', '前冲'];
necklaces.set(t.name, t);
t = new Equip;
t.name = '温柔的旋律';
t.data.push({ type: '攻击强化', value: 4258 + (1616 - 1078) * 1, times: 1 });
t.data.push({ type: '技能攻击力', value: 10, times: 1 });
t.data.push({ type: '属强', value: 20, times: 1 });
t.tag = ['睡眠'];
necklaces.set(t.name, t);
for (const v of necklaces.values()) {
    v.slot = '项链';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default necklaces;

