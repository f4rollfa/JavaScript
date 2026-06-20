function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'public/manha.png'
        document.body.style.backgroundColor = '#96733f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'public/tarde.png'
        document.body.style.backgroundColor = '#f0c844'
    } else {
        img.src = 'public/noite.png'
        document.body.style.backgroundColor = '#000000'
    }
        

}
  
