/* Mudar o header da página quando der scroll */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight
function changeHeaderWhenScroll(){
    if(window.scrollY >= navHeight){
        // Scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // Menor que a altura do header
        header.classList.remove('scroll')
    }
}

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back_to_top')
function backToTop() {
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})
