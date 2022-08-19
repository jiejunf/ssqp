import { copy } from "./util.js";
export function calculate(eqs, lv105, atkIncresePercent, c) {
    lv105 = Math.floor(lv105);
    c = copy(c);
    let 攻击强化 = 0;
    let 技攻系数 = 1;
    let 标签 = [];
    let 其他 = [];
    let 最高异常伤害提升 = 0;
    let 最高属强 = 0;
    let 说明 = '';
    let cd = c.cd;
    let 异常收益 = 0;
    let cdr = 1;
    const $105等级总和 = lv105 * 4;
    const noHasMyth = eqs.findIndex(x => x.isMyth) === -1;
    const $105收益_衣镯耳 = noHasMyth ? Math.floor($105等级总和 / 40) * 3 : 0;
    const $105收益_单件等级额外收益 = Math.floor($105等级总和 / 40) + ($105等级总和 > 240 ? 1 : 0);
    const 攻击强化系数表 = [0, 3, 5, 8, 10, 13, 16, 18, 21, 36, 34, 36, 43, 46, 49, 51, 54, 56, 59, 74, 76, 79, 81, 84, 86, 88, 91, 93, 96, 109, 111, 113, 116, 118, 121, 123, 125, 128, 130, 143, 145, 148, 150, 152, 154, 156, 159, 161, 163, 174, 176, 178, 179, 181, 183, 185, 187, 188, 190, 199, 201];
    if (eqs.filter(eq => eq.isMyth).length > 1) {
        alert('神话不可以带两件以上哦!');
        throw '神话不可以带两件以上哦!';
    }
    if (lv105 > 攻击强化系数表.length || lv105 < 1) {
        alert('你的战斗力太论外了!你到底是谁?(105史诗等级不在支持范围内容)');
        throw '你的战斗力太论外了!你到底是谁?(105史诗等级不在支持范围内容)';
    }
    const 攻击强化系数 = 攻击强化系数表[lv105 - 1] / 134.75 + 1;
    技攻系数 *= (1 + $105收益_单件等级额外收益 / 100) ** eqs.filter(eq => eq.slot !== '武器' && !eq.isMyth).length;
    for (const { data, tag, other } of eqs) {
        标签.push(...tag);
        其他.push(...other);
        for (const unit of data) {
            switch (unit.type) {
                case '技能攻击力':
                    技攻系数 *= 1 + unit.value / 100 * unit.times;
                    break;
                case '攻击强化':
                    攻击强化 += unit.value * unit.times;
                    break;
                case '属强':
                    const tmp = unit.value * unit.times;
                    c.elementIncrease.光 += tmp;
                    c.elementIncrease.暗 += tmp;
                    c.elementIncrease.冰 += tmp;
                    c.elementIncrease.火 += tmp;
                    break;
                case '光强':
                    c.elementIncrease.光 += unit.value * unit.times;
                    break;
                case '暗强':
                    c.elementIncrease.暗 += unit.value * unit.times;
                    break;
                case '冰强':
                    c.elementIncrease.冰 += unit.value * unit.times;
                    break;
                case '火强':
                    c.elementIncrease.火 += unit.value * unit.times;
                    break;
                case '中毒伤害':
                    c.dotStateIncrease.中毒 += unit.value * unit.times;
                    break;
                case '灼烧伤害':
                    c.dotStateIncrease.灼烧 += unit.value * unit.times;
                    break;
                case '出血伤害':
                    c.dotStateIncrease.出血 += unit.value * unit.times;
                    break;
                case '感电伤害':
                    c.dotStateIncrease.感电 += unit.value * unit.times;
                    break;
                case '冷却时间':
                    cd = cd * (1 + unit.value / 100 * unit.times);
                    break;
                case '冷却恢复速度':
                    cdr += unit.value / 100 * unit.times;
                    break;
                case '攻击强化百分比':
                    atkIncresePercent += unit.value * unit.times;
                    break;
                case '中毒比例':
                    c.dotStatePercent.中毒 += unit.value * unit.times;
                    break;
                case '感电比例':
                    c.dotStatePercent.感电 += unit.value * unit.times;
                    break;
                case '灼烧比例':
                    c.dotStatePercent.灼烧 += unit.value * unit.times;
                    break;
                case '出血比例':
                    c.dotStatePercent.出血 += unit.value * unit.times;
                    break;
            }
        }
    }
    cd /= cdr;
    let p = '无';
    for (const [k, v] of Object.entries(c.elementIncrease)) {
        if (v > 最高属强) {
            最高属强 = v;
            p = k;
        }
    }
    说明 += `${p}属性攻击;`;
    p = '直接伤害';
    for (const key of Object.keys(c.dotStatePercent)) {
        const h = key === '出血' ? 1.1 : 1;
        const a = Reflect.get(c.dotStatePercent, key) / 100;
        const x = Reflect.get(c.dotStateIncrease, key) / 100;
        const v = x * a * h + (h - 1) * a;
        if (v > 异常收益) {
            异常收益 = v;
            最高异常伤害提升 = x;
            const pt = (a + v) / (1 + v);
            p = `${key}伤害转化(占比${(pt * 100).toFixed(2)}%,异常伤害增加词条收益等同于${(异常收益 * 100).toFixed(2)}%技能攻击力)`;
        }
    }
    说明 += `${p};`;
    技攻系数 *= 1 + $105收益_衣镯耳 / 100;
    攻击强化 *= 攻击强化系数 * (1 + atkIncresePercent / 100);
    return {
        攻击强化,
        '技能攻击力%': +((技攻系数 - 1) * 100).toFixed(2),
        倍率: (攻击强化 + 1000) / 1000 * 技攻系数 * (最高属强 + 233) / 222 * (1 + 异常收益),
        标签,
        其他,
        说明,
        最高属强,
        最高异常伤害提升,
        "冷却时间%": (cd * 100) >>> 0
    };
}

