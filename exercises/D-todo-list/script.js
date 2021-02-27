function todoList(todos) {
  let content = document.querySelector("#content")
  let ul = document.createElement('ul')
  for (let i=0; i<todos.length; i++){
    let li = document.createElement('li')
    li.innerHTML = todos[i].todo;
    ul.appendChild(li)
    li.style.textDecorationLine = "none";
    let lineThrough = li.style.textDecorationLine;
    li.addEventListener("click", function () {
      if (lineThrough === "none"){
        li.style.textDecorationLine = "line-through";
      } else if (lineThrough === "line-through") {
        li.style.textDecorationLine = "none";
      }
    });
  }
 content.appendChild(ul)
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);