

// a closure is a function with access to a copy of it's enclosing function's variables.
function enclosing_function() {
    let enclosing_var = 1
    let closure = function() {
        console.log(enclosing_var);
        enclosing_var++;
    }
    return closure;
}

let c1 = enclosing_function();
let c2 = enclosing_function();

c1(); // prints 1
c1(); // prints 2
c2(); // prints 1
