const Robotron = document.querySelector('#Robotron')

Robotron.addEventListener('click', (evento) =>{
    console.log(evento)
})

function dizOi(nome) {
    console.log("oi " + nome)
    console.log('Bem-vindo ao Robotron 200')
}

dizOi('Pedro')