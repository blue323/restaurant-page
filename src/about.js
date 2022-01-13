import Pizza from './pizza-about.jpg'

let pizzaImage = new Image()
pizzaImage.src = Pizza
pizzaImage.alt = "pizza image"
pizzaImage.style.width = "300px"
pizzaImage.style.height = "350px"
pizzaImage.style.padding = "1em 2em"
pizzaImage.style.objectFit = "cover"


let about = document.createElement("div")
about.id = "about-body"
about.innerHTML = `<h2>A little bit of Pizza history</h2>`

let aboutContent = document.createElement("div")
aboutContent.classList.add("about-content")

aboutContent.innerHTML = `
    <div class="about-content">
    <div><p>Pizza is an Italian dish consisting of a usually round, flattened base of 
        leavened wheat-based dough topped with tomatoes, cheese, and often various 
        other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, 
        meat, etc.), which is then baked at a high temperature, traditionally in a 
        wood-fired oven. A small pizza is sometimes called a pizzetta.
         A person who makes pizza is known as a pizzaiolo.</p>
        <p>In Italy, pizza served in formal settings, such as at a restaurant, 
        is presented unsliced, and is eaten with the use of a knife and fork. 
        In casual settings, however, it is cut into wedges to be eaten while held 
        in the hand.
        <p>The term pizza was first recorded in the 10th century in a 
        Latin manuscript from the Southern Italian town of Gaeta in Lazio, on 
        the border with Campania. Modern pizza was invented in Naples, and the 
        dish and its variants have since become popular in many countries. It has 
        become one of the most popular foods in the world and a common fast food 
        item in Europe, North America and Australasia; available at pizzerias (restaurants 
        specializing in pizza), restaurants offering Mediterranean cuisine, and 
        via pizza delivery. Various food companies also sell ready-baked 
        frozen pizzas in grocery stores, to be reheated in an ordinary home oven.</p></div>
`

aboutContent.appendChild(pizzaImage)
about.appendChild(aboutContent)

export {about}