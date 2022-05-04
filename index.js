let array1 = []
let array2 = []

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const invoice = document.getElementById("invoice")

let ulEl = document.getElementById("ul-el")
let ulEll = document.getElementById("ul-ell")
let ulRemove = document.getElementById("ul-remove")
let totalEl = document.getElementById("total")
let total = 0

button1.addEventListener("click",function(){
    if(array1[0] != "Wash Car" && array1[1] != "Wash Car" && array1[2] != "Wash Car"){
        array1.push("Wash Car")
        array2.push("$10")
        total += 10
        totalEl.textContent = ""
        totalEl.textContent = total      
        renderList()
    }
})

button2.addEventListener("click",function(){
    if(array1[0] != "Mow Lawn" && array1[1] != "Mow Lawn" && array1[2] != "Mow Lawn"){
        array1.push("Mow Lawn")
        array2.push("$20")
        total += 20
        totalEl.textContent = ""
        totalEl.textContent = total
        renderList()
    }
})

button3.addEventListener("click",function(){
    if(array1[0] != "Pull Weeds" && array1[1] != "Pull Weeds" && array1[2] != "Pull Weeds"){
        array1.push("Pull Weeds")
        array2.push("$30")
        total += 30
        totalEl.textContent= ""
        totalEl.textContent = total
        renderList()
    }
})

invoice.addEventListener("click", function(){
    for(let i = 0;i<3;i++){
        array1.pop()
        array2.pop()
    }
    renderList()
    total = 0
    ulRemove.innerHTML = ""
    totalEl.textContent = "$ 0"
})

function renderList(){
    let listItems = `<li>Task</li>`
    for(let i = 0;i<array1.length;i++){
        listItems += `<br><li> ${array1[i]}</li><br>`
    }
    ulEl.innerHTML = listItems
    let listItemss = `<li>Total</li>`
    for(let i = 0;i<array2.length;i++){
        listItemss += `<br><li> ${array2[i]}</li><br>`
    }
    ulEll.innerHTML = listItemss
    ulRemove.innerHTML += `<br><li><button id = "remove">Remove</button></li><br>`
}
