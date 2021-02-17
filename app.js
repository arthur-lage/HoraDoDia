function carregar(){
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let msg2 = window.document.getElementById("msg2")
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    

    if(hora >= 0 && hora < 12){
        img.src = "./images/foto03cropped.png"
        msg2.innerHTML = `Bom dia!`
        document.body.style.background = '#70AEF5'
    } else if(hora >= 12 && hora < 18) {
        img.src = "./images/foto02cropped.png"
        msg2.innerHTML = `Boa Tarde!`
        document.body.style.background = '#ECA69A'
    } else {
        img.src = "./images/foto01cropped.png"
        msg2.innerHTML = `Boa Noite!`
        document.body.style.background = '#413549'
    }
}