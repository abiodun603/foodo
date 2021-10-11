/*========= SHOW MENU =========== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const header = document.getElementById("header");

    // Validate that variable exists
    if(toggle && nav){
        //We add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu")
        })
    }

    if(toggle && nav){
        //We add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener("click", () => {
           header.classList.toggle("show-background")
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*========= REMOVE MENU MOBILE =========== */
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click" , linkAction))


/* ========== SCROLL SECTIONS ACTIVE LINK ================= */
const sections = document.querySelectorAll('section[id]')


function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*= ' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* ============= CHANGE BACKGROUND HEADER =============== */
function scrollHeader(){
    const nav = document.getElementById("header")
    // When the scroll is greater than 200 viewport
    if(this.scrollY >= 50 ) nav.classList.add("scroll-header"); else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll" , scrollHeader)

/* ============= SHOW SCROLL TOP =============== */
function scrollTop(){
    const scrollTop = document.getElementById("scroll-top")
    // When the scroll is greater than 560 viewport height, add the scroll class to the scroll-top class
    if(this.scrollY >= 560 ) scrollTop.classList.add("scroll-top"); else nav.classList.remove("scroll-top")
}
window.addEventListener("click" , scrollTop)
