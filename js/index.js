const headerBarra = document.querySelector('.header__barra')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerBarra.classList.add('scrolled')
    } else {
        headerBarra.classList.remove('scrolled')
    }
});

const iconeDuvidas = document.querySelector('.duvidas-icone')
const todosBotoesDuvidas = document.querySelectorAll('.duvidas-botao')
const todosIconesDuvidas = document.querySelectorAll('.duvidas-icone')

todosIconesDuvidas.forEach((icone) =>{
    icone.addEventListener('click', () =>{
        todosBotoesDuvidas.forEach((botao) => {
            if(true){
                botao.setAttribute('id', 'botao-clicado')
                botao.innerHTML += `<p class="botao-clicado-texto">O Esculpe Detox não substitui hábitos saudáveis ou tratamentos médicos e não deve ser considerado um método de emagrecimento. O protocolo é voltado ao cuidado corporal, podendo auxiliar na sensação de inchaço, retenção e contorno corporal.<p>`
                botao.style.padding = '50px'
                document.querySelector('.duvidas-icone').removeAttribute("src")
                document.querySelector('.duvidas-icone').setAttribute("src", "/assets/fechar.svg")
                todosBotoesDuvidas = false
            } else{
                botao.style.backgroundColor = ''
            } 
        })
    })
})

