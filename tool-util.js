export function arraysComboEach(table, fArg, fIdx) {
    let argNames = [];
    let contents = ['\tconst list=[],idxList=[];\n\t'];
    let idxNames = [];
    for (let i = 0, m = table, l = m.length; i < l; i++) {
        let idxn = 'idx' + i;
        let argn = 'arr' + i;
        let ln = 'l' + i;
        let tab = '\t'.repeat(i + 2);
        argNames.push(argn);
        idxNames.push(idxn);
        contents.push(`for(let ${idxn}=0,${ln}=${argn}.length;${idxn}<${ln};${idxn}++){\n${tab}list[${i}]=${argn}[${idxn}];idxList[${i}]=${idxn};\n${tab}`);
    }
    contents.push(`const middleValue=f0(list);const result=f1(middleValue,list,idxList);\n`);
    argNames.push('f0', 'f1');
    for (let m = table, i = m.length; i; i--) {
        let tab = '\t'.repeat(i);
        contents.push(tab + '}\n');
    }
    let gf = new Function(...argNames, contents.join(''));
    if (globalThis.$debug)
        console.log(gf + '');
    return gf(...table, fArg, fIdx);
}
export function has(item, key) {
    return key in item;
}
export function keys(item) {
    return Reflect.ownKeys(item);
}
export class Table {
    constructor(dimensions, example) {
        this.stack = [];
        this.dimensions = dimensions;
    }
    get(pos) {
        return this.stack[this.getIndex(pos)];
    }
    set(pos, value) {
        this.stack[this.getIndex(pos)] = value;
    }
    delete(pos) {
        this.set(pos, undefined);
    }
    arrayLikePush(value) {
        this.stack.push(value);
    }
    getIndex(pos) {
        if (!pos.length) {
            throw new Error('pos should not be an empty array.');
        }
        if (pos.length !== this.dimensions.length) {
            throw new Error('pos should have same length with the dimensions of this table.');
        }
        let index = 0;
        for (let i = pos.length - 1, K = 1; i >= 0; i--) {
            const pi = pos[i];
            const di = this.dimensions[i];
            if (pi >= di) {
                throw new Error(`${i}th component ${pi} outs range of ${di} sized base.`);
            }
            index += pi * K;
            K *= this.dimensions[i];
        }
        return index;
    }
}
export class MaxStack {
    constructor(compare) {
        this.stack = [];
        this.compare = compare;
    }
    get size() {
        return this.stack.length;
    }
    get top() {
        return this.stack[0];
    }
    get(i) {
        return this.stack[i];
    }
    indexOf(item) {
        return this.stack.indexOf(item);
    }
    swap(a, b) {
        [this.stack[a], this.stack[b]] = [this.stack[b], this.stack[a]];
    }
    add(item) {
        this.stack.push(item);
        let i = this.size;
        for (; i;) {
            const p = this.parent(i);
            const a = this.get(i);
            const b = this.get(p);
            if (this.compare(a, b) > 0) {
                this.swap(i, p);
                i = p;
            }
            else {
                return i;
            }
        }
        return i;
    }
    delete(item) {
        throw new Error('never implements.');
    }
    parent(i) {
        return Math.floor(i / 2);
    }
    leftChild(i) {
        return Math.floor(i * 2) + 1;
    }
    rightChild(i) {
        return Math.floor(i * 2) + 2;
    }
    rightBrother(i) {
        return this.rightChild(this.parent(i));
    }
}
