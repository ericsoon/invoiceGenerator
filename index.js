let array1 = []
let array2 = []

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const invoice = document.getElementById("invoice")
const remove1 = document.getElementById("remove1")
const remove2 = document.getElementById("remove2")
const remove3 = document.getElementById("remove3")

let ulEl = document.getElementById("ul-el")
let ulEll = document.getElementById("ul-ell")
let totalEl = document.getElementById("total")
let total = 0
let totalButton = 0

button1.addEventListener("click",function(){
    if(array1[0] != "Wash Car" && array1[1] != "Wash Car" && array1[2] != "Wash Car"){
        array1.push("Wash Car")
        array2.push("$10")  
        total += 10
        totalEl.textContent = ""
        totalEl.textContent = total
        totalButton += 1    
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
        totalButton += 1
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
        totalButton += 1
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
    totalEl.textContent = "$ 0"
    remove1.style.display="none"
    remove2.style.display="none"
    remove3.style.display="none"
    
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
    if(totalButton === 1){
        remove1.style.display="block"
    }else if(totalButton === 2){
        remove2.style.display="block"
    }else if(totalButton === 3){
        remove3.style.display="block"
    }
}

const removeButton = document.getElementById("remove1")

