        const horas = document.getElementById('horas')
        const minutos = document.getElementById('minutos')
        const segundos = document.getElementById('segundos')

        const relogio = setInterval( function time(){
            let dataAtual = new Date();

            let hr = dataAtual.getHours()
            let min = dataAtual.getMinutes();
            let scd = dataAtual.getSeconds();
            horas.textContent = hr
            minutos.textContent = min
            segundos.textContent = scd
        })
            