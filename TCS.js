var input = document.getElementById("addToList");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("add").click();
  }
});

function addTodo() {
    var text = document.getElementById("addToList").value;
	var todos = document.getElementById("todos").innerHTML;
	var date = document.getElementById("datePick").value;
	var dateText = ", to be completed by: <span>" + date + "</span>";
	if (date == "") {
		dateText = "<span></span>";
	}
	$("#todos").append("<li class='list-group-item listItems'> <input class='boxes mr-3' type='checkbox'>" + text + dateText + "</li>");
	document.getElementById("addToList").value = "";
	document.getElementById("datePick").value = "";
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

setInterval(function () {
	var count = 0;
	var boxList = document.getElementsByClassName("listItems");
	for (var i = 0; i < boxList.length; i++) {
		if (boxList[i].children[0].checked) {
			count++;
		}
	}
	var percent = 100 * count / boxList.length;
	if (Number.isNaN(percent))
		percent = 0;
	percent = Math.round(percent);
	document.getElementById("progress").innerHTML = '<div class="progress-bar" role="progressbar" style="width:'+percent+'%;" aria-valuenow="'+percent+'" aria-valuemin="0" aria-valuemax="100">'+percent+'%</div>';
}, 100);

setInterval(function () {
	var count = 0;
	var boxList = document.getElementsByClassName("listItems");
	for (var i = 0; i < boxList.length; i++) {
		if (boxList[i].children[0].checked) {
			boxList[i].classList.remove("text-danger");
			boxList[i].classList.add("text-success");
		} else {
			boxList[i].classList.remove("text-success");
		}
	}
}, 100);

setInterval(function() {
	var boxList = document.getElementsByClassName("listItems");
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	for (var i = 0; i < boxList.length; i++) {
		var curDate = new Date(boxList[i].children[1].innerHTML);
		if (curDate < today) {
			if (!boxList[i].children[0].checked)
				boxList[i].classList.add("text-danger");
		}
	}
}, 100);