/* TODO:
- DRY the code / Refactor: Callback functions
- Debug Keydown event listener: Enter key not working!!! - DONE!

- Toggle `.done` class on list items
- Add a delete button to all list items
*/

// DOM Events
var button0 = document.getElementsByTagName("button")[0];
var input0 = document.getElementById("add-item");
var list0 = document.getElementsByClassName("list");
var textInputLength = input0.value.trim().length;
var textInputValue = input0.value;

// listItemCreation
function listItemCreation() {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(textInputValue));
    list0[0].appendChild(listItem);
    console.log('"' + textInputValue + '" added to the Shopping List!');
    input0.value = "";
}

// addItemUponClick
function addItemUponClick(){
    // console.log("You know... I'm just a button... I don't do much... I just exist for some reason... idk...")
    if (textInputLength !== 0) {
        listItemCreation();
    }
}

// addItemUponEnter
function addItemUponEnter(event){
    if (event.code === "Enter" && textInputLength !== 0) {
        listItemCreation();
    }
}

// Event Listeners
button0.addEventListener("click", addItemUponClick);
input0.addEventListener("keydown", addItemUponEnter);
