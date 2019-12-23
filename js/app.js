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
function esconderPersonagens(){
    var JScartoes = document.querySelectorAll(".cartoes div")
    var i = 0
    for(i=0;i<JScartoes.length;i++){
        JScartoes[i].style.display = "none"
    }
}
function revelarPersonagem(persona){
    esconderPersonagens()
    document.querySelector(`.cartoes div${persona}`).style.display = "block"
}
function validarFormulárioDeContato(){
    alert("Isso é apenas uma demonstração\nAinda não está implementado\nTente o botão de contato direto via DM do Insta :D.\nBy: Lucas.")
    return false
}