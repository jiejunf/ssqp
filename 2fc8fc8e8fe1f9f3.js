import { Equip, onceMap } from "./fca69cda69b4f22.js";
let supports = new onceMap;
let t;
t = new Equip;
t.name = '自定义装备';
for (let i = 0; i < 5; i++) {
    t.attrs.push({ type: '攻击强化', value: 0, times: 1 });
}
supports.set(t.name, t);
t = new Equip;
t.name = '摇曳的生命之水';
t.attrs.push({ type: '攻击强化', value: 3368 + (1616 - 943) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.tag = ['冰冻'];
supports.set(t.name, t);
t = new Equip;
t.name = '猎龙者之证-龙骨角笛';
t.attrs.push({ type: '攻击强化', value: 4796, times: 1 });
t.tag = ['技能等级'];
t.属强(+30, 1);
t.attrs.push({ type: '技能攻击力', value: 0, times: 1 });
supports.set(t.name, t);
t = new Equip;
t.name = '命运的魔法箱';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '攻击强化百分比提升', value: 3, times: 1 });
t.属强(12, 1);
t.tag = ['附魔翻倍'];
supports.set(t.name, t);
t = new Equip;
t.name = '梦之呼唤';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '冷却恢复速度', value: 50, times: 1 });
t.tag = ['睡眠', 'CD', '恢复hp'];
supports.set(t.name, t);
t = new Equip;
t.name = '生命的喘息';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '攻击强化', value: 2223, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 7, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.tag = ['低血'];
supports.set(t.name, t);
t = new Equip;
t.name = '虚影幻息眼镜';
t.attrs.push({ type: '攻击强化', value: 4325 + (1482 - 1347) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 2, times: 1 });
t.tag = ['灼烧', '灼烧技攻'];
supports.set(t.name, t);
t = new Equip;
t.name = '正义骑士面具';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '冷却时间', value: -15, times: 1 });
t.tag = ['跳跃', '跳跃力'];
supports.set(t.name, t);
t = new Equip;
t.name = '心之潜影';
t.attrs.push({ type: '攻击强化', value: 5510, times: 1 });
t.tag = ['火抗'];
t.attrs.push({ type: '火强', value: +20, times: 1 });
supports.set(t.name, t);
t = new Equip;
t.name = '未知文明-人面石';
t.attrs.push({ type: '攻击强化', value: 5510, times: 1 });
t.tag = ['冰抗'];
t.attrs.push({ type: '冰强', value: +20, times: 1 });
supports.set(t.name, t);
t = new Equip;
t.name = '不详的暗纹石板';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.tag = ['跳跃', '霸体', '二段跳'];
supports.set(t.name, t);
t = new Equip;
t.name = '死亡之冠';
t.attrs.push({ type: '攻击强化', value: 4258 + (2021 - 943) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3705, times: 1 });
t.tag = ['被击数'];
supports.set(t.name, t);
t = new Equip;
t.name = '挖掘之王部件';
t.attrs.push({ type: '攻击强化', value: 5214 + (2290 - 1347) * 2, times: 1 });
t.attrs.push({ type: '冷却时间', value: -5, times: 1 });
t.attrs.push({ type: '攻击速度', value: 5, times: 5 });
t.attrs.push({ type: '施放速度', value: 8, times: 5 });
t.tag = ['特效'];
supports.set(t.name, t);
t = new Equip;
t.name = '黎明圣杯';
t.attrs.push({ type: '攻击强化', value: 2910 + (1347 - 269) * 2, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 15, times: 1 });
t.所有速度(5, 3);
t.tag = ['手搓'];
supports.set(t.name, t);
t = new Equip;
t.name = '缥缈的知识';
t.attrs.push({ type: '攻击强化', value: 5510, times: 1 });
t.tag = ['暗抗'];
t.attrs.push({ type: '暗强', value: +20, times: 1 });
supports.set(t.name, t);
t = new Equip;
t.name = '幻影之触控制面板';
t.attrs.push({ type: '攻击强化', value: 5066 + (1482 - 1347) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 830, times: 5 });
t.tag = ['mp条件'];
supports.set(t.name, t);
t = new Equip;
t.name = '全息通话器';
t.attrs.push({ type: '攻击强化', value: 4796 + (1886 - 1212) * 2, times: 1 });
t.attrs.push({ type: '攻击速度', value: 8, times: 1 });
t.attrs.push({ type: '施放速度', value: 12, times: 1 });
t.attrs.push({ type: '移动速度', value: 8, times: 1 });
t.tag = ['普通攻击', '异常', '非无色技能CD'];
supports.set(t.name, t);
t = new Equip;
t.name = '生命本源背包';
t.attrs.push({ type: '攻击强化', value: 5510, times: 1 });
t.tag = ['光抗'];
t.attrs.push({ type: '光强', value: +20, times: 1 });
supports.set(t.name, t);
t = new Equip;
t.name = '德卡制导装置';
t.attrs.push({ type: '攻击强化', value: 2910, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 10, times: 1 });
t.tag = ['异常', 'CD'];
supports.set(t.name, t);
t = new Equip;
t.name = '空战型:战术螺旋桨无人机';
t.attrs.push({ type: '攻击强化', value: 4528 + (1616 - 1078) * 2, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3853, times: 1 });
t.tag = ['恢复hp', '召唤'];
supports.set(t.name, t);
t = new Equip;
t.name = '光学工程眼镜';
t.attrs.push({ type: '攻击强化', value: 4528, times: 1 });
t.attrs.push({ type: '攻击强化', value: 3557, times: 1 });
t.attrs.push({ type: '技能攻击力', value: 5, times: 1 });
t.attrs.push({ type: '攻击速度', value: 5, times: 1 });
t.attrs.push({ type: '施放速度', value: 7.5, times: 1 });
t.attrs.push({ type: '移动速度', value: 5, times: 1 });
t.tag = ['品级相关'];
supports.set(t.name, t);
t = new Equip;
t.name = '无谋而合理的作战';
t.attrs.push({ type: '攻击强化', value: 4258, times: 1 });
t.attrs.push({ type: '攻击强化', value: 4446, times: 1 });
t.tag = ['mp条件'];
supports.set(t.name, t);
for (const v of supports.values()) {
    v.slot = '左槽';
    if (!v.isMyth) {
        v.attrs.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default supports;

