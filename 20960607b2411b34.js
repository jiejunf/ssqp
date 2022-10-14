import { Equip, onceMap } from "./fca69cda69b4f22.js";
let belts = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
belts.set(t.name, t);
t = new Equip;
t.name = '御雷腰带';
t.attrs.push({ type: '攻击强化', value: 4523 + (2021 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.attrs.push({ type: '光强', value: +15, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 3, times: 1 });
t.tag = ['感电',];
belts.set(t.name, t);
t = new Equip;
t.name = '龙食腐者';
t.attrs.push({ type: '攻击强化', value: 3720 + (1347 - 674) * 2, times: 1 });
t.属强(+20, 1);
t.attrs.push({ type: '攻击强化', value: 1186, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = [];
belts.set(t.name, t);
t = new Equip;
t.name = '动力之渊腰带';
t.attrs.push({ type: '攻击强化', value: 4258 + (2021 - 943) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 20, times: 1 });
t.attrs.push({ type: '冷却时间', value: 10, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['猴戏', '特化'];
belts.set(t.name, t);
t = new Equip;
t.name = '玉化亡灵腰甲';
t.attrs.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['召唤', '特效'];
belts.set(t.name, t);
t = new Equip;
t.name = '应尽之责腰带';
t.attrs.push({ type: '攻击强化', value: 2642 + (539 - 135) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 14, times: 1 });
t.tag = ['手搓', '特化'];
t.属强(+20, 1);
belts.set(t.name, t);
t = new Equip;
t.name = '静谧的星光腰带';
t.attrs.push({ type: '攻击强化', value: 4528 + (1347 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 889, times: 5 });
t.attrs.push({ type: '技能攻击力', value: 7, times: 1 });
t.attrs.push({ type: '移动速度', value: 8, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['减伤', '角色状态'];
belts.set(t.name, t);
t = new Equip;
t.name = '信念之喘息腰带';
t.attrs.push({ type: '攻击强化', value: 4528 + (1751 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['自身出血'];
belts.set(t.name, t);
t = new Equip;
t.name = '骄傲的意志腰带';
t.attrs.push({ type: '攻击强化', value: 4796 + (2021 - 1212) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['感电伤害', '感电'];
t.attrs.push({ type: '感电伤害', value: +15, times: 1 });
belts.set(t.name, t);
t = new Equip;
t.name = '纯粹的自然秩序';
t.attrs.push({ type: '攻击强化', value: 5066 + (2021 - 1347) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.attrs.push({ type: '攻击速度', value: 1, times: 10 });
t.attrs.push({ type: '施放速度', value: 1.5, times: 10 });
t.tag = ['特效', '感电'];
t.attrs.push({ type: '光强', value: +15, times: 1 });
belts.set(t.name, t);
t = new Equip;
t.name = '高科技战术腰带';
t.attrs.push({ type: '攻击强化', value: 5066 + (2021 - 1347) * 2, times: 1 });
t.tag = ['保护罩', '减伤', '恢复hp'];
belts.set(t.name, t);
t = new Equip;
t.name = '月落星沉腰带';
t.attrs.push({ type: '攻击强化', value: 4702, times: 1 });
t.attrs.push({ type: '攻击强化', value: 385, times: 0 });
t.tag = ['石化'];
t.属强(+15, 1);
belts.set(t.name, t);
t = new Equip;
t.name = '千丝萦绕腰带';
t.attrs.push({ type: '攻击强化', value: 4917, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 20, times: 1 });
t.tag = ['无需无色技能'];
belts.set(t.name, t);
t = new Equip;
t.name = '音律的夙愿';
t.attrs.push({ type: '攻击强化', value: 5336 + (2021 - 1482) * 2, times: 1 });
t.attrs.push({ type: '冷却时间', value: -10, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3260, times: 1 });
t.tag = ['睡眠', '睡眠核心'];
belts.set(t.name, t);
t = new Equip;
t.name = '亘古的悬空石腰带';
t.attrs.push({ type: '攻击强化', value: 4164 + (1751 - 674) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 25, times: 1 });
t.tag = ['自身中毒', 'CD'];
belts.set(t.name, t);
t = new Equip;
t.name = '星灭光离腰带';
t.attrs.push({ type: '攻击强化', value: 4258 + (1482 - 943) * 2, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 15, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 4, times: 1 });
t.所有速度(5, 9);
t.tag = ['所有速度', '火抗', 'CD'];
belts.set(t.name, t);
t = new Equip;
t.name = '恐惧缠绕腰带';
t.attrs.push({ type: '攻击强化', value: 3720, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 12, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 20, times: 1 });
t.tag = ['无色技能'];
belts.set(t.name, t);
t = new Equip;
t.name = '白玉无邪腰带';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['附魔翻倍'];
belts.set(t.name, t);
t = new Equip;
t.name = '大地之翼腰带';
t.attrs.push({ type: '攻击强化', value: 4528 + (1751 - 1078) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.属强(10, 1);
t.tag = ['减伤', '异抗'];
belts.set(t.name, t);
t = new Equip;
t.name = '天才技术大师的百宝腰带';
t.attrs.push({ type: '攻击强化', value: 4917, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.attrs.push({ type: '攻击强化', value: 889, times: 3 });
t.tag = ['回蓝', 'mp套'];
belts.set(t.name, t);
t = new Equip;
t.name = '增援号令腰带';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.attrs.push({ type: '攻击强化', value: 4001, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 15, times: 1 });
t.tag = ['攻击范围'];
belts.set(t.name, t);
t = new Equip;
t.name = '永眠前的准备';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '灼烧伤害', value: 15, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['灼烧结算'];
belts.set(t.name, t);
t = new Equip;
t.name = '共度患难的承诺';
t.attrs.push({ type: '攻击强化', value: 6952, times: 1 });
t.attrs.push({ type: '攻击强化', value: 148, times: 40 });
t.attrs.push({ type: '技能攻击力', value: 6, times: 1 });
t.属强(6, 1);
t.所有速度(6, 1);
belts.set(t.name, t);
for (const v of belts.values()) {
    v.slot = '腰带';
    if (!v.isMyth) {
        v.attrs.push({
            value: 12,
            type: '技能攻击力',
            times: 1
        });
    }
}
export default belts;

