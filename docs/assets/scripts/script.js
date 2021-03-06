const body = document.body;
// const body = document.getElementsByTagName('body');
const header = document.querySelector('header');
const dbs = document.querySelectorAll('.dropdown-button');
const navbarDisplay = document.getElementById('navbar');
const navbarButton = document.querySelector('.nav-toggle');
const navbarCloseButton = document.querySelector('.nav-bar_close-button');

const cover = document.createElement('div');
cover.style.width = "100%";
cover.style.height = "100%";
cover.style.zIndex = "-1";
cover.style.position = "fixed";
cover.style.opacity = "0";
cover.style.transition = "all linear 0.15s";
cover.style.backgroundColor = "black";

navClose(cover);
navClose(navbarCloseButton);

function navClose(obj){
    obj.addEventListener('click', ()=>{
        navbarDisplay.style.transform = "translateX(100%)";
        removeCover();
    })
}

for (let db of dbs) {
    db.addEventListener('click', () => {    
        for (let svg of db.children) {
            svg.classList.toggle('none');
        }
        
        let dm = db.nextElementSibling;
        dm.classList.toggle('dropdown-menu_close');
        
        
        for(let dmli of dm.children){
            dmli.classList.toggle('dropdown-item_open');
        }
    })
    
}

navbarButton.addEventListener('click', ()=>{
    body.insertBefore(cover, header);
    cover.style.zIndex = "99";
    cover.style.opacity = "0.65";
    body.style.overflow = "hidden"; 
    navbarDisplay.style.transform = "translateX(0)";
})

function removeCover(){
    cover.style.opacity = "0";
    cover.style.zIndex = "-1";
    body.style.overflowY = "scroll";
}
