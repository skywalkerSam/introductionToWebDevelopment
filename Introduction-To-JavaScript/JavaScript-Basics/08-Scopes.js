/* Scopes

- Global Scope
- Local Scope
- Block Scope

*/

// Global/Root/Window Scope
var scopeType = "Global";   // mutable

// Local Scope
function localScope() {
    // Child scope
    var scopeType = "Local";
    console.log(scopeType);

    // if you don't use `var` here, it will replace the global variable...!
}

// Block Scope
function blockScope(params) {
    for (let i = 0; i < 3; i++) {
        console.log(i, params);
    }
}


blockScope(scopeType);  // 0 "Global" 1 "Global" 2 "Global"

localScope();   // Local

console.log(scopeType); 
