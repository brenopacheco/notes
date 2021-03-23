// what?
// prototype, __proto__, constructor, new {{{
// constructor function:
//              defines how an object is created. actually invoked
//              directly by the "new" directive like a = {}, ctr(a) as to
//              set this.variable into "a"
// prototype:   has the functions common to all instances of an object
//              is defined in the constructor function as .prototype property
// __proto__:   points to the prototype used to create the object instance
//              by invoking obj.method() we indirectly do obj.__proto__.method()
// constructor: instance's reference to the constructor function used to build it
// new:         uses a constructor function to instantiate an object
//              -> assigns ctor prototype to __proto__  prop of instance
//              -> assigns ctor to __proto__.constructor of object
//              -> calls something like ctor.bind(obj)(arguments)
//              -> returns the created object

// constructor function
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() { }
}


function create(ctor, ...args) {
    let obj = {};
    ctor.bind(obj)(...args);                      // assign vars defined with this
    obj.__proto__ = ctor.prototype;            // assigns prototype to __proto__
    Object.defineProperty(obj.__proto__, 'constructor', { // assigns constructor
        value: ctor,
        writable: true,
        enumerable: false,
        configurable: true
    })
    return obj;
}

let x = new Point(1, 2);
let y = create(Point, 1, 2); // basically the same thing
//}}}
// inheritance {{{

function A(val) {
    this.val = val
}
A.prototype.hi = function () { console.log(`${this.val}: hi!`);  }
A.prototype.wow = function () { console.log(`${this.val}: wow!`);  }

function B(val) {
    A.call(this, val);
}
// B.prototype = Object.create(A.prototype)
Object.assign(B.prototype, A.prototype)
B.prototype.hi = function () { console.log(`${this.val}: hello!`); }
B.prototype.nice = function () { console.log(`${this.val}: nice!`); }

let a = new A("a");
let b = new B("b");

console.log(a.__proto__.hi.toString());
console.log(b.__proto__.hi.toString());
console.log(a.__proto__.constructor);
console.log(b.__proto__.constructor);
console.log(a.__proto__);
console.log(b.__proto__);
a.hi()
a.wow()
b.hi()
b.wow()
b.nice()
//}}}
// classes

    // syntatic sugar for constructor function
    // facilitates inheritance / extension

    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }






