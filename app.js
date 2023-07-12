const navToggler = document.getElementById('navToggler');
const nav = document.querySelector('.heading');
navToggler.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';
    }
})

let a = document.getElementById('other_cur');
let b = document.getElementById('search_cur');
b.style.display = 'none';
a.addEventListener('click', () => {
    if (b.style.display === 'none') {
        b.style.display = 'block';
    }
    else {
        b.style.display = 'none';
    }
})
let c = document.getElementById('currency');
let d = document.getElementById('search_c');
d.style.display = 'none';
c.addEventListener('click', () => {
    if (d.style.display === 'none') {
        d.style.display = 'block';
    }
    else {
        d.style.display = 'none';
    }
})