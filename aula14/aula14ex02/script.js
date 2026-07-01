function tabuada() {
    let n = Number(document.getElementById('inum').value)
    let m = Number(0)
    let res = document.getElementById('itab')

    res.innerHTML = ''
    for(let i = 1; i <= 10; i++) {
        m = n * i
        res.innerHTML += `${n} X ${i} = ${m}<br>`
   }
   
}   