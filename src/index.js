import createHome from "./home";
import createContact from "./contact";
import createAbout from "./about";
import createNav from "./nav";

innit()

function clearDOMExceptNav() {
    let bodyChildren = Array.from(document.body.childNodes);
    
    bodyChildren.forEach(child => {
        if (!(child.nodeName === "HEADER" && child.firstChild && child.firstChild.className === "header-container")) {
            document.body.removeChild(child);
        }
    });

    let headChildren = Array.from(document.head.childNodes);

    headChildren.forEach(child => {
        if (child.nodeName === "LINK" && child.rel === "stylesheet") {
            document.head.removeChild(child);
        }
    });
}

function navigationEvents(){
    const home = document.getElementById('home');
    const contact = document.getElementById('contact');
    const about = document.getElementById('about');

    home.addEventListener('click', () => {
        clearDOMExceptNav();
        createHome();
       
    });

    contact.addEventListener('click', () => {
        clearDOMExceptNav();
        createContact();
       
    });

    about.addEventListener('click', () => {
        clearDOMExceptNav();
        createAbout();
       
    });
}

function innit() {
    createNav()
    createHome();
    navigationEvents();
}