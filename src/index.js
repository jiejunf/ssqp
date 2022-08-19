import { f, Watcher } from "../ubf/index.js";
import { Character, onceMap } from "./type.js";
import { pure } from "./util.js";
import belts from "./belts.js";
import bracelets from "./bracelets.js";
import coats from "./coats.js";
import earrings from "./earrings.js";
import magicStones from "./magicStones.js";
import necklaces from "./necklaces.js";
import pants from "./pants.js";
import rings from "./rings.js";
import shoes from "./shoes.js";
import shoulders from "./shoulders.js";
import supports from "./supports.js";
import weapons from "./weapons.js";
import { calculate } from "./cal.js";
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
        this.VERSION = '20220819';
        this.jsonInfo = '';
        this.database = this.dbInit();
        this.character = new Character;
        this.currentBox = pure();
        this.calResults = [];
        this.calResultBaseline = 0;
        this.$105史诗等级 = 1;
        this._detailedEquip = void 0;
        this.highlight = '';
        this.攻击强化百分比 = 0;
        this.diffRing = new class {
            constructor() {
                this.index = 0;
                this.limit = 2;
                this.content = [];
                this.diff = [];
            }
            push(a) {
                this.content[this.index] = a;
                this.index++;
                this.index %= this.limit;
                this.updateDiff();
            }
            updateDiff() {
                if (this.content.length !== this.limit) {
                    return;
                }
                this.diff.length = 0;
                for (let i = 0, l = this.content[0].length; i < l; i++) {
                    if (this.content[0][i] !== this.content[1][i]) {
                        this.diff.push(i);
                    }
                }
            }
        };
    }
    dbInit() {
        return {
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
            necklaces: necklaces.clone(),
        };
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
            case '项链': return this.database.necklaces;
        }
    }
    getEquipByName(name, slot) {
        return this.queryEquipMap(slot).get(name);
    }
    get detailedEquip() {
        return this._detailedEquip;
    }
    set detailedEquip(value) {
        this._detailedEquip = value;
    }
    clearResult() {
        this.calResults.length = 0;
    }
    calc(combName = this.calResults.length.toString()) {
        const eqs = Object.entries(this.currentBox).map(([slot, eqName]) => {
            return this.getEquipByName(eqName, slot);
        }).filter(x => x);
        this.calResults.push({
            combination: eqs.map(x => `[${x.slot}]${x.name}`),
            detail: calculate(eqs, this.$105史诗等级, this.攻击强化百分比, this.character),
            json: this.exportJSON(),
            name: combName
        });
    }
    exportJSON() {
        const r = pure();
        const keys = [
            'currentBox',
            'database',
            '$105史诗等级',
            '攻击强化百分比',
            'character',
            'VERSION'
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
        if (r.VERSION !== this.VERSION) {
            alert('导入错误:版本不对应');
            return;
        }
        this.currentBox = (_a = r.currentBox) !== null && _a !== void 0 ? _a : this.currentBox;
        this.$105史诗等级 = (_b = r.$105史诗等级) !== null && _b !== void 0 ? _b : this.$105史诗等级;
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
                color: (hl && ((eq.tag.findIndex(x => x.toLowerCase().includes(hl)) !== -1)
                    ||
                        (eq.data.findIndex(x => x.type.toLowerCase().includes(hl)) !== -1))) ? 'orange' : ''
            }))
        ])
            .on('change', ({ model, srcTarget }) => {
            model.currentBox[slot] = srcTarget.value;
            model.detailedEquip = model.getEquipByName(srcTarget.value, slot);
        }).setValue((_b = (_a = data.getEquipByName(data.currentBox[slot], slot)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '<无>').on('click', ({ model }) => {
            model.detailedEquip = model.getEquipByName(model.currentBox[slot], slot);
        })
    ]).setStyle({ marginBottom: '5px' });
}
function ui_results(data) {
    const drs = data.calResults;
    if (drs.length) {
        return h('div').addChildren(drs.map((dr, i) => {
            return h('div').addChildren([
                h('input').setValue(dr.name).setAttributes({
                    title: '搭配名称',
                    placeholder: '搭配名称'
                }).on('change', ({ flush, srcTarget }) => {
                    dr.name = srcTarget.value;
                }),
                h('strong').addText('搭配=').addChildren(dr.combination.map((x, i) => {
                    const sp = h('span');
                    sp.addChild(h('span').addText(x).setStyle({
                        color: (function () {
                            if (!data.diffRing.diff.includes(i)) {
                                return '';
                            }
                            if (data.diffRing.content[0] === dr.combination) {
                                return 'purple';
                            }
                            if (data.diffRing.content[1] === dr.combination) {
                                return 'blue';
                            }
                            return '';
                        })()
                    }));
                    if (i !== dr.combination.length - 1) {
                        sp.addText('+');
                    }
                    return sp;
                })).on('click', ({ model }) => {
                    model.diffRing.push(dr.combination);
                }).setStyle({
                    cursor: 'pointer',
                    userSelect: 'none'
                }).setAttributes({ title: '点击两个搭配以比较装备的差异' }),
                h('button').addText('设为基准').on('click', ({ model }) => {
                    model.calResultBaseline = dr.detail.倍率;
                }),
                h('button').addText('导出json').on('click', () => {
                    navigator.clipboard.writeText(dr.json).then(() => { alert('已成功复制json信息到剪贴板'); }).catch(() => { alert('数据导出失败'); });
                }),
                h('button').addText('删除').on('click', ({ flush }) => {
                    if (!confirm('将删除结果条目，要继续吗？')) {
                        return;
                    }
                    drs.splice(i, 1);
                    flush();
                }),
                h('div').addChildren([
                    h('strong').setStyle({ color: 'red' }).addText(data.calResultBaseline ? `比例:${(dr.detail.倍率 / data.calResultBaseline * 100).toFixed(2)}%` : `倍率:${dr.detail.倍率.toFixed(2)}`),
                    h('br'),
                    dr.detail.说明,
                    h('br'),
                    `技能攻击力:${dr.detail['技能攻击力%']}%,攻击强化:${dr.detail.攻击强化.toFixed(0)},属强:${dr.detail.最高属强},异常伤害增加:${(dr.detail.最高异常伤害提升 * 100).toFixed(0)}%`,
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
            h('span').addText('105史诗等级'),
            h('input').setAttributes({ type: 'number' }).setValue(data.$105史诗等级).on('change', ({ model, srcTarget }) => {
                model.$105史诗等级 = srcTarget.valueAsNumber;
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
            h('button').addText('清空结果').on('click', ({ model }) => {
                if (!confirm('将清空全部结果，要继续吗?')) {
                    return;
                }
                model.clearResult();
            }),
            h('button').addText('清空基准').on('click', ({ model }) => {
                model.calResultBaseline = 0;
            })
        ]),
        h('div').addChildren([
            h('button').addText('重置装备数据').on('click', ({ model }) => {
                model.database = model.dbInit();
            })
        ]),
        h('div').addChildren([
            h('button').addText('导入json').on('click', ({ model }) => {
                navigator.clipboard.readText().then(x => model.importJSON(x)).then(() => alert('已根据剪贴的json信息构造出对应数据')).catch(() => alert('发生错误,请检查json'));
            }),
        ]),
        h('div').addChildren([
            h('button').addText('从txt导入计算结果').on('click', () => {
                document.getElementById('fileAcc').click();
            }),
            h('input').setAttributes({
                type: 'file',
                id: 'fileAcc',
                accept: 'text/plain'
            }).on('change', ({ model, srcTarget }) => {
                var _a;
                const file = (_a = srcTarget.files) === null || _a === void 0 ? void 0 : _a[0];
                if (!file) {
                    return;
                }
                const fr = new FileReader;
                fr.onload = () => {
                    const content = fr.result;
                    let status = 0;
                    let combName = '';
                    for (let line of content.split('\n')) {
                        line = line.trim();
                        if (!line) {
                            continue;
                        }
                        if (status === 0) {
                            if (line.startsWith('#')) {
                                combName = line.slice(1);
                            }
                            else {
                                throw new Error('格式错误:不为#开头');
                            }
                            status = 1;
                        }
                        else {
                            model.importJSON(line);
                            model.calc(combName);
                            status = 0;
                        }
                    }
                    fr.onload = null;
                    srcTarget.value = '';
                };
                fr.readAsText(file);
            }).setStyle({ display: 'none' }),
            h('button').addText('下载所有计算结果').on('click', ({ model }) => {
                if (!confirm('要继续吗?')) {
                    return;
                }
                const texts = [];
                const names = [];
                for (const result of model.calResults) {
                    names.push(result.name);
                    texts.push('#' + result.name, result.json);
                }
                const text_str = texts.join('\n');
                const url = URL.createObjectURL(new Blob([
                    text_str
                ], {
                    type: 'text/plain'
                }));
                const a = document.createElement('a');
                a.href = url;
                a.download = '搭配#' + names.join('_') + '.txt';
                a.click();
            }),
        ]),
    ]);
}

