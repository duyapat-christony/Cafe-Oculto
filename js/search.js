const searcher = document.querySelector('.search')
const searcher_button = document.querySelector('.btn')
const input = document.querySelector('.input')
searcher_button.addEventListener('click', () => {
searcher.classList.toggle('active')
input.focus()
})
