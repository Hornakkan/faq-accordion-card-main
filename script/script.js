const element = document.querySelectorAll('.element');

for(let i = 0; i < element.length; i++){
    element[i].addEventListener('click', (e) => {
        element[i].classList.toggle('active');
    })
}