function relogio() {
    function criarHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'UTC'})
    }
    
    const cronometro = document.querySelector('#cronometro')
    let segundos = 0
    let timer;
    
    document.addEventListener('click', function(e){
        const el = e.target
    
        if(el.classList.contains('zerar')) {
            clearInterval(timer)
            cronometro.innerHTML = "00:00:00"
            segundos = 0
            cronometro.style.color = 'rgb(9, 48, 56)'
        }
        if(el.classList.contains('pausar')) {
            clearInterval(timer)
            cronometro.style.color = 'red'
        }
        if(el.classList.contains('iniciar')) {
            clearInterval(timer)
            contarSegundos()
            cronometro.style.color = 'rgb(9, 48, 56)'
        }
    })
    contarSegundos = () => {
        timer = setInterval(function () {
            segundos++
            cronometro.innerHTML = criarHoraDosSegundos(segundos)
        }, 1000)
    }
    
    pausarContador = () => {
        setTimeout(function() {
            clearInterval(timer)
        },)
    }
    
}

relogio()




