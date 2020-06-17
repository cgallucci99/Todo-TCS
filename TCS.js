function addTodo() {
    var text = document.getElementById("addToList").value;
    var todos = document.getElementById("todos").innerHTML;
    document.getElementById("todos").innerHTML = todos + "<li class='list-group-item listItems'> <input class='boxes mr-3' type='checkbox'>" + text + "</li>";
    document.getElementById("addToList").value = "";
}

function deleteList() {
	var boxList = document.getElementsByClassName("listItems");
	for (var i = 0; i < boxList.length; i++) {
		if (boxList[i].children[0].checked)
			boxList[i].remove();
	}
}