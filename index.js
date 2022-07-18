import { f, Watcher } from '../ubf/index.js';
import { Character, onceMap } from './type.js';
import { pure } from './util.js';
import belts from './belts.js';
import bracelets from './bracelets.js';
import coats from './coats.js';
import earrings from './earrings.js';
import magicStones from './magicStones.js';
import necklaces from './necklaces.js';
import pants from './pants.js';
import rings from './rings.js';
import shoes from './shoes.js';
import shoulders from './shoulders.js';
import supports from './supports.js';
import weapons from './weapons.js';
import { calculate } from './cal.js';
const prefix = '105级装备数值速算';
const slotNames = [
    '上衣',
    '下装',
    '护肩',
    '腰带',
    '鞋子',
    '手镯',
    '戒指',
    '项链',
    '左槽',
    '右槽',
    '耳环',
    '武器'
];
function has(item, key) {
    return key in item;
}
function keys(item) {
    return Object.keys(item);
}
class Data {
    constructor() {
        this.jsonInfo = '';
        this.database = {
            coats: coats.clone(),
            pants: pants.clone(),
            magicStones: magicStones.clone(),
            supports: supports.clone(),
            rings: rings.clone(),
            bracelets: bracelets.clone(),
            shoulders: shoulders.clone(),
            weapons: weapons.clone(),
            earrings: earrings.clone(),
            belts: belts.clone(),
            shoes: shoes.clone(),
            necklace: necklaces.clone(),
        };
        this.character = new Character;
        this.currentBox = pure();
        this.results = [];
        this._growth = 1;
        this._detailedEquip = void 0;
        this.highlight = '';
        this._攻击强化百分比 = 0;
    }
    queryEquipMap(slot) {
        switch (slot) {
            case '上衣': return this.database.coats;
            case '下装': return this.database.pants;
            case '右槽': return this.database.magicStones;
            case '左槽': return this.database.supports;
            case '戒指': return this.database.rings;
            case '手镯': return this.database.bracelets;
            case '护肩': return this.database.shoulders;
            case '武器': return this.database.weapons;
            case '耳环': return this.database.earrings;
            case '腰带': return this.database.belts;
            case '鞋子': return this.database.shoes;
            case '项链': return this.database.necklace;
        }
    }
    getEquipByName(name, slot) {
        return this.queryEquipMap(slot).get(name);
    }
    get growth() {
        return this._growth;
    }
    set growth(value) {
        this._growth = value;
    }
    get detailedEquip() {
        return this._detailedEquip;
    }
    set detailedEquip(value) {
        this._detailedEquip = value;
    }
    get 攻击强化百分比() {
        return this._攻击强化百分比;
    }
    set 攻击强化百分比(value) {
        this._攻击强化百分比 = value;
    }
    clearResult() {
        this.results.length = 0;
    }
    calc() {
        const eqs = Object.values(this.currentBox);
        this.results.push({
            combination: eqs.map(x => `[${x.slot}]${x.name}`).join('+'),
            detail: calculate(eqs, this.growth * (1 + this.攻击强化百分比 / 100), this.character)
        });
    }
    exportJSON() {
        const r = pure();
        const keys = [
            'currentBox',
            'database',
            'growth',
            '攻击强化百分比',
            'character'
        ];
        for (const key of keys) {
            r[key] = this[key];
        }
        let v = JSON.stringify(r, function (_key, value) {
            if (value instanceof Set || value instanceof Map) {
                return [...value];
            }
            else {
                return value;
            }
        });
        return v;
    }
    importJSON(s) {
        var _a, _b, _c, _d;
        const r = JSON.parse(s);
        this.currentBox = (_a = r.currentBox) !== null && _a !== void 0 ? _a : this.currentBox;
        this.growth = (_b = r.growth) !== null && _b !== void 0 ? _b : this.growth;
        this.攻击强化百分比 = (_c = r.攻击强化百分比) !== null && _c !== void 0 ? _c : this.攻击强化百分比;
        this.character = (_d = r.character) !== null && _d !== void 0 ? _d : this.character;
        for (const key of Object.keys(r.database)) {
            this.database[key] = new onceMap(r.database[key]);
        }
    }
}
const h = f();
const wt = new Watcher({
    target: document.querySelector('#app'),
    root(data) {
        return ui_app(data);
    },
    data: new Data,
    listened: ['change', 'click']
});
function ui_app(data) {
    return h('div').addChildren([
        ui_selections(data).setStyle({ gridArea: 'a', borderRight: '1px solid black' }),
        ui_equip_detail(data).setStyle({ gridArea: 'b', borderRight: '1px solid black' }),
        ui_results(data).setStyle({ gridArea: 'd', borderTop: '1px solid black' }),
        ui_controls(data).setStyle({ gridArea: 'c' }),
    ]).setStyle({
        display: 'grid',
        gridTemplateAreas: `
			'a b c'
			'd d d'
		`,
        gridTemplateColumns: 'repeat(3,1fr)'
    });
}
function ui_equip_detail(data) {
    const de = data.detailedEquip;
    if (!de) {
        return h('div');
    }
    return h('div').addChildren([
        h('h2').addText(de.name),
        h('strong').addText(de.slot),
        h('div').addText(de.tag.map(x => '#' + x).join(' ')),
        h('div').addText('[其他]' + de.other.join(';')),
        ...de.data.map(x => h('div').addChildren([
            h('span').addText(x.type + ':'),
            h('span').addText('值'),
            h('input').setAttributes({ type: 'number' })
                .setValue(x.value).on('change', ({ srcTarget, model }) => {
                x.value = srcTarget.valueAsNumber;
            }),
            h('span').addText('适用次数'),
            h('input').setAttributes({ type: 'number' })
                .setValue(x.times).on('change', ({ srcTarget, model }) => {
                x.times = srcTarget.valueAsNumber;
            }),
        ]))
    ]).setStyle({ textAlign: 'center' });
}
function ui_selections(data) {
    return h('div').addChildren(slotNames.map(x => ui_selections_piece(data, x))).setStyle({ cursor: 'pointer' });
}
function ui_selections_piece(data, slot) {
    var _a, _b;
    const hl = data.highlight.toLowerCase();
    return h('div').addChildren([
        h('select').addChildren([
            h('option').setValue(`<无>`).addText(`[${slot}]<无>`),
            ...[...data.queryEquipMap(slot).values()].map(eq => h('option').setValue(eq.name).addText(`[${slot}]${eq.name}`).setAttributes({
                title: `${eq.tag.map(x => '#' + x).join(' ')}`
            }).setStyle({
                color: (hl && eq.tag.findIndex(x => x.toLowerCase().includes(hl)) !== -1) ? 'orange' : ''
            }))
        ])
            .on('change', ({ model, srcTarget }) => {
            const tmp = data.getEquipByName(srcTarget.value, slot);
            if (!tmp) {
                return;
            }
            model.currentBox[slot] = tmp;
            model.detailedEquip = tmp;
        }).setValue((_b = (_a = data.currentBox[slot]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '<无>').on('click', ({ model }) => {
            model.detailedEquip = model.currentBox[slot];
        })
    ]);
}
function ui_results(data) {
    const drs = data.results;
    if (drs.length) {
        return h('div').addChildren(drs.map((dr, i) => {
            return h('div').addChildren([
                h('strong').addText('搭配=' + dr.combination),
                h('button').addText('删除').on('click', ({ flush }) => {
                    drs.splice(i, 1);
                    flush();
                }),
                h('div').addChildren([
                    h('strong').setStyle({ color: 'red' }).addText(`倍率:${dr.detail.倍率.toFixed(2)}`),
                    h('br'),
                    dr.detail.说明,
                    h('br'),
                    `技能攻击力:${((dr.detail.技能攻击力 - 1) * 100).toFixed(2)}%,攻击强化:${dr.detail.攻击强化.toFixed(0)},属强:${dr.detail.最高属强},异常伤害增加:${(dr.detail.最高异常伤害提升 * 100).toFixed(0)}%`,
                    h('br'),
                    `冷却时间减少%:${100 - dr.detail['冷却时间%']}`,
                    h('br'),
                    `其他:${dr.detail.其他.join(' ')}`,
                    h('br'),
                    `标签:${dr.detail.标签.map(x => '#' + x).join(' ')}`
                ])
            ]).setStyle({ borderBottom: '1px solid black' });
        }));
    }
    return h('div');
}
function ui_controls(data) {
    return h('div').addChildren([
        h('div').addChildren([
            h('span').addText('高亮标签'),
            h('input').setValue(data.highlight).on('change', ({ model, srcTarget }) => {
                model.highlight = srcTarget.value;
            })
        ]),
        h('div').addChildren([
            h('span').addText('攻击强化成长系数'),
            h('input').setAttributes({ type: 'number' }).setValue(data.growth).on('change', ({ model, srcTarget }) => {
                model.growth = srcTarget.valueAsNumber;
            })
        ]),
        h('div').addChildren([
            h('span').addText('攻击强化%'),
            h('input').setAttributes({ type: 'number' }).setValue(data.攻击强化百分比).on('change', ({ model, srcTarget }) => {
                model.攻击强化百分比 = srcTarget.valueAsNumber;
            })
        ]),
        h('div').addChildren([
            h('span').addText('冷却减少%'),
            h('input').setAttributes({ type: 'number' }).setValue((1 - data.character.cd) * 100 >>> 0).on('change', ({ model, srcTarget }) => {
                model.character.cd = +(1 - srcTarget.valueAsNumber / 100).toFixed(2);
            })
        ]),
        h('div').addChildren([
            h('strong').addText('固有属强'),
            ...Object.entries(data.character.elementIncrease).map(([k, v]) => h('span').addChildren([
                h('span').addText(k),
                h('input').setAttributes({ type: 'number' }).setValue(v).on('change', ({ model, srcTarget }) => {
                    model.character.elementIncrease[k] = srcTarget.valueAsNumber;
                })
            ]))
        ]),
        h('div').addChildren([
            h('button').addText('计算').on('click', ({ model }) => {
                model.calc();
            }),
            h('button').addText('清空').on('click', ({ model }) => {
                model.clearResult();
            })
        ]),
        h('br'),
        h('div').addChildren([
            h('button').addText('导出json').on('click', ({ model }) => {
                navigator.clipboard.writeText(model.exportJSON()).then(() => alert('已将json信息复制到剪贴板')).catch(() => alert('复制json信息失败'));
            }),
            h('button').addText('导入json').on('click', ({ model }) => {
                navigator.clipboard.readText().then(x => model.importJSON(x)).then(() => alert('已根据剪贴的json信息构造出对应数据')).catch(() => alert('发生错误,请检查json'));
            }),
        ]),
    ]);
}
