let contacts = document.createElement("div")
contacts.id = "contacts-body"

let h2 = document.createElement("h2")
h2.textContent = "Come grab a slice!"
contacts.appendChild(h2)

let display = document.createElement("div")
display.classList.add("display")

let contactInfo = document.createElement("div")
let p1 = document.createElement("p")
p1.textContent = "500 Terry Francois St."
contactInfo.appendChild(p1)

const p2 = document.createElement("p")
p2.textContent = "San Francisco, CA 94158"
contactInfo.appendChild(p2)

const br1 = document.createElement("br")
contactInfo.appendChild(br1)

const p3 = document.createElement("p")
p3.textContent = "Monday – Friday  07:00AM – 10:00PM"
contactInfo.appendChild(p3)

let p4 = document.createElement("p")
p4.textContent = "Saturday    09:00AM – 10:00PM" 
contactInfo.appendChild(p4)

let p5 = document.createElement("p")
p5.textContent = "Sunday    08:00PM –11:00PM" 
contactInfo.appendChild(p5)

const br2 = document.createElement("br")
contactInfo.appendChild(br2)

let p6 = document.createElement("p")
p6.textContent = "Tel: 123-456-7890" 
contactInfo.appendChild(p6)

let p7 = document.createElement("p")
p7.textContent = "Email: info@mysite.com" 
contactInfo.appendChild(p7)

display.appendChild(contactInfo)

let contactMap = document.createElement("div")
contactMap.classList.add("map")
contactMap.innerHTML = `<iframe 
    src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d4590.822411882595!2d-122.38996216063423!3d37.771557345389326!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d37.7722672!2d-122.389603!4m0!5e0!3m2!1spt-PT!2sus!4v1630709611970!5m2!1spt-PT!2sus" 
    width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`

display.appendChild(contactMap)

contacts.appendChild(display)




export {contacts}