const body = document.getElementsByTagName('body')[0];
const form = document.querySelector('#taslcol');
const btn = document.querySelector('#change-alignment')
btn.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 255) + 1;
    const roll2 = Math.floor(Math.random() * 255) + 1;
    const roll3 = Math.floor(Math.random() * 255) + 1;
    body.style.transition = 'background-color 1s ease-in-out';
    body.style.backgroundColor = `rgb(${roll},${roll2},${roll3})`;
    form.style.backgroundColor='white';
})
