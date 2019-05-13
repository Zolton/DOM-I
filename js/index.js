const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//logo.setAttribute("src", "img/logo.png")
logo.src = "img/logo.png"

const navBar = document.querySelectorAll(".container header nav a")
navBar[0].textContent = "Services"
navBar[1].textContent = "Product"
navBar[2].textContent = "Vision"
navBar[3].textContent = "Features"
navBar[4].textContent = "About"
navBar[5].textContent = "Contact"
const header = document.querySelector("header")

header.style.backgroundColor = "green"
const newNavItem1 = document.createElement("a")
const newNavItem2 = document.createElement("a")
newNavItem1.href = "#"
newNavItem2.href = "#"
newNavItem1.textContent = "Home Page"
newNavItem2.textContent = "DMCA Contact"

const entireNav = document.querySelector(".container header nav")
entireNav.prepend(newNavItem1)
entireNav.append(newNavItem2)

//Failured syntax attempts

//navBar[0].prependChild(newNavItem1)
//navBar[0].prepend(newNavItem1)
//navBar[5].append(newNavItem2)
//document.querySelector("navBar[0]").prependChild.newNavItem1
//header.appendChild(newNavItem2)

const ctaTxt = document.querySelector(".cta-text h1")
ctaTxt.textContent = "DOM Is Awesome"

// Failed attempt to get line breaks via two text boxes, one parent, one chil

// const ctaTxt1 = document.querySelector(".cta .cta-text h1")
// ctaTxt.textContent = "DOM"
// const ctaTxt2 = document.querySelector(".cta .cta-text h1")
// ctaTxt1.appendChild(ctaTxt2)
// ctaTxt.textContent = "Is Awesome"


const ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = "Get Started"


const ctaImg = document.querySelector("#cta-img")
ctaImg.src = "img/header-img.png"
ctaImg.alt = "Image of a code snippet."

const txtContentHeader = document.querySelectorAll(".top-content .text-content h4")
const txtContent = document.querySelectorAll(".top-content .text-content p")

txtContentHeader[0].textContent = "Features"
txtContent[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

txtContentHeader[1].textContent = "About"
txtContent[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImg = document.querySelector(".middle-img")
midImg.src = "img/mid-page-accent.jpg"
midImg.alt = "Image of code snippets across the screen"

const bottomContentHeader = document.querySelectorAll(".bottom-content .text-content h4")
const bottomContent = document.querySelectorAll(".bottom-content .text-content p")

bottomContentHeader[0].textContent = "Services"
bottomContent[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomContentHeader[1].textContent = "Services"
bottomContent[1].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomContentHeader[2].textContent = "Vision"
bottomContent[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const contactHead = document.querySelector(".contact h4")
const contactBody = document.querySelectorAll(".contact p")

contactHead.textContent = "Contact"
contactBody[0].textContent = "123 Way 456 Street Somewhere, USA"
contactBody[1].textContent = "1 (888) 888-8888"
contactBody[2].textContent = "sales@greatidea.io"




// Stretch goal
bottomContent[1].style.backgroundColor = "red"
bottomContentHeader[0].style.fontSize = "2 rem"

const buttonStretch = document.createElement("button")
buttonStretch.href = "#"
buttonStretch.textContent = "Click me!!"
contactHead.append(buttonStretch)
linebreak = document.createElement("br")
buttonStretch.prepend(linebreak)

buttonStretch.addEventListener("click", callback)

function callback (event) {
  event.target.style.backgroundColor = 'blue';
  bottomContent[0].style.backgroundColor = "yellow";
  bottomContent[1].style.backgroundColor = "white";
  bottomContent[2].style.backgroundColor = "green"
  contactHead.textContent = "WEEE! This is fun"
contactBody[0].textContent = "742 Evergreen Terrace"
contactBody[1].textContent = "1 (888) 888-8888"
contactBody[2].textContent = "Springfield, Quahog RI"
}



