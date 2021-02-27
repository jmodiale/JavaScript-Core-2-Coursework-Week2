function readingList(book) {
  let content = document.querySelector('#content')
  for (let i=0; i<book.length; i++){
    let ul = document.createElement('ul');
    ul.style.display = "flex"
    ul.style.alignItems = "center"
    ul.style.justifyContent = "center"
    ul.style.padding = "10px"
    let li = document.createElement('li');
    li.style.listStyle = "none"
    if (book[i].alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
    let p = document.createElement('p');
    let img = document.createElement('img');
    p.innerHTML = `${book[i].title} by ${book[i].author}`
    p.style.textAlign = "center"
    p.style.fontWeight = "bolder";
    content.style.display = "flex"
    img.src = book[i].img
    img.style.marginTop = "20px"
    img.style.height = "40%"
    img.style.marginLeft = "10px"
    content.appendChild(ul).appendChild(li).appendChild(p).appendChild(img);
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img: 'https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg'
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg'
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    img: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg'
  }
];

readingList(books);