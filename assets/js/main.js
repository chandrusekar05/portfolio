/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/
const navlink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navlink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    
    if(this.scrollY >= 350) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);




/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
 tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach((tab) => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) =>{
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');

    });

 });
/*=============== CONTACT FORM =============== */

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage= document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the fiel has a value 
    if(
        contactName.value === '' || 
        contactEmail.value === '' || 
        contactSubject.value === '' || 
        contactMessage.value === ''
    ){
        errorMessage.textContent= 'Write all the input fields'
    }
    
    else{
        emailjs.sendForm(
            'service_1rnat9e',
            'template_1v88w9a',
            '#contact-form',
            'LjoDKGIGfWnpbsWdT'
        )
        .then(() => {
            errorMessage.classList.add('color-first');
            errorMessage.textContent= 'Message sent';

            setTimeout(() => {
                errorMessage.textContent= '';
            }, 5000);
        }, 
        (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error);
        }
    );

    contactName.value= '';
    contactEmail.value= '';
    contactSubject.value= '';
    contactMessage.value= '';

}
};

    contactForm.addEventListener('submit', sendEmail);