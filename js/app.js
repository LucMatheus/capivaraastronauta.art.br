let menu = false

function esconderMenu(){
    document.querySelector("header").style.left = "-110%"
    document.querySelector("#btnMenu").innerHTML = "&#9776;"
}
function mostrarMenu(){
    document.querySelector("header").style.left = "0"
    document.querySelector("#btnMenu").innerHTML = "&#x2716;"
}
function revelarMenu(){
    if (menu == false){
        mostrarMenu()
        menu = true
    } else {
        esconderMenu()
        menu = false
    }
}
function revelarPersonagem(persona){
    document.querySelector("#cartoes div").style.display = "none"
    document.querySelector("#cartoes div").style.opacity = "0"
    document.querySelector(`#cartoes ${persona}`).style.display = "block"
    document.querySelector(`#cartoes ${persona}`).style.opacity = "1"
}