function shoppingList(arrayOfList) {
  let content = document.querySelector("#content");
  let ul = document.createElement('ul')
  for (let i=0; i<arrayOfList.length; i++){
    let li = document.createElement('li')
    li.innerHTML = arrayOfList[i];
    ul.appendChild(li)
  }
 content.appendChild(ul)
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
