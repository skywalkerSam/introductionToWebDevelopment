/** Closures
 * 
 * A closure is a function that has access to the parent scope, even after the parent function has closed. JS will automatically store the state of a closure in the heap memory, even after the parent function has returned. This behavior makes them useful for encapsulating private variables.

 */

// Closed Expression/NO Closure/Pure Function/NO external transactions/Self-contained
function pureFun() {
    return 'selfContainedPureFunction';
}

function x1(value) {
    return value + 'x1';
}

function x3(value) {
    return value + 'x3';
}

// Open Expression/Closure
function closure() {
    let openEx = 'FML';
    function movedOn() {
        openEx = openEx * 3
    }
    return movedOn;
}


let fuck = closure();
console.log(fuck)

