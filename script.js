var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector("ul");
var myNodelist = document.getElementsByTagName("LI");

function inputLength() {
	return input.value.length;
}

function createNewListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var newItemIndex = document.querySelector("ul").lastChild;
	createCloseButtonForNewItem(newItemIndex);
}

function createCloseButtonForNewItem(newItemIndex){
	var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newItemIndex.appendChild(span);

  removeListItemWhenClicked();
}

function removeListItemWhenClicked(){
   var close = document.getElementsByClassName("close");
   for (var i = 0; i < close.length; i++) {
   close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createNewListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createNewListElement();
	}
}

function eventDone(ev){
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}

function createCloseButton(i){
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var i;
for (var i = 0; i < myNodelist.length; i++) {
  createCloseButton(i);
removeListItemWhenClicked();
}


// Click on a close button to hide the current list item


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", eventDone);