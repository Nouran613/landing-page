/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll("section");
const navigation=document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNew=function ()
{let newL;
sections.forEach(function(section)
{const section_id=section.id;
const section_data=section.dataset.nav;
  newL=document.createElement('li');
newL.innerHTML=`<a href="#${section_id}">${section_data}</a>`;
document.querySelector('#navbar__list').appendChild(newL);});
};
buildNew();

// Add class 'active' to section when near top of viewport
var classActivation=function()
{sections.forEach(function(section)
  {var size=section.getBoundingClientRect();
    if (size.top>=0 && window.scrollY>0)
    {section.classList.add('your-active-class');
    section.style.cssText=('background-color:gray');
    } else{
      section.classList.remove('your-active-class');
      section.style.cssText=('background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(128, 85, 85, 0.2) 100%)');
    }
  });
  };
  window.addEventListener('scroll',classActivation);

// Scroll to anchor ID using scrollTO event
const scrolling=function()
{const links=document.querySelectorAll('.navbar__menu a');
  links.forEach(function(link)
  {link.addEventListener('click',function(event)
  {event.preventDefault();
      let target= document.querySelector(event.target.hash);
      target.scrollIntoView({behavior:'smooth'});})
  });
    };

scrolling();
// Highlighting links in nav-bar on click

let lis = document.querySelectorAll('li');
const activation= function()
{lis.forEach(function(l)
  {l.classList.remove('active')});
  this.classList.add('active');};
lis.forEach(function(li){li.addEventListener('click',activation)});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


