function approval(){
    let head = document.getElementById("head")
    let img = document.getElementById("img")
    let yesBtn = document.getElementById("yes")
    head.innerHTML = "Knew it, "+ "I Love You too ❤️"
    head.style.fontSize = "4rem"
    img.src = "yes_love.gif"
    yesBtn.style.transform ="scale(1.1)"
}
let yesBtn = document.getElementById("yes")
yesBtn.addEventListener("click",approval)

let clickCount = 0
function rejection(){
    let head = document.getElementById("head")
    let img = document.getElementById("img")
    let yesBtn = document.getElementById("yes")
    clickCount++
    if(clickCount == 1){
        head.innerHTML = "Are you sure? 🥺"
         head.style.fontSize = "4rem"
         img.src = "Click1.gif"
        yesBtn.style.transform = "scale(2.2)"
    }
    if(clickCount == 2){
        head.innerHTML = "Think again 🥺"
         head.style.fontSize = "4rem"
         img.src = "Click2.gif"
        yesBtn.style.transform = "scale(3.3)"
    }
    if(clickCount == 3){
        head.innerHTML = "Pookie Pleasee 🥺"
         head.style.fontSize = "4rem"
         img.src = "Click3.gif"
        yesBtn.style.transform = "scale(4.4)"
    }
    if(clickCount == 4){
        head.innerHTML = " Just Pleaseeeeeeeeeeee 💔"
         head.style.fontSize = "4rem"
         img.src = "Click4.webp"
        yesBtn.style.transform = "scale(5.5)"
    }
}