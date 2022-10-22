const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");

const hamburgerIcon = document.querySelector('#hamburger-icon')
const closeIcon = document.querySelector('#close-icon')

navToggle.addEventListener('click', toggleNavigation);

primaryHeader.addEventListener('click',(e)=>{
    if(e.target.classList.contains('nav-link')){
        toggleNavigation()
    }
    else if(primaryHeader.hasAttribute('data-overlay')&&(!primaryNav.contains(e.target)) && (!navToggle.contains(e.target))){
        toggleNavigation()
    }
    
});

function toggleNavigation(){
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', 'false') : navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.hasAttribute('data-visible') ? (hamburgerIcon.style.display='block', closeIcon.style.display='none') : (hamburgerIcon.style.display='none', closeIcon.style.display='block');

    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
}



const tl = gsap.timeline({
    defaults: {duration:2}, 
    onComplete: function(){
        
        this.reverse()
    }
});
tl
    .fromTo(".holder", {yPercent:-100}, {yPercent:0})
    .fromTo(".holder img", {yPercent:-100}, {yPercent:0}, "<");
    

// tl.delayedCalle(reversed( !tl.reversed() ));

const btn = document.querySelector('#click');
btn.addEventListener('click', ()=>{
    tl.pause();
});

// btn.on("click", function() {
//   tl.reversed(!tl.reversed());
// })