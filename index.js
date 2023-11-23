const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    
    card.addEventListener('click', ()=>{
        removeActiveClass();
        card.classList.add('active');
    })
});

function removeActiveClass(){
    cards.forEach(element => {
        element.classList.remove('active');
    });
}
