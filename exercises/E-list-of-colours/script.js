function listOfColours(colours) {
    let content = document.querySelector("#content")
    let select = document.createElement("select")
    let p = document.createElement("p")
    for (i=0; i<colours.length; i++){
        let option = document.createElement("option")
        option.innerHTML = colours[i]
        select.appendChild(option)
    }
    select.addEventListener("click", function (){
       p.innerHTML = `This is the color you have chosen: ${select.value}`; //value property sets or returns the value of the selected option in a drop-down list
       p.style.color = `${select.value}`;
    })

    content.appendChild(select)
    content.appendChild(p)
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
