function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade > 0 && idade < 10 ) {
                //crianca
                img.setAttribute('src', './public/crianca-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './public/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './public/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', './public/idoso-m.jpg')
            }
        } else {
            genero = 'uma mulher'
            if (idade > 0 && idade < 10 ) {
                //crianca
                img.setAttribute('src', './public/crianca-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './public/jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './public/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', './public/idoso-f.jpg')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}