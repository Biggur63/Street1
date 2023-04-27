const btnBTT = document.querySelector('.back-to-top')

window.addEventListener('scroll', () => {
    const isBtnVisible = window.scrollY > window.innerHeight * 0.6
    btnBTT.style.visibility = isBtnVisible ? 'visible' : 'hidden'
})

btnBTT.addEventListener('click', (event) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    event.preventDefault()
});
  