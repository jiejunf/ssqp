export function readonlyProxy(item) {
    return new Proxy(item, {
        get(t, p) {
            const v = Reflect.get(t, p);
            if (v) {
                if (typeof v === 'object') {
                    return readonlyProxy(v);
                }
                else {
                    return v;
                }
            }
            else {
                return v;
            }
        },
        set() {
            return true;
        }
    });
}
export function copy(item) {
    let r;
    if (item.constructor) {
        r = new (item.constructor);
    }
    else {
        r = Object.create(null);
    }
    for (let key of Object.keys(item)) {
        let value = Reflect.get(item, key);
        if (value && typeof value === 'object') {
            value = copy(value);
        }
        Reflect.set(r, key, value);
    }
    return r;
}
export function deepAssign(target, src) {
    for (let key of Object.keys(src)) {
        let value = Reflect.get(src, key);
        if (value && typeof value === 'object') {
            value = copy(value);
        }
        Reflect.set(target, key, value);
    }
}
export function pure() {
    return Object.create(null);
}
export function init(n, m = 0) {
    return n || m;
}
export function tableSize(table) {
    let len = 1;
    for (let arr of table) {
        len *= arr.length;
    }
    return len;
}
