import { Equip, onceMap } from "./type.js";
let coats = new onceMap;
let t;
t = new Equip;
t.name = '轰天裂地石甲';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.data.push({ type: '攻击强化', value: 371, times: 4 });
t.tag = ['队员人数'];
coats.set(t.name, t);
t = new Equip;
t.name = '高贵的神意上衣';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['无敌'];
coats.set(t.name, t);
t = new Equip;
t.name = '双面星云皮大衣';
t.data.push({ type: '攻击强化', value: 4379, times: 1 });
t.tag = ['复活', '恢复mp'];
coats.set(t.name, t);
t = new Equip;
t.name = '玉化亡灵胸甲 ';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['特效'];
coats.set(t.name, t);
t = new Equip;
t.name = '百折不挠的梦想';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.tag = ['睡眠', '复活', '恢复hp'];
coats.set(t.name, t);
t = new Equip;
t.name = '冤魂的执念上衣';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['变小', '回避率', '恢复mp', '恢复hp'];
coats.set(t.name, t);
t = new Equip;
t.name = '高科技战术指挥上衣';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['属强', '瞬移'];
t.other = ["最高属强+30"];
coats.set(t.name, t);
t = new Equip;
t.name = '暗影流光战袍';
t.data.push({ type: '攻击强化', value: 5336, times: 1 });
t.tag = ['恢复hp', '诅咒', 'CD'];
t.data.push({ type: '冷却恢复速度', value: +20, times: 1 });
coats.set(t.name, t);
t = new Equip;
t.name = '死亡蚕食胸甲';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.data.push({ type: '攻击强化', value: 4446, times: 0 });
t.tag = ['复活', '无色'];
coats.set(t.name, t);
t = new Equip;
t.name = '守护之王者铠甲';
t.data.push({ type: '攻击强化', value: 4647, times: 1 });
t.tag = ['护盾', '召唤', '恢复hp'];
coats.set(t.name, t);
t = new Equip;
t.name = '屠龙者';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.tag = ['全属性附魔'];
coats.set(t.name, t);
t = new Equip;
t.name = '白金流光夹克';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['附魔翻倍'];
t.other = ["附魔翻倍"];
coats.set(t.name, t);
t = new Equip;
t.name = '御力装甲上衣';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.data.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['灼烧伤害', '灼烧'];
t.data.push({ type: '灼烧伤害', value: +15, times: 1 });
coats.set(t.name, t);
t = new Equip;
t.name = '深渊之源上衣';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.tag = ['属性强化', '全属性附魔'];
t.other = ["对应属强-10", "全属性轮流附魔"];
coats.set(t.name, t);
t = new Equip;
t.name = '澎湃之心上衣';
t.data.push({ type: '攻击强化', value: 4379, times: 1 });
t.tag = ['恢复hp', '复活'];
coats.set(t.name, t);
t = new Equip;
t.name = '天才技术大师的研究服上衣';
t.data.push({ type: '攻击强化', value: 4917, times: 1 });
t.tag = ['恢复hp', '特效', 'CD'];
t.data.push({ type: '冷却恢复速度', value: +20, times: 1 });
coats.set(t.name, t);
t = new Equip;
t.name = '极魂之驱上衣';
t.data.push({ type: '攻击强化', value: 3960, times: 1 });
t.tag = ['变大', '霸体', '恢复mp', '恢复hp', '特效'];
coats.set(t.name, t);
t = new Equip;
t.name = '大地的馈赠上衣';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.tag = ['特效', '火强'];
t.data.push({ type: '火强', value: +15, times: 1 });
coats.set(t.name, t);
t = new Equip;
t.name = '古老的探险家大衣';
t.data.push({ type: '攻击强化', value: 3180, times: 1 });
t.tag = ['额外指令', '搬砖 '];
coats.set(t.name, t);
t = new Equip;
t.name = '逆转命运';
t.isMyth = true;
t.data.push({ type: '技能攻击力', value: 35, times: 1 });
t.other = ["lv1-48技能等级+1"];
coats.set(t.name, t);
for (const v of coats.values()) {
    v.slot = '上衣';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default coats;
