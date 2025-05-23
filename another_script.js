function approval() {
    let head = document.getElementById("head")
    let img = document.getElementById("img")
    let yesBtn = document.getElementById("yes")
    head.innerHTML = "Knew it, " + "I Love You too ❤️"
    head.style.fontSize = "4rem"
    img.src = "yes_love.gif"
    yesBtn.style.transform = "scale(1.1)"
}
let yesBtn = document.getElementById("yes")
yesBtn.addEventListener("click", approval)

function rejection() {
    let noBtn = document.getElementById("no")

    let randomX = Math.floor(Math.random() * 800)
    let randomY = Math.floor(Math.random() * 800)
    noBtn.style.left = randomX + "px"
    noBtn.style.top = randomY + "px"
}
let noBtn = document.getElementById("no")
noBtn.addEventListener("mouseover",rejection)
