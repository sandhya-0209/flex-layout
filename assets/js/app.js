
var cl = console.log;

const menuToggleBtn = [...document.querySelectorAll('.menuToggleBtn')];

menuToggleBtn.forEach(btn => {
    btn.addEventListener('click',function(){
        this.parentElement.nextElementSibling.classList.toggle('show')
    })
})





