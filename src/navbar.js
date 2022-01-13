let navBar = document.createElement("div")
navBar.classList.add("nav-bar")

let ul = document.createElement("ul")
let li1 = document.createElement("li")
li1.id = "home"
li1.textContent = "Home"
ul.appendChild(li1)

let li2 = document.createElement("li")
li2.textContent = "About"
li2.id = "about"
ul.appendChild(li2)

let li3 = document.createElement("li")
li3.textContent = "Menu"
li3.id = "menu"
ul.appendChild(li3)

let li4 = document.createElement("li")
li4.textContent = "Contacts"
li4.id = "contacts"
ul.appendChild(li4)

navBar.appendChild(ul)

export { navBar } 
