let nome = window.document.getElementById("nome")
let email = document.querySelector ("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")
let img = document.querySelector("#img")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML ="Nome Inválido"
        txt.style.color = "red"

    } else{
        txt.innerHTML ="Nome Válido"
        txt.style.color = "green"
        nomeOK = true
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1  ){
        txt.innerHTML ="Email Inválido"
        txt.style.color = "red"
    } else{
        txt.innerHTML ="Email Válido"
        txt.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtAssunto')
    if(assunto.value.length > 100 ){
        txt.innerHTML ="Texto muito longo (máximo 100 caracteres) "
        txt.style.color = "red"
        txt.style.display = "block"
    } else{
        txt.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOK == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    }else{
        alert ("Preencha corretamente todos os campos")
    }
}

function mapZoom(){
    mapa.style.width = "800px"
    mapa.style.heigth = "500px"
}

function mapNormal(){
    mapa.style.width = "400px"
    mapa.style.heigth = "250px"
}
