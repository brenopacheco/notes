// this object has no Iterator (generator function)
let a = {
    key_a: "val_a",
    key_b: "val_b",
}

// for...in loops over enumerable property keys in object (or values in array)
for (let i in a) {
    console.log(`i: ${i} -> ${a[i]}`);
}

// defining an iterator
a[Symbol.iterator] = function* () {
    for (let key in this) {
        yield this[key]
    }
};

// for...of uses object's Symbol.iterator generator function*
// to get it's values (yield)
for (let iter of a) {
    console.log(iter);
}
