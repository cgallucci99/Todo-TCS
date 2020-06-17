var input = document.getElementById("addToList");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("add").click();
  }
});

function addTodo() {
    var text = document.getElementById("addToList").value;
    var todos = document.getElementById("todos").innerHTML;
    document.getElementById("todos").innerHTML = todos + "<li class='list-group-item listItems'> <input class='boxes mr-3' type='checkbox'>" + text + "</li>";
	document.getElementById("addToList").value = "";
}

function deleteList() {
	var boxList = document.getElementsByClassName("listItems");
	for (var i = 0; i < boxList.length; i++) {
		if (boxList[i].children[0].checked) {
			boxList[i].remove();
			i--;
		}
	}
}

// setInterval(function () {
// 	var count = 0;
// 	var boxList = document.getElementsByClassName("listItems");
// 	for (var i = 0; i < boxList.length; i++) {
// 		if (boxList[i].children[0].checked) {
// 			count++;
// 		}
// 	}
// 	var percent = count / boxList.length;
// 	document.getElementById("progress").innerHTML = '<div class="progress-bar" role="progressbar" aria-valuenow="'+percent+'" aria-valuemin="0" aria-valuemax="100"></div>'
// }, 100);