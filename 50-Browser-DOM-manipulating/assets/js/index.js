const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

let bookList = document.querySelector(".book-list")

books.map(book => {
  // book container
  let li = document.createElement("li")
  li.classList.add("book")

  let img = document.createElement("img")
  img.src = book.img
  img.classList.add("img", "img-fluid")

  let title = document.createElement("h2")
  title.textContent = book.title
  let authorName = document.createElement("h4")
  authorName.textContent = book.author

  let footer = document.createElement("footer")
  footer.classList.add("text-right")
  let button = document.createElement("span")
  button.classList.add("status")
  button.innerText = book.alreadyRead ? "Read" : "To Read"
  button.style.backgroundColor = book.alreadyRead ? "green" : "gray"

  li.append(img, title, authorName, footer)

  footer.appendChild(button)

  bookList.appendChild(li)

})