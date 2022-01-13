let menu = document.createElement("div")

let content = document.createElement("div")
content.innerHTML = `
    <h2>PIZZAS</h2>
    <div class="menu">
        <div>Margherita<br>$9</div>
        <div>Funghi<br>$9</div>
    </div>
    <div class="menu">
        <div>Marinara<br>$9</div>
        <div>Prosciutto<br>$9</div>
    </div>
    <div class="menu">
        <div>Pepperoni<br>$9</div>
        <div>Napoletana<br>$9</div>
    </div>
    <h2>ANTIPASTI</h2>
    <div class="menu">
        <div>Fresh Arugula<br>$9</div>
        <div>Caprese<br>$9</div>
    </div>
    <div class="menu">
        <div>Panzanella<br>$9</div>
        <div>House Antipasti<br>$9</div>
    </div>   
`

menu.appendChild(content)

export { menu }