/* TODO:
- DRY the code / Refactor: Callback functions
- Debug Keydown event listener: Enter key not working!!! - DONE!
*/

// DOM Events
var button0 = document.getElementsByTagName("button")[0];
var input0 = document.getElementById("add-item");
var list0 = document.getElementsByClassName("list");


// handle item creation & addition
// Event Listener: click
button0.addEventListener("click", function () {
    // console.log("You know... I'm just a button... I don't do much... I just exist for some reason... idk...")
    if (input0.value.trim().length !== 0) {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(input0.value));
        list0[0].appendChild(listItem);
        console.log('"' + input0.value + '" added to the Shopping List!');
        input0.value = "";
    }
});

// Event Listener: keydown
input0.addEventListener("keydown", (event) =>{
    if (event.code === "Enter" && input0.value.trim().length !== 0) {
        var listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(input0.value));
        list0[0].appendChild(listItem);
        console.log('"' + input0.value + '" added to the Shopping List!');
        input0.value = "";
    }
});
