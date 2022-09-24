import { copy } from "./4ec836d061f4fc50.js";
const 攻击强化系数表 = [0, 3, 5, 8, 10, 13, 16, 18, 21, 36, 34, 36, 43, 46, 49, 51, 54, 56, 59, 74, 76, 79, 81, 84, 86, 88, 91, 93, 96, 109, 111, 113, 116, 118, 121, 123, 125, 128, 130, 143, 145, 148, 150, 152, 154, 156, 159, 161, 163, 174, 176, 178, 179, 181, 183, 185, 187, 188, 190, 199, 201];
export function calculate(normalEquips, extraEquips, lv105, c) {
    if (normalEquips.filter(eq => eq.isMyth).length > 1) {
        alert('神话不可以带两件以上哦!');
        throw '神话不可以带两件以上哦!';
    }
    if (lv105 > 攻击强化系数表.length || lv105 < 1) {
        alert('你的战斗力太论外了!你到底是谁?(史诗等级不在支持范围内容)');
        throw '你的战斗力太论外了!你到底是谁?(史诗等级不在支持范围内容)';
    }
    lv105 = Math.floor(lv105);
    c = copy(c);
    let 标签 = [];
    let 备注s = [];
    const $105等级总和 = lv105 * 4;
    const noHasMyth = normalEquips.findIndex(x => x.isMyth) === -1;
    const $105收益百分比_衣镯耳 = noHasMyth ? Math.floor($105等级总和 / 40) * 3 : 0;
    const $105收益百分比_单件等级额外收益 = Math.floor(($105等级总和 - 200) / 40);
    const 攻击强化系数 = 攻击强化系数表[lv105 - 1] / 134.75 + 1;
    c.attrs.技能攻击力 *= (1 + $105收益百分比_单件等级额外收益 / 100) ** normalEquips.filter(eq => eq.slot !== '武器' && !eq.isMyth).length;
    const getFinalValue = (u, div) => {
        return u.value * u.times / div;
    };
    const handle = (eqs) => {
        for (const { attrs, tag } of eqs) {
            标签.push(...tag);
            for (const unit of attrs) {
                switch (unit.type) {
                    case '技能攻击力':
                        c.attrs.技能攻击力 *= 1 + getFinalValue(unit, 100);
                        break;
                    case '攻击强化':
                        c.attrs.攻击强化 += getFinalValue(unit, 1);
                        break;
                    case '光强':
                        c.attrs.光强 += getFinalValue(unit, 1);
                        break;
                    case '暗强':
                        c.attrs.暗强 += getFinalValue(unit, 1);
                        break;
                    case '冰强':
                        c.attrs.冰强 += getFinalValue(unit, 1);
                        break;
                    case '火强':
                        c.attrs.火强 += getFinalValue(unit, 1);
                        break;
                    case '中毒伤害':
                        c.attrs.中毒伤害 += getFinalValue(unit, 1);
                        break;
                    case '灼烧伤害':
                        c.attrs.灼烧伤害 += getFinalValue(unit, 1);
                        break;
                    case '出血伤害':
                        c.attrs.出血伤害 += getFinalValue(unit, 1);
                        break;
                    case '感电伤害':
                        c.attrs.感电伤害 += getFinalValue(unit, 1);
                        break;
                    case '冷却时间':
                        c.attrs.冷却时间 *= 1 + getFinalValue(unit, 100);
                        break;
                    case '冷却恢复速度':
                        c.attrs.冷却恢复速度 += getFinalValue(unit, 1);
                        break;
                    case '攻击强化百分比提升':
                        c.attrs.攻击强化百分比提升 += getFinalValue(unit, 1);
                        break;
                    case '中毒比例':
                        c.attrs.中毒比例 += getFinalValue(unit, 1);
                        break;
                    case '感电比例':
                        c.attrs.感电比例 += getFinalValue(unit, 1);
                        break;
                    case '灼烧比例':
                        c.attrs.灼烧比例 += getFinalValue(unit, 1);
                        break;
                    case '出血比例':
                        c.attrs.出血比例 += getFinalValue(unit, 1);
                        break;
                    case '攻击速度': {
                        c.attrs.攻击速度 += getFinalValue(unit, 1);
                        break;
                    }
                    case '移动速度':
                        c.attrs.移动速度 += getFinalValue(unit, 1);
                        break;
                    case '施放速度':
                        c.attrs.施放速度 += getFinalValue(unit, 1);
                        break;
                }
            }
        }
        for (const { 备注 } of eqs) {
            if (typeof 备注 === 'function') {
                备注s.push(备注(c, eqs));
            }
            else if (备注.length) {
                备注s.push(备注);
            }
        }
    };
    handle(normalEquips);
    c.attrs.攻击强化 *= 攻击强化系数;
    //贴膜不会成长
    handle(extraEquips);
    c.attrs.攻击强化 *= 1 + c.attrs.攻击强化百分比提升 / 100;
    c.attrs.技能攻击力 *= 1 + $105收益百分比_衣镯耳 / 100;
    const 最高属强 = Math.max(c.attrs.光强, c.attrs.暗强, c.attrs.火强, c.attrs.冰强);
    const 冷却系数 = Math.max(c.attrs.冷却时间 * 100 / c.attrs.冷却恢复速度, 0.3);
    const 倍率基础 = (c.attrs.攻击强化 + 1000) / 1000 * c.attrs.技能攻击力 * (最高属强 + 233) / 222;
    const 异常比例s = ['中毒比例', '灼烧比例', '感电比例', '出血比例'];
    const 异常伤害s = ['中毒伤害', '灼烧伤害', '感电伤害', '出血伤害'];
    const 倍率_直伤部分 = 倍率基础 * (1 - 异常比例s.reduce((acc, w) => acc + c.attrs[w] / 100, 0));
    const 倍率_异常部分 = 异常比例s.reduce((acc, w, i) => acc + 倍率基础 * c.attrs[w] / 100 * c.attrs[异常伤害s[i]] / 100, 0);
    const 倍率 = 倍率_异常部分 + 倍率_直伤部分;
    标签 = Array.from(new Set(标签));
    return {
        倍率,
        倍率_冷却期望: 倍率 / 冷却系数,
        冷却系数,
        标签,
        备注: 备注s.join(';'),
        角色: c
    };
}

