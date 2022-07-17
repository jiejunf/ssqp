import { f, Watcher } from '../ubf/index.js';
import { onceMap } from './type.js';
import { pure } from './util.js';
import belts from './belts.js';
import bracelets from './bracelets.js';
import coats from './coats.js';
import earrings from './earrings.js';
import magicStones from './magicStones.js';
import necklace from './necklaces.js';
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
            necklace: necklace.clone(),
        };
        this.currentBox = pure();
        this.result = void 0;
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
        this.calc();
    }
    get detailedEquip() {
        return this._detailedEquip;
    }
    set detailedEquip(value) {
        this._detailedEquip = value;
        this.calc();
    }
    get 攻击强化百分比() {
        return this._攻击强化百分比;
    }
    set 攻击强化百分比(value) {
        this._攻击强化百分比 = value;
        this.calc();
    }
    calc() {
        const eqs = Object.values(this.currentBox);
        this.result = {
            combination: eqs.map(x => `[${x.slot}]${x.name}`).join('+'),
            detail: calculate(eqs, this.growth * (1 + this.攻击强化百分比 / 100))
        };
    }
    exportJSON() {
        const r = pure();
        const keys = [
            'currentBox',
            'database'
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
        }, '\t');
        return v;
    }
    importJSON(s) {
        const r = JSON.parse(s);
        this.currentBox = r.currentBox;
        for (const key of Object.keys(r.database)) {
            this.database[key] = new onceMap(r.database[key]);
        }
        this.calc();
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
        h('h1').addText(de.name),
        h('div').addText(de.tag.map(x => '#' + x).join(' ')),
        h('div').addText('[其他]' + de.other.join(';')),
        ...de.data.map(x => h('div').addChildren([
            h('span').addText(x.type + ':'),
            h('span').addText('值'),
            h('input').setAttributes({ type: 'number' })
                .setValue(x.value).on('change', ({ srcTarget, model }) => {
                x.value = srcTarget.valueAsNumber;
                model.calc();
            }),
            h('span').addText('适用次数'),
            h('input').setAttributes({ type: 'number' })
                .setValue(x.times).on('change', ({ srcTarget, model }) => {
                x.times = srcTarget.valueAsNumber;
                model.calc();
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
        h('span').addText(`${slot}`),
        h('select').addChildren([
            h('option').addText('<无>'),
            ...[...data.queryEquipMap(slot).values()].map(eq => h('option').addText(eq.name).setAttributes({
                title: `${eq.tag.map(x => '#' + x).join(' ')}`
            }).setStyle({
                color: (hl && eq.tag.findIndex(x => x.toLowerCase().includes(hl)) !== -1) ? 'orange' : ''
            }))
        ]).on('change', ({ model, srcTarget }) => {
            const tmp = data.getEquipByName(srcTarget.value, slot);
            if (!tmp) {
                return;
            }
            model.currentBox[slot] = tmp;
            model.detailedEquip = tmp;
        }).setValue((_b = (_a = data.currentBox[slot]) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '<无>')
    ]);
}
function ui_results(data) {
    const dr = data.result;
    if (dr) {
        return h('div').addChildren([
            h('h3').addText('搭配=' + dr.combination),
            h('div').addChildren([
                `倍率:${dr.detail.倍率.toFixed(2)}(技能攻击力:${((dr.detail.技能攻击力 - 1) * 100).toFixed(2)}%,攻击强化:${dr.detail.攻击强化.toFixed(0)})`,
                h('br'),
                `其他:${dr.detail.其他.join(' ')}`,
                h('br'),
                `标签:${dr.detail.标签.map(x => '#' + x).join(' ')}`
            ])
        ]);
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
            h('button').addText('导出json').on('click', ({ model }) => {
                navigator.clipboard.writeText(model.exportJSON()).then(() => alert('已将json信息复制到剪贴板')).catch(() => alert('复制json信息失败'));
            }),
            h('button').addText('导入json').on('click', ({ model }) => {
                navigator.clipboard.readText().then(x => model.importJSON(x)).then(() => alert('已根据剪贴的json信息构造出对应数据')).catch(() => alert('发生错误,请检查json'));
            }),
        ]),
    ]);
}
