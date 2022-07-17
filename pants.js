import { Equip, onceMap } from './type.js';
let pants = new onceMap;
let t;
t = new Equip;
t.name = '舞台的华丽';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['后跳'];
t.other = ['超长后跳'];
pants.set(t.name, t);
t = new Equip;
t.name = '暴风骑士';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.tag = ['恢复hp'];
t.other = ['恢复hp'];
pants.set(t.name, t);
t = new Equip;
t.name = '白虹贯日长裤';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.tag = ['附魔翻倍'];
t.other = ['附魔翻倍'];
pants.set(t.name, t);
t = new Equip;
t.name = '玉化亡灵腿甲';
t.data.push({ type: '攻击强化', value: 3988, times: 1 });
t.data.push({ type: '攻击强化', value: 2668, times: 1 });
t.tag = ['霸体', 'CD'];
t.other = ['霸体', 'CD-8%'];
pants.set(t.name, t);
t = new Equip;
t.name = '天才技术大师的百宝裤';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['伪装', '回避率'];
t.other = ['待机、行走时伪装，伪装状态下增加45%回避率'];
pants.set(t.name, t);
t = new Equip;
t.name = '隐匿的自然生命';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.data.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['灼烧', '特效'];
pants.set(t.name, t);
t = new Equip;
t.name = '永不破碎的信念';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['暗强'];
t.other = ['暗强+65'];
pants.set(t.name, t);
t = new Equip;
t.name = '神谕之信念';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['冰强'];
t.other = ['冰强+65'];
pants.set(t.name, t);
t = new Equip;
t.name = '霜云暗影长裤';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['光强'];
t.other = ['光强+65'];
pants.set(t.name, t);
t = new Equip;
t.name = '沧海之覆护腿';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.data.push({ type: '攻击强化', value: 356, times: 1 });
t.tag = ['中毒', '中毒伤害'];
t.other = ['中毒伤害+15%'];
pants.set(t.name, t);
t = new Equip;
t.name = '混沌之幕护腿';
t.data.push({ type: '攻击强化', value: 5066, times: 1 });
t.data.push({ type: '攻击强化', value: 156, times: 19 });
t.data.push({ type: '攻击强化', value: 165, times: 9 });
t.tag = ['低血'];
pants.set(t.name, t);
t = new Equip;
t.name = '和平之翼长裤';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.tag = ['保护罩', '恢复mp'];
pants.set(t.name, t);
t = new Equip;
t.name = '苍龙闪影护腿';
t.data.push({ type: '攻击强化', value: 3720, times: 1 });
t.tag = ['光强'];
t.other = ['光强+20'];
pants.set(t.name, t);
t = new Equip;
t.name = '高科技战术护腿';
t.data.push({ type: '攻击强化', value: 2910, times: 1 });
t.data.push({ type: '技能攻击力', value: 30, times: 1 });
t.tag = ['弹反', '精准格挡', '控制'];
pants.set(t.name, t);
t = new Equip;
t.name = '终极掌控者护腿';
t.data.push({ type: '攻击强化', value: 4528, times: 1 });
t.other = ['CD-15%'];
t.tag = ['诅咒', 'CD'];
pants.set(t.name, t);
t = new Equip;
t.name = '荒漠之界长裤';
t.data.push({ type: '攻击强化', value: 3720, times: 1 });
t.other = ['火强+40'];
t.tag = ['特效', '火强', '灼烧'];
pants.set(t.name, t);
t = new Equip;
t.name = '梵塔黑色长裤';
t.data.push({ type: '攻击强化', value: 4258, times: 1 });
t.data.push({ type: '技能攻击力', value: 5, times: 3 });
t.other = ['基础精通+45%'];
t.tag = ['基础精通', '普通攻击'];
pants.set(t.name, t);
t = new Equip;
t.name = '不倦旅程护腿';
t.data.push({ type: '攻击强化', value: 4796, times: 1 });
t.data.push({ type: '技能攻击力', value: -4, times: 1 });
t.other = ['技能范围增加'];
t.tag = ['技能范围'];
pants.set(t.name, t);
t = new Equip;
t.name = '侵蚀的意志护腿';
t.data.push({ type: '攻击强化', value: 3450, times: 1 });
t.tag = ['火强'];
t.other = ['火强+65'];
pants.set(t.name, t);
for (const v of pants.values()) {
    v.slot = '下装';
    if (!v.isMyth) {
        v.data.push({
            type: '技能攻击力',
            value: 12,
            times: 1
        });
    }
}
export default pants;
