const body = document.getElementsByTagName('body');
const header = document.getElementsByTagName('header');
const dbs = document.querySelectorAll('.dropdown-button');
const dbds = document.querySelectorAll('.dropdown-button_desjtio');
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

for (let dbd of dbds) {
    dbd.addEventListener('click', () => {    
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
    body[0].insertBefore(cover, header[0]);
    cover.style.zIndex = "99";
    cover.style.opacity = "0.65";
    // body[0].style.overflowY = "hidden"; 
    navbarDisplay.style.transform = "translateX(0)";
})

function removeCover(){
    cover.style.opacity = "0";
    cover.style.zIndex = "-1";
    // body[0].style.overflowY = "auto"; 

}
