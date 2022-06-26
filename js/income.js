burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.v-nav-resp')

burger.addEventListener('click',() =>{
    navlist.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
  
});
