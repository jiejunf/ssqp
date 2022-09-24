import { Equip, onceMap } from "./fca69cda69b4f22.js";
let pants = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
pants.set(t.name, t);
t = new Equip;
t.name = '舞台的华丽';
t.attrs.push({ type: '攻击强化', value: 4258 + (1212 - 943) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.tag = ['后跳'];
pants.set(t.name, t);
t = new Equip;
t.name = '暴风骑士';
t.attrs.push({ type: '攻击强化', value: 3988 + (2021 - 943) * 2, times: 1 });
t.tag = ['恢复hp'];
pants.set(t.name, t);
t = new Equip;
t.name = '白虹贯日长裤';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['附魔翻倍'];
pants.set(t.name, t);
t = new Equip;
t.name = '玉化亡灵腿甲';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2668, times: 1 });
t.tag = ['霸体', 'CD'];
t.attrs.push({ type: '冷却时间', value: -8, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.attrs.push({ type: '移动速度', value: 8, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '天才技术大师的百宝裤';
t.attrs.push({ type: '攻击强化', value: 4258 + (1212 - 943) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.tag = ['伪装', '回避率'];
pants.set(t.name, t);
t = new Equip;
t.name = '隐匿的自然生命';
t.attrs.push({ type: '攻击强化', value: 5066 + 2021 - 943, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.属强(10, 1);
t.tag = ['灼烧', '特效'];
pants.set(t.name, t);
t = new Equip;
t.name = '永不破碎的信念';
t.attrs.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = [];
t.attrs.push({ type: '暗强', value: +65, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '神谕之信念';
t.attrs.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = [];
t.attrs.push({ type: '冰强', value: +65, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '霜云暗影长裤';
t.attrs.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = [];
t.attrs.push({ type: '光强', value: +65, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '沧海之覆护腿';
t.attrs.push({ type: '攻击强化', value: 4796 + (2155 - 1212) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['中毒', '中毒伤害'];
t.attrs.push({ type: '中毒伤害', value: +15, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '混沌之幕护腿';
t.attrs.push({ type: '攻击强化', value: 5066, times: 1 });
t.attrs.push({ type: '攻击强化', value: 412, times: 9 });
t.attrs.push({ type: '攻击强化', value: 247, times: 9 });
t.tag = ['低血'];
pants.set(t.name, t);
t = new Equip;
t.name = '和平之翼长裤';
t.attrs.push({ type: '攻击强化', value: 4258 + (1482 - 943) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 1927, times: 1 });
t.tag = ['保护罩', '恢复mp'];
pants.set(t.name, t);
t = new Equip;
t.name = '苍龙闪影护腿';
t.attrs.push({ type: '攻击强化', value: 3720 + (1347 - 674) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 1186, times: 1 });
t.tag = [];
t.属强(3, 5);
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '高科技战术护腿';
t.attrs.push({ type: '攻击强化', value: 2910 + (1616 - 269) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 30, times: 0 });
t.tag = ['弹反', '精准格挡', '控制'];
pants.set(t.name, t);
t = new Equip;
t.name = '终极掌控者护腿';
t.attrs.push({ type: '攻击强化', value: 4528 + (1616 - 1078) * 2, times: 1 });
t.attrs.push({ type: '冷却时间', value: -15, times: 1 });
t.tag = ['诅咒', 'CD', '低血'];
pants.set(t.name, t);
t = new Equip;
t.name = '荒漠之界长裤';
t.attrs.push({ type: '攻击强化', value: 3720, times: 1 });
t.attrs.push({ type: '火强', value: +40, times: 1 });
t.tag = ['特效', '灼烧'];
pants.set(t.name, t);
t = new Equip;
t.name = '梵塔黑色长裤';
t.attrs.push({ type: '攻击强化', value: 4258, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 3 });
t.attrs.push({ type: '攻击速度', value: 10, times: 3 });
t.attrs.push({ type: '施放速度', value: 10, times: 3 });
t.tag = ['基础精通', '普通攻击'];
pants.set(t.name, t);
t = new Equip;
t.name = '不倦旅程护腿';
t.attrs.push({ type: '攻击强化', value: 4796, times: 1 });
t.attrs.push({ type: '技能攻击力', value: -4, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.tag = ['技能范围'];
pants.set(t.name, t);
t = new Equip;
t.name = '侵蚀的意志护腿';
t.attrs.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = [];
t.attrs.push({ type: '火强', value: +65, times: 1 });
pants.set(t.name, t);
t = new Equip;
t.name = '机械装甲下装';
t.attrs.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['速度'];
t.属强(10, 1);
t.attrs.push({ type: '攻击强化', value: 272, times: 20 });
t.所有速度(2, 10);
pants.set(t.name, t);
t = new Equip;
t.name = '领导胜利的长裤';
t.attrs.push({ type: '攻击强化', value: 5604, times: 1 });
t.attrs.push({ type: '攻击强化', value: 296, times: 10 });
t.attrs.push({ type: '移动速度', value: 8, times: 1 });
t.tag = ['削韧'];
pants.set(t.name, t);
for (const v of pants.values()) {
    v.slot = '下装';
    if (!v.isMyth) {
        v.attrs.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default pants;

