function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  //write your code here
  for (i=0; i<arrayOfPeople.length; i++){
   let h1Tag = document.createElement("h1")
   let h2Tag = document.createElement("h2")
   h1Tag.innerText = arrayOfPeople[i].name
   h2Tag.innerText = arrayOfPeople[i].job
   content.appendChild(h1Tag)
   content.appendChild(h2Tag)
  }
}


let people = [
  { name: "Chris", job: "Superhero" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
  {name: "Peckham", job: "Prime Minister"}
];

listOfNames(people);

// For each object in the array:

// - Add a `<h1>` tag to the html containing the name of the person.
// - Add a `<h2>` tag to the html containing the job of the person.
// - All of your HTML should go inside the `<div>` with the id **"content"**:

// ```html
// <div id="content">
//   <h1>{Name Here}</h1>
//   <h2>{Job Here}</h2>
//   .....
// </div>
// ```
