import { Equip, onceMap } from "./fca69cda69b4f22.js";
let rings = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
rings.set(t.name, t);
t = new Equip;
t.name = '守护龙的庇护-祝福';
t.attrs.push({ type: '技能攻击力', value: 0, times: 1 });
t.attrs.push({ type: '攻击强化', value: 4796 + (1751 - 1212) * 2, times: 1 });
t.tag = ['技能等级'];
t.属强(+30, 1);
rings.set(t.name, t);
t = new Equip;
t.name = '第三个黑桃-死亡';
t.attrs.push({ type: '攻击强化', value: 3180, times: 1 });
t.tag = ['附魔翻倍'];
rings.set(t.name, t);
t = new Equip;
t.name = '隐没的邪念戒指';
t.attrs.push({ type: '攻击强化', value: 3988 + (2021 - 808) * 2, times: 1 });
t.tag = ['恢复mp', '恢复hp'];
rings.set(t.name, t);
t = new Equip;
t.name = '血红生命之戒';
t.attrs.push({ type: '攻击强化', value: 4325 + (1751 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['灼烧', '灼烧技攻', '灼烧持续时间'];
t.attrs.push({ type: '火强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '石巨人之枢戒指';
t.attrs.push({ type: '攻击强化', value: 4258 + (2021 - 943) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 247, times: 6 });
t.tag = ['防御力'];
rings.set(t.name, t);
t = new Equip;
t.name = '全能主宰者之戒';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '攻击强化', value: 4298, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['mp消耗量增加', 'mp套'];
rings.set(t.name, t);
t = new Equip;
t.name = '骑士的骄傲';
t.attrs.push({ type: '攻击强化', value: 4176 + (1751 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['冰冻', '冰冻技攻', '冰冻持续时间'];
t.attrs.push({ type: '冰强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '闪耀的生命之戒';
t.attrs.push({ type: '攻击强化', value: 4325 + (1751 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['感电', '感电技攻', '感电持续时间'];
t.attrs.push({ type: '光强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '血色结晶戒指';
t.attrs.push({ type: '攻击强化', value: 4325, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.attrs.push({ type: '出血伤害', value: 10, times: 1 });
t.attrs.push({ type: '出血伤害', value: 5, times: 1 });
t.attrs.push({ type: '出血伤害', value: 10, times: 1 });
t.tag = ['出血', '出血伤害', '出血持续时间', '自身出血'];
rings.set(t.name, t);
t = new Equip;
t.name = '雷达战网戒指';
t.attrs.push({ type: '攻击强化', value: 2642 + (539 - 135) * 2, times: 1 });
t.tag = ['CD'];
t.attrs.push({ type: '冷却恢复速度', value: +42, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '双音交映戒指';
t.attrs.push({ type: '攻击强化', value: 4258 + 1482 - 889, times: 1 });
t.tag = ['CD'];
t.attrs.push({ type: '冷却恢复速度', value: +30, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 3 });
t.attrs.push({ type: '施放速度', value: 12, times: 3 });
t.attrs.push({ type: '移动速度', value: 8, times: 1 });
t.attrs.push({ type: '移动速度', value: 20, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '闪耀的音律';
t.attrs.push({ type: '攻击强化', value: 4972 + (1616 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3409, times: 1 });
t.tag = ['消耗品mp恢复量'];
t.属强(+15, 1);
rings.set(t.name, t);
t = new Equip;
t.name = '无尽的痛苦之戒';
t.attrs.push({ type: '攻击强化', value: 4258, times: 1 });
t.attrs.push({ type: '攻击强化', value: 889, times: 5 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['低血'];
rings.set(t.name, t);
t = new Equip;
t.name = '永不停歇的命运';
t.attrs.push({ type: '攻击强化', value: 3098 + (1616 - 808) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['冰冻', '冰冻技攻', '冰冻持续时间'];
t.attrs.push({ type: '冰强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '金翼戒指';
t.attrs.push({ type: '攻击强化', value: 5510, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 35, times: 1 });
t.tag = ['非破招特化'];
t.属强(+15, 1);
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '电流星散戒指';
t.attrs.push({ type: '攻击强化', value: 4176 + (1751 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['眩晕', '眩晕技攻', '眩晕持续时间'];
t.属强(+8, 1);
rings.set(t.name, t);
t = new Equip;
t.name = '磁场探测者戒指';
t.attrs.push({ type: '攻击强化', value: 4258, times: 1 });
t.attrs.push({ type: '攻击强化', value: 1112, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['人数'];
rings.set(t.name, t);
t = new Equip;
t.name = '绽放的神秘之花';
t.attrs.push({ type: '攻击强化', value: 4176 + (1751 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['失明', '失明技攻', '失明持续时间'];
t.attrs.push({ type: '暗强', value: +10, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '瞬息千里戒指';
t.attrs.push({ type: '攻击强化', value: 4258 + (1616 - 943) * 2, times: 1 });
t.tag = ['自身出血', 'CD'];
t.attrs.push({ type: '冷却恢复速度', value: +10, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
rings.set(t.name, t);
t = new Equip;
t.name = '能量搜索环';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 7, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2816, times: 1 });
t.attrs.push({ type: '攻击强化', value: 700, times: 1 });
t.tag = ['属强相关', '属抗相关'];
rings.set(t.name, t);
t = new Equip;
t.name = '热烈渴望的证明';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.属强(8, 3);
t.attrs.push({ type: '攻击强化', value: 445, times: 1 });
t.攻施速模板0(8, 1);
t.tag = ['异常状态对象数量'];
rings.set(t.name, t);
t = new Equip;
t.name = '暴龙王的支配:压制';
t.attrs.push({ type: '攻击强化', value: 5604, times: 1 });
t.attrs.push({ type: '攻击强化', value: 790, times: 3 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.属强(5, 0);
t.attrs.push({ type: '攻击强化', value: 741, times: 1 });
rings.set(t.name, t);
for (const v of rings.values()) {
    v.slot = '戒指';
    if (!v.isMyth) {
        v.attrs.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default rings;

