const burger = document.querySelector ('.burger');
const menu = document.querySelector ('ul');

burger.addEventListener('click', () => {
    menu.classList.toggle('nav-active');

    burger.classList.toggle('toggle');
})
