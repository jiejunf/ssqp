import { Equip, onceMap } from "./fca69cda69b4f22.js";
let earrings = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
earrings.set(t.name, t);
t = new Equip;
t.name = '爆炸型:小型战术信号弹';
t.attrs.push({ type: '攻击强化', value: 3988 + (1886 - 808) * 2, times: 1 });
t.属强(15, 1);
t.attrs.push({ type: '攻击速度', value: 2, times: 15 });
t.attrs.push({ type: '施放速度', value: 2, times: 15 });
t.attrs.push({ type: '移动速度', value: 8, times: 1 });
t.attrs.push({ type: '移动速度', value: 3, times: 15 });
t.tag = ['所有速度'];
earrings.set(t.name, t);
t = new Equip;
t.name = '隐匿之叹息耳环';
t.attrs.push({ type: '攻击强化', value: 3720 + (1751 - 674) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.attrs.push({ type: '冷却时间', value: 5, times: 1 });
t.tag = ['技能特化'];
earrings.set(t.name, t);
t = new Equip;
t.name = '无色冰晶耳环';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 20, times: 1 });
t.attrs.push({ type: '冷却时间', value: 15, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['技能特化'];
earrings.set(t.name, t);
t = new Equip;
t.name = '堕落的灵魂';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 8, times: 1 });
t.attrs.push({ type: '冷却时间', value: -10, times: 1 });
t.tag = ['无色技能'];
earrings.set(t.name, t);
t = new Equip;
t.name = '战争之主耳环';
t.attrs.push({ type: '攻击强化', value: 3450 + (808 - 539) * 2, times: 1 });
t.tag = ['属强提升'];
t.attrs.push({ type: '火强', value: +15, times: 1 });
t.attrs.push({ type: '暗强', value: 0, times: 1 });
t.attrs.push({ type: '光强', value: 0, times: 1 });
t.attrs.push({ type: '冰强', value: 0, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '诅咒的枷锁';
t.attrs.push({ type: '攻击强化', value: 2979 + (1078 - 674) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['出血技攻', '出血'];
t.attrs.push({ type: '冷却恢复速度', value: +10, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '万物引力耳环';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['移动速度'];
earrings.set(t.name, t);
t = new Equip;
t.name = '猎龙者之证-龙鳞耳环';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 0, times: 1 });
t.属强(30, 1);
earrings.set(t.name, t);
t = new Equip;
t.name = '晨曦的新芽耳环';
t.attrs.push({ type: '攻击强化', value: 3450 + (808 - 539) * 2, times: 1 });
t.tag = ['属强提升'];
t.attrs.push({ type: '暗强', value: +15, times: 1 });
t.attrs.push({ type: '火强', value: 0, times: 1 });
t.attrs.push({ type: '光强', value: 0, times: 1 });
t.attrs.push({ type: '冰强', value: 0, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '未知文明-双子石';
t.attrs.push({ type: '攻击强化', value: 3450 + (808 - 539) * 2, times: 1 });
t.tag = ['属强提升'];
t.attrs.push({ type: '冰强', value: +15, times: 1 });
t.attrs.push({ type: '暗强', value: 0, times: 1 });
t.attrs.push({ type: '光强', value: 0, times: 1 });
t.attrs.push({ type: '火强', value: 0, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '吞噬风暴耳环';
t.attrs.push({ type: '攻击强化', value: 4258 + (1347 - 943) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 7, times: 1 });
t.tag = ['mp消耗量减少', '消耗品mp恢复量提升'];
earrings.set(t.name, t);
t = new Equip;
t.name = '无尽的生机耳环';
t.attrs.push({ type: '攻击强化', value: 3450 + (808 - 539) * 2, times: 1 });
t.tag = ['属强提升'];
t.attrs.push({ type: '光强', value: +15, times: 1 });
t.attrs.push({ type: '暗强', value: 0, times: 1 });
t.attrs.push({ type: '火强', value: 0, times: 1 });
t.attrs.push({ type: '冰强', value: 0, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '脉冲之源耳环';
t.attrs.push({ type: '攻击强化', value: 3720, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3557, times: 0 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['mp条件', 'mp套'];
earrings.set(t.name, t);
t = new Equip;
t.name = '苍空飞羽耳环';
t.attrs.push({ type: '攻击强化', value: 2857, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.attrs.push({ type: '移动速度', value: 15, times: 1 });
t.attrs.push({ type: '攻击速度', value: 15, times: 1 });
t.attrs.push({ type: '施放速度', value: 22.5, times: 1 });
t.tag = ['出血技攻'];
earrings.set(t.name, t);
t = new Equip;
t.name = '黄昏圣堂';
t.attrs.push({ type: '攻击强化', value: 4972 + (1616 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 445, times: 10 });
t.tag = ['恢复hp', '领主', 'hp条件'];
t.属强(+15, 1);
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
earrings.set(t.name, t);
t = new Equip;
t.name = '徘徊之魂耳环';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 20, times: 1 });
t.tag = ['移动速度'];
earrings.set(t.name, t);
t = new Equip;
t.name = '原核之芯耳环';
t.attrs.push({ type: '攻击强化', value: 2560, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 0 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 0 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['石化'];
earrings.set(t.name, t);
t = new Equip;
t.name = '灵犀之音耳环';
t.attrs.push({ type: '攻击强化', value: 3988 + (2694 - 808) * 2, times: 1 });
t.tag = ['冰冻', '微波炉', '自身冰冻', '解除自身冰冻'];
earrings.set(t.name, t);
t = new Equip;
t.name = '时间之念耳环';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['附魔翻倍'];
earrings.set(t.name, t);
t = new Equip;
t.name = '超小型GPS';
t.attrs.push({ type: '攻击强化', value: 4258, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 10 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['韧性条'];
earrings.set(t.name, t);
t = new Equip;
t.name = '永不终结的祈愿';
t.attrs.push({ type: '攻击强化', value: 5487, times: 1 });
t.attrs.push({ type: '中毒伤害', value: 3, times: 5 });
t.tag = ['中毒结算'];
earrings.set(t.name, t);
t = new Equip;
t.name = '泪之宝玉';
t.attrs.push({ type: '攻击强化', value: 3720, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 4, times: 4 });
t.tag = ['自身异常'];
earrings.set(t.name, t);
t = new Equip;
t.isMyth = true;
t.name = '军神的心之所念';
t.attrs.push({ type: '技能攻击力', value: 30, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 4, times: 1 });
t.属强(+25, 1);
t.attrs.push({ type: '施放速度', value: 15, times: 1 });
t.tag = ['神话'];
earrings.set(t.name, t);
t = new Equip;
t.isMyth = true;
t.name = '永恒之海';
t.attrs.push({ type: '技能攻击力', value: 27, times: 1 });
t.属强(52, 1);
t.attrs.push({ type: '攻击速度', value: 15, times: 1 });
t.attrs.push({ type: '移动速度', value: 15, times: 1 });
t.attrs.push({ type: '施放速度', value: 22.5, times: 1 });
t.tag = ['神话'];
earrings.set(t.name, t);
for (const v of earrings.values()) {
    v.slot = '耳环';
    if (!v.isMyth) {
        v.attrs.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default earrings;

