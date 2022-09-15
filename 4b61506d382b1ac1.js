import { f, Watcher } from "./c3b3404bc419612e.js";
import { Character, eqAttrTypeWords, onceMap } from "./fca69cda69b4f22.js";
import { pure } from "./4ec836d061f4fc50.js";
import { calculate } from "./311a82e0d5868018.js";
//===标准装备===
import belts from "./20960607b2411b34.js";
import bracelets from "./663e79a8dac21c1.js";
import coats from "./eebf70b6edf36fab.js";
import earrings from "./4efb916bd93d89af.js";
import magicStones from "./e4c380ffa643a4aa.js";
import necklaces from "./4c80f5df14bc4dfb.js";
import pants from "./b271ff6ffc58227.js";
import rings from "./f1865b192d788d51.js";
import shoes from "./df75f44477bb116e.js";
import shoulders from "./9d909d386c5e27f0.js";
import supports from "./2fc8fc8e8fe1f9f3.js";
import weapons from "./fc4dac38261454e5.js";
//===贴膜装备===
import ex_belts from "./d9562725b4b656ed.js";
import ex_bracelets from "./dae0cd7c1c4c6099.js";
import ex_coats from "./1be1b7c25cfa048e.js";
import ex_earrings from "./104fba4d2139c97e.js";
import ex_magicStones from "./6d503319373083ad.js";
import ex_necklaces from "./6af4aea1a1bbefe.js";
import ex_pants from "./72a2690690ca594e.js";
import ex_rings from "./2e7be1c2cb06d3be.js";
import ex_shoes from "./670b5aa28a2c771f.js";
import ex_shoulders from "./9cddf436e363c36e.js";
import ex_supports from "./d01223775176b36c.js";
import ex_weapons from "./2acb845f3d9b630e.js";
const normalSlotNames = [
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
const extraSlotNames = [
    /*'ex上衣',
    'ex下装',
    'ex护肩',
    'ex腰带',
    'ex鞋子',*/
    'ex手镯',
    'ex戒指',
    'ex项链',
    /*'ex左槽',
    'ex右槽',
    'ex耳环',
    'ex武器'*/
];
function has(item, key) {
    return key in item;
}
function keys(item) {
    return Object.keys(item);
}
class Data {
    constructor() {
        this.VERSION = '20220906';
        this.jsonInfo = '';
        this.database = this.dbInit();
        this.databaseEx = this.exDbInit();
        this.character = new Character;
        this.currentNormalBox = pure();
        this.currentExtraBox = pure();
        this.calResults = [];
        this.calResultBaseline = 0;
        this.$105史诗等级 = 1;
        this.detailedEquip = void 0;
        this.highlight = '';
        this.攻击强化百分比 = 0;
        this.equipShowMode = '标准';
        this.jsonKeys = [
            'currentNormalBox',
            'currentExtraBox',
            'database',
            'databaseEx',
            '$105史诗等级',
            '攻击强化百分比',
            'character',
            'VERSION',
        ];
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
    importColgList(x) {
        const dict = {
            '武器': '武器',
            '上衣': '上衣',
            '头肩': '护肩',
            '腰带': '腰带',
            '下装': '下装',
            '鞋子': '鞋子',
            '项链': '项链',
            '戒指': '戒指',
            '手镯': '手镯',
            '辅助装备': '左槽',
            '魔法石': '右槽',
            '耳环': '耳环',
        };
        for (const line of x.split(/\r?\n/).map(x => x.trim()).filter(x => !!x)) {
            const [eqSlot, eqName] = line.split('———');
            const trEqSlot = dict[eqSlot];
            if ((!trEqSlot) || (!eqName)) {
                throw '错误,请检查清单';
            }
            this.currentNormalBox[trEqSlot] = eqName;
        }
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
    exDbInit() {
        return {
            coats: ex_coats.clone(),
            pants: ex_pants.clone(),
            magicStones: ex_magicStones.clone(),
            supports: ex_supports.clone(),
            rings: ex_rings.clone(),
            bracelets: ex_bracelets.clone(),
            shoulders: ex_shoulders.clone(),
            weapons: ex_weapons.clone(),
            earrings: ex_earrings.clone(),
            belts: ex_belts.clone(),
            shoes: ex_shoes.clone(),
            necklaces: ex_necklaces.clone(),
        };
    }
    queryNormalEquipMap(slot) {
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
    getNormalEquipByName(name, slot) {
        return this.queryNormalEquipMap(slot).get(name);
    }
    queryExtraEquipMap(slot) {
        switch (slot) {
            case 'ex上衣': return this.databaseEx.coats;
            case 'ex下装': return this.databaseEx.pants;
            case 'ex右槽': return this.databaseEx.magicStones;
            case 'ex左槽': return this.databaseEx.supports;
            case 'ex戒指': return this.databaseEx.rings;
            case 'ex手镯': return this.databaseEx.bracelets;
            case 'ex护肩': return this.databaseEx.shoulders;
            case 'ex武器': return this.databaseEx.weapons;
            case 'ex耳环': return this.databaseEx.earrings;
            case 'ex腰带': return this.databaseEx.belts;
            case 'ex鞋子': return this.databaseEx.shoes;
            case 'ex项链': return this.databaseEx.necklaces;
        }
    }
    getExtraEquipByName(name, slot) {
        return this.queryExtraEquipMap(slot).get(name);
    }
    clearResult() {
        this.calResults.length = 0;
    }
    calc(combName = this.calResults.length.toString()) {
        const normalEqs = Object.entries(this.currentNormalBox).map(([slot, eqName]) => {
            return this.getNormalEquipByName(eqName, slot);
        }).filter(x => !!x);
        const extraEqs = Object.entries(this.currentExtraBox).map(([slot, eqName]) => {
            return this.getExtraEquipByName(eqName, slot);
        }).filter(x => !!x);
        this.calResults.push({
            combination: [...normalEqs, ...extraEqs].map(x => `[${x.slot}]${x.name}`),
            detail: calculate(normalEqs, extraEqs, this.$105史诗等级, this.攻击强化百分比, this.character),
            json: this.exportJSON(),
            combName: combName
        });
    }
    exportJSON() {
        const r = pure();
        for (const key of this.jsonKeys) {
            r[key] = this[key];
        }
        let v = JSON.stringify(r, (_, value) => {
            if (value instanceof onceMap) {
                return { __prototype: 'onceMap', content: [...value] };
            }
            else {
                return value;
            }
        });
        return v;
    }
    importJSON(s) {
        var _a;
        const r = JSON.parse(s, (_, value) => {
            if (value.__prototype === 'onceMap') {
                return new onceMap(value.content);
            }
            else {
                return value;
            }
        });
        console.log(r);
        if (r.VERSION !== this.VERSION) {
            alert('错误:版本不对应!');
            throw '错误:版本不对应!';
        }
        for (const key of this.jsonKeys) {
            this[key] = (_a = r[key]) !== null && _a !== void 0 ? _a : this[key];
        }
    }
}
const h = f();
const wt = new Watcher({
    target: document.querySelector('#app'),
    root(data) {
        return ui_components.ui_app(data);
    },
    data: new Data,
    listened: ['change', 'click']
});
var ui_components;
(function (ui_components) {
    function ui_app(data) {
        return h('div').addChildren([
            ui_selections(data).setStyle({ gridArea: 'a', borderRight: '1px solid black' }),
            ui_equip_detail(data).setStyle({ gridArea: 'b' }),
            ui_results(data).setStyle({ gridArea: 'd', borderTop: '1px solid black' }),
            ui_controls(data).setStyle({ gridArea: 'c', borderTop: '1px solid black', padding: '3px 0' }),
        ]).setStyle({
            display: 'grid',
            gridTemplateAreas: `
			'a b'
			'c c'
			'd d'
		`,
            gridTemplateColumns: 'repeat(2,1fr)'
        });
    }
    ui_components.ui_app = ui_app;
    function ui_equip_attr_detail(attr, meta) {
        return h('div').addChildren([
            h('select').setValue(attr.type).addChildren(eqAttrTypeWords.map(x => h('option').addText(x)))
                .on('change', ({ flush, srcTarget }) => {
                if (confirm('将要修改词条类型,要继续吗')) {
                    attr.type = srcTarget.value;
                }
                else {
                    srcTarget.value = attr.type;
                }
                flush();
            }),
            h('input').setAttributes({ type: 'number', title: '值', placeholder: '值' }).setValue(attr.value).on('change', ({ flush, srcTarget }) => {
                attr.value = srcTarget.valueAsNumber;
                flush();
            }),
            '*',
            h('input').setAttributes({ type: 'number', title: '次数', placeholder: '次数' }).setValue(attr.times).on('change', ({ flush, srcTarget }) => {
                attr.times = srcTarget.valueAsNumber;
                flush();
            }),
            h('button').addText('删除').on('click', ({ flush }) => {
                if (!confirm('将要删除装备属性,要继续吗')) {
                    return;
                }
                if (meta.attrs[meta.index] === attr) {
                    meta.attrs.splice(meta.index, 1);
                    flush();
                }
            })
        ]);
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
            h('button').addText('添加词条').on('click', ({ flush }) => {
                de.attrs.push({
                    type: '攻击强化',
                    times: 1,
                    value: 0
                });
                flush();
            }),
            ...de.attrs.map((x, i, arr) => ui_equip_attr_detail(x, {
                attrs: arr,
                index: i
            }))
        ]).setStyle({ textAlign: 'center' });
    }
    function ui_selections(data) {
        return h('div').addChildren([
            (() => {
                if (data.equipShowMode === '标准') {
                    return h('div').addChildren(normalSlotNames.map(x => ui_selections_normal_piece(data, x)));
                }
                else {
                    return h('div').addChildren(extraSlotNames.map(x => ui_selections_extra_piece(data, x)));
                }
            })(),
            h('button').addText(`当前装备列表:[${data.equipShowMode}],点击切换`).on('click', ({ model }) => {
                switch (model.equipShowMode) {
                    case '标准':
                        model.equipShowMode = '贴膜';
                        break;
                    default:
                        model.equipShowMode = '标准';
                        break;
                }
            })
        ]).setStyle({
            cursor: 'pointer',
            display: 'grid',
            gridTemplateColumns: '9fr 3fr'
        });
    }
    function ui_selections_normal_piece(data, slot) {
        var _a, _b;
        const hl = data.highlight.toLowerCase();
        return h('div').addChildren([
            h('select').addChildren([
                h('option').setValue(`<无>`).addText(`[${slot}]<无>`),
                ...[...data.queryNormalEquipMap(slot).values()].map(eq => h('option').setValue(eq.name).addText(`[${slot}]${eq.name}`).setAttributes({
                    title: `${eq.tag.map(x => '#' + x).join(' ')}`
                }).setStyle({
                    color: (hl && (eq.name.includes(hl)
                        ||
                            eq.tag.some(x => x.toLowerCase().includes(hl))
                        ||
                            eq.attrs.some(x => x.type.toLowerCase().includes(hl)))) ? 'orange' : ''
                }))
            ])
                .on('change', ({ model, srcTarget }) => {
                model.currentNormalBox[slot] = srcTarget.value;
                model.detailedEquip = model.getNormalEquipByName(srcTarget.value, slot);
            }).setValue((_b = (_a = data.getNormalEquipByName(data.currentNormalBox[slot], slot)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '<无>').on('click', ({ model }) => {
                model.detailedEquip = model.getNormalEquipByName(model.currentNormalBox[slot], slot);
            })
        ]).setStyle({ marginBottom: '5px' });
    }
    function ui_selections_extra_piece(data, slot) {
        var _a, _b;
        const hl = data.highlight.toLowerCase();
        return h('div').addChildren([
            h('select').addChildren([
                h('option').setValue(`<无>`).addText(`[${slot}]<无>`),
                ...[...data.queryExtraEquipMap(slot).values()].map(eq => h('option').setValue(eq.name).addText(`[${slot}]${eq.name}`).setAttributes({
                    title: `${eq.tag.map(x => '#' + x).join(' ')}`
                }).setStyle({
                    color: (hl && (eq.name.includes(hl)
                        ||
                            eq.tag.some(x => x.toLowerCase().includes(hl))
                        ||
                            eq.attrs.some(x => x.type.toLowerCase().includes(hl)))) ? 'orange' : ''
                }))
            ])
                .on('change', ({ model, srcTarget }) => {
                model.currentExtraBox[slot] = srcTarget.value;
                model.detailedEquip = model.getExtraEquipByName(srcTarget.value, slot);
            }).setValue((_b = (_a = data.getExtraEquipByName(data.currentExtraBox[slot], slot)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '<无>').on('click', ({ model }) => {
                model.detailedEquip = model.getExtraEquipByName(model.currentExtraBox[slot], slot);
            })
        ]).setStyle({ marginBottom: '5px' });
    }
    function ui_results(data) {
        const drs = data.calResults;
        if (drs.length) {
            return h('div').addChildren(drs.map((dr, i) => {
                return h('div').addChildren([
                    h('input').setValue(dr.combName).setAttributes({
                        title: '搭配名称',
                        placeholder: '搭配名称'
                    }).on('change', ({ srcTarget, flush }) => {
                        dr.combName = srcTarget.value;
                        flush();
                    }).setStyle({ width: `${dr.combName.length + 1}rem` }),
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
                        `105史诗平均等级:${data.$105史诗等级}`,
                        h('br'),
                        h('pre').addText(dr.detail.说明).setStyle({ fontSize: '1rem', margin: '0', padding: '0' }),
                        `技能攻击力:${dr.detail['技能攻击力']}%,攻击强化:${dr.detail.攻击强化.toFixed(0)},属强:${dr.detail.最高属强},异常伤害增加:${(dr.detail.最高异常伤害提升 * 100).toFixed(0)}%`,
                        h('br'),
                        `冷却时间减少%:${100 - dr.detail['冷却时间']}`,
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
                h('span').addText('搜索'),
                h('input').setValue(data.highlight).on('change', ({ model, srcTarget }) => {
                    model.highlight = srcTarget.value;
                })
            ]),
            h('div').addChildren([
                h('span').addText('105史诗等级(均)'),
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
                h('input').setAttributes({ type: 'number' }).setValue((1 - data.character.冷却) * 100 >>> 0).on('change', ({ model, srcTarget }) => {
                    model.character.冷却 = +(1 - srcTarget.valueAsNumber / 100).toFixed(2);
                })
            ]),
            h('div').addChildren([
                h('strong').addText('固有属强').on('click', ({ model }) => {
                    const val = prompt('一键修改所有属强值');
                    if (!val) {
                        return;
                    }
                    const nval = +val;
                    if (nval >= 0) {
                        model.character.固有属强.火 = nval;
                        model.character.固有属强.冰 = nval;
                        model.character.固有属强.光 = nval;
                        model.character.固有属强.暗 = nval;
                    }
                }).setAttributes({ title: '点击以修改所有属强值' }).setStyle({ cursor: 'pointer' }),
                ...Object.entries(data.character.固有属强).map(([k, v]) => h('span').addChildren([
                    h('span').addText(k),
                    h('input').setAttributes({ type: 'number' }).setValue(v).on('change', ({ model, srcTarget }) => {
                        model.character.固有属强[k] = srcTarget.valueAsNumber;
                    })
                ]))
            ]),
            h('div').addChildren([
                h('strong').addText('攻速鞋计入的装备外攻速'),
                h('input').setAttributes({ type: 'number' }).setValue(data.character.装备以外_攻速鞋适用攻速).on('change', ({ model, srcTarget }) => {
                    data.character.装备以外_攻速鞋适用攻速 = srcTarget.valueAsNumber;
                })
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
                h('button').addText('结果排序').on('click', ({ model }) => {
                    model.calResults.sort((a, b) => b.detail.倍率 - a.detail.倍率);
                }),
                h('button').addText('清空基准').on('click', ({ model }) => {
                    model.calResultBaseline = 0;
                })
            ]),
            h('div').addChildren([
                h('button').addText('重置当前装备数据').on('click', ({ model }) => {
                    if (confirm('确定要重置当前装备数据吗')) {
                        model.database = model.dbInit();
                    }
                }),
                h('button').addText('重置所有结果中的装备数据').on('click', ({ model }) => {
                    if (!confirm('确定要重置所有结果中的装备数据吗')) {
                        return;
                    }
                    const oldResSize = model.calResults.length;
                    model.calResults.forEach(r => {
                        model.importJSON(r.json);
                        model.database = model.dbInit();
                        model.calc(r.combName);
                    });
                    model.calResults.splice(0, oldResSize);
                }),
            ]),
            h('div').addChildren([
                h('button').addText('导入colg模拟器装备清单').on('click', ({ model }) => {
                    navigator.clipboard.readText().then(x => model.importColgList(x)).then(() => alert('已从剪贴板导入colg模拟器清单')).catch(e => alert(e));
                }),
                h('button').addText('导入json').on('click', ({ model }) => {
                    navigator.clipboard.readText().then(x => model.importJSON(x)).then(() => alert('已根据剪贴板的json信息构造出对应数据')).catch(() => alert('发生错误,请检查json'));
                }),
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
                        names.push(result.combName);
                        texts.push('#' + result.combName, result.json);
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
})(ui_components || (ui_components = {}));
