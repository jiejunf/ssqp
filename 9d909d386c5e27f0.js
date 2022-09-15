import { Equip, onceMap } from "./fca69cda69b4f22.js";
let shoulders = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
shoulders.set(t.name, t);
t = new Equip;
t.name = '黑猫头盔';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 300, times: 0.05 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['基础精通'];
t.other = ["基础精通+30%"];
shoulders.set(t.name, t);
t = new Equip;
t.name = '电磁搜索者头肩';
t.attrs.push({ type: '攻击强化', value: 3180 + (1078 - 404) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['感电', '感电伤害'];
t.attrs.push({ type: '感电伤害', value: +20, times: 1 });
t.attrs.push({ type: '攻击速度', value: 5, times: 1 });
t.attrs.push({ type: '施放速度', value: 7.5, times: 1 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '灵巧的支配者护肩';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 8, times: 1 });
t.tag = ['低血', 'hp减少'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '六方式脉冲肩甲';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.attrs.push({ type: '攻击强化', value: 385, times: 0 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['石化'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '沙漠星芒护肩';
t.attrs.push({ type: '攻击强化', value: 3180 + (1212 - 404) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['灼烧', '灼烧伤害 '];
t.attrs.push({ type: '灼烧伤害', value: +20, times: 1 });
t.attrs.push({ type: '攻击速度', value: 5, times: 1 });
t.attrs.push({ type: '施放速度', value: 7.5, times: 1 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '天才技术大师的保护面罩';
t.attrs.push({ type: '攻击强化', value: 4528 + (1616 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 4446, times: 1 });
t.tag = ['灵魂', '恢复hp', '恢复mp'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '玉化亡灵肩甲';
t.attrs.push({ type: '攻击强化', value: 4258 + (1616 - 943) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 8, times: 1 });
t.tag = ['瞬移', '异常'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '华丽的清音护肩';
t.attrs.push({ type: '攻击强化', value: 4528 + (1616 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2519, times: 1 });
t.tag = ['蹲伏', '恢复hp'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '远古之法则护肩';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['CD'];
t.attrs.push({ type: '冷却恢复速度', value: +50, times: 1 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '白色的信念斗篷';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['附魔翻倍'];
t.other = ["附魔翻倍"];
shoulders.set(t.name, t);
t = new Equip;
t.name = '冰玉之蚀肩甲';
t.attrs.push({ type: '攻击强化', value: 3180 + (1616 - 404) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['中毒', '中毒伤害'];
t.attrs.push({ type: '中毒伤害', value: +20, times: 1 });
t.attrs.push({ type: '攻击速度', value: 5, times: 1 });
t.attrs.push({ type: '施放速度', value: 7.5, times: 1 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '望穿尽头的视线';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3705, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.tag = ['连击', 'mp消耗量增加', 'mp套'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '隐匿之光护肩';
t.attrs.push({ type: '攻击强化', value: 3180 + (1078 - 404) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['出血', '出血伤害'];
t.attrs.push({ type: '出血伤害', value: +20, times: 1 });
t.attrs.push({ type: '攻击速度', value: 5, times: 1 });
t.attrs.push({ type: '施放速度', value: 7.5, times: 1 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '高科技御敌肩甲';
t.attrs.push({ type: '攻击强化', value: 4528 + (1347 - 1078) * 2, times: 1 });
t.tag = ['hp恢复'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '绽放的自然生命';
t.attrs.push({ type: '攻击强化', value: 5066 + (2021 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['特效'];
t.attrs.push({ type: '冰强', value: +15, times: 1 });
t.attrs.push({ type: '攻击速度', value: 1, times: 10 });
t.attrs.push({ type: '施放速度', value: 1.5, times: 10 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '耀武之威护肩';
t.attrs.push({ type: '攻击强化', value: 4647, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['出血', '出血伤害', 'hp恢复'];
t.attrs.push({ type: '出血伤害', value: +15, times: 1 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '猎龙者';
t.attrs.push({ type: '攻击强化', value: 3720 + (1347 - 674) * 2, times: 1 });
t.attrs.push({ type: '属强', value: +20, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['属强'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '自由之翼护肩';
t.attrs.push({ type: '攻击强化', value: 4258 + (1347 - 943) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['灼烧'];
t.attrs.push({ type: '火强', value: +15, times: 1 });
t.attrs.push({ type: '所有速度', value: 3, times: 10 });
shoulders.set(t.name, t);
t = new Equip;
t.name = '钢筋铁骨披肩';
t.attrs.push({ type: '攻击强化', value: 3180, times: 1 });
t.tag = ['搬砖'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '金属齿轮护肩';
t.attrs.push({ type: '攻击强化', value: 3450, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 25, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.tag = ['CD'];
shoulders.set(t.name, t);
t = new Equip;
t.name = '欢愉中的热望';
t.attrs.push({ type: '攻击强化', value: 5066, times: 1 });
t.attrs.push({ type: '攻击强化', value: 1778, times: 1 });
t.attrs.push({ type: '攻击强化', value: 741, times: 4 });
t.tag = ['骰子点数'];
shoulders.set(t.name, t);
for (const v of shoulders.values()) {
    v.slot = '护肩';
    if (!v.isMyth) {
        v.attrs.push({
            type: '技能攻击力',
            value: 34,
            times: 1
        });
    }
}
export default shoulders;
