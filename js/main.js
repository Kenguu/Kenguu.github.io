//FUNCTION TO DISPLAY MENU ONCE HAMBURGER IS PRESSED
const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    //Active links
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Removing menu for mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


//DARK MODE FUNCTION
function darkLightFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
    if (document.classList.contains("dark-theme")) {
        element.src = "images/sun-regular-24.png";
    } else {
        element.src = "images/moon-regular-24.png";
    }
}
