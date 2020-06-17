var count = 0;

function addTodo() {
    var text = document.getElementById("addToList").value;
    var todos = document.getElementById("todos").innerHTML;
    document.getElementById("todos").innerHTML = todos + "<li id='count" + count + "'> <input class='boxes' type='checkbox'>" + text + "</li>";
    count++;
}

function deleteList() {
	var boxList = document.getElementsByClassName("boxes");
	for (var i = 0; i < boxList.length; i++) {
		if (boxList[i].checked)
			document.getElementById("count" + i).remove();
	}
}