function addTodo() {
    var text = document.getElementById("addToList").value;
    var todos = document.getElementById("todos").innerHTML;
    document.getElementById("todos").innerHTML = todos + "<li>" + text + "</li>";
}