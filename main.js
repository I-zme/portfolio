const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");

const menuIcon = document.querySelector('#menu-icon')
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
    primaryNav.hasAttribute('data-visible') ? (menuIcon.style.display='block', closeIcon.style.display='none') : (menuIcon.style.display='none', closeIcon.style.display='block');

    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
}


const projects = document.querySelectorAll('.project');
for(let i=0; i<projects.length; i++){
    projects[i].setAttribute('id', `${i}`);
}
const smallestScreen = window.matchMedia('(max-width: 30em)');
const mediumScreen = window.matchMedia('(min-width: 30em) and (max-width: 50em)');


window.addEventListener('load', screenToProjectColor)
window.addEventListener("resize",screenToProjectColor);

function screenToProjectColor(){
    if(smallestScreen.matches){
        for(const project of projects){
            if(project.id % 4 === 0 ){project.style.backgroundColor = 'var(--clr-accent-2-100)'}
            else if(project.id % 3 === 0 ){project.style.backgroundColor = 'var(--clr-accent-2-400)'}
            else if(project.id % 2 === 0){project.style.backgroundColor = 'var(--clr-accent-2-300)'}
            else {project.style.backgroundColor = 'var(--clr-accent-2-200)'}
        }
    }
    else if(mediumScreen.matches){
        for(const project of projects){
            if(project.id < 2 ){project.style.backgroundColor = 'var(--clr-accent-2-100)'}
            else if(project.id < 4){project.style.backgroundColor = 'var(--clr-accent-2-200)'}
            else if(project.id < 6){project.style.backgroundColor = 'var(--clr-accent-2-300)'}
            else {project.style.backgroundColor = 'var(--clr-accent-2-400)'}
        }
    }
    else{
        for(const project of projects){
            if(project.id < 3 ){project.style.backgroundColor = 'var(--clr-accent-2-100)'}
            else if(project.id < 6){project.style.backgroundColor = 'var(--clr-accent-2-200)'}
            else if(project.id < 9){project.style.backgroundColor = 'var(--clr-accent-2-300)'}
            else {project.style.backgroundColor = 'var(--clr-accent-2-400)'}
        }
    }
}