 var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul"); 
var listItems = document.getElementsByTagName("li");

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li);
		input.value = "";

		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("DELETE"));
		li.appendChild(btn)
		btn.onclick = removeParent;
}


function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement()
	}
}

function listLength() {
	return listItems.length
}

function deleteButton() {
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("DELETE"));
		listItems[i].appendChild(btn);
		btn.onclick = removeParent;
}

for(i=0; i<listLength(); i++) {
	deleteButton();
}

function removeParent(event) {
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

ul.addEventListener("click", strikeThrough);