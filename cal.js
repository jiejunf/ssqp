export function calculate(eqs, t) {
    let 攻击强化 = 0;
    let 技能攻击力 = 1;
    let 标签 = [];
    let 其他 = [];
    for (const { data, tag, other } of eqs) {
        标签.push(...tag);
        其他.push(...other);
        for (const unit of data) {
            switch (unit.type) {
                case '技能攻击力':
                    技能攻击力 *= 1 + unit.value / 100 * unit.times;
                    break;
                default:
                    攻击强化 += unit.value * unit.times;
                    break;
            }
        }
    }
    攻击强化 *= t;
    return {
        攻击强化,
        技能攻击力,
        倍率: (攻击强化 + 1000) / 1000 * 技能攻击力,
        标签,
        其他
    };
}
