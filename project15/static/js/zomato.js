
let spanTag = document.querySelector('#count')
let count = 1
spanTag.increment = count
function increment(){
    spanTag.innerText = count++;
}

