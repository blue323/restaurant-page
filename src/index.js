import { navBar } from './navbar';
import { home } from './home.js'
import { about } from './about.js'
import { menu } from './menu'
import { contacts } from './contacts.js'
import './style.css'

let content = document.getElementById("content")
content.appendChild(navBar)

let main = document.createElement("div")
content.appendChild(main)
main.appendChild(home)

let homeBtn = document.getElementById("home")
homeBtn.addEventListener("click", () => {
    main.innerText = ""
    main.appendChild(home)
})

let aboutBtn = document.getElementById("about")
aboutBtn.addEventListener("click", () => {
    main.innerText = ""
    main.appendChild(about)
})

let menuBtn = document.getElementById("menu")
menuBtn.addEventListener("click", () => {
    main.innerText = ""
    main.appendChild(menu)
})

let contactsBtn = document.getElementById("contacts")
contactsBtn.addEventListener("click", () => {
    main.innerText = ""
    main.appendChild(contacts)
})


/*
//import Icon from './icon.jpg';

let image = new Image()
image.src = Icon

content.appendChild(image)
*/