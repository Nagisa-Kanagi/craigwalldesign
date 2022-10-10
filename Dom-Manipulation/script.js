let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function () {
  var item = document.getElementById("item").value;
  var text = document.createTextNode(item);
  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.textContent = "x";
  btn.style.color = "red";
  btn.style.width = "35px";
  btn.style.marginLeft = "10px";
  li.appendChild(text);
  li.appendChild(btn);
  document.getElementById("todo-list").appendChild(li);
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
