let likeTag = document.querySelector("#like");
let incBtn = document.querySelector("#inc");
let like = localStorage.getItem("i")?localStorage.getItem("i"):0;
localStorage.setItem("i",like);
likeTag.innerText = like;
incBtn.addEventListener("click",function(){
    like++;
    localStorage.setItem("i",like);
    likeTag.innerText = localStorage.getItem("i");
    })

let disTag = document.querySelector("#dislike");
let decBtn = document.querySelector("#dec");
let dislike = localStorage.getItem("d")?localStorage.getItem("d"):0;
localStorage.setItem("d",dislike);
disTag.innerText = dislike;
decBtn.addEventListener("click",function(){
    dislike++;
    localStorage.setItem("d",dislike);
    disTag.innerText = localStorage.getItem("d");
    })
let totalTag = document.querySelector("#total");
totalTag.innerText = Number(likeTag.innerText)+Number(disTag.innerText);