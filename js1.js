let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0
function increment(){
    count ++
    countEl.innerText = count
    console.log(count)
}



console.log('save-el')

function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0   
}
