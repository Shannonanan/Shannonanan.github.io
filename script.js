var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul");
var list = document.getElementById("ul");
var myNodelist = document.getElementById("add");

function inputLength() {
	return input.value.length;
}

function createNewListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var newItemIndex = document.getElementById("ul").lastChild;
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
	console.log("hello");
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


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", eventDone);