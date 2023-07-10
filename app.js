const navToggler= document.getElementById('navToggler');
const nav = document.querySelector('.heading');
navToggler.addEventListener('click',()=>{
    if(nav.style.display === 'flex'){
        nav.style.display='none';
    }
    else{
       nav.style.display='flex'; 
    }
})