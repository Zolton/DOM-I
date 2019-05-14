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


//const navBar = document.querySelectorAll(".container header nav a")

const navBar = document.querySelectorAll(".container header nav a")


//navBar.setAttribute("a", siteContent["nav"])

// navBar.forEach(link => { 

//   //link.textContent = 
//   console.log(siteContent["nav"][1])
 
// })
console.log(navBar)
//console.log(siteContent.nav[`nav-item-${1}`])

// navBar.forEach(test)

// function test (te) {

// }

//   for (let i=0; i < siteContent.nav[`nav-item-${i}`]; i++) {
//     navBar[i].textContent = siteContent.nav[`nav-item-${i+1}`]
// }

//   navBar[i].textContent = siteContent["nav"][`nav-item-${i}`]
//   navBar[i].textContent = siteContent.nav["nav-item-][i]
  

navBar[0].textContent = siteContent.nav["nav-item-1"]
navBar[1].textContent = siteContent.nav["nav-item-2"]
navBar[2].textContent = siteContent.nav["nav-item-3"]
navBar[3].textContent = siteContent.nav["nav-item-4"]
navBar[4].textContent = siteContent.nav["nav-item-5"]
navBar[5].textContent = siteContent.nav["nav-item-6"]

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
ctaTxt.textContent = siteContent.cta.h1

// Failed attempt to get line breaks via two text boxes, one parent, one chil

// const ctaTxt1 = document.querySelector(".cta .cta-text h1")
// ctaTxt.textContent = "DOM"
// const ctaTxt2 = document.querySelector(".cta .cta-text h1")
// ctaTxt1.appendChild(ctaTxt2)
// ctaTxt.textContent = "Is Awesome"


const ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = siteContent.cta.button


const ctaImg = document.querySelector("#cta-img")
ctaImg.src = siteContent.cta["img-src"]
ctaImg.alt = "Image of a code snippet."

const txtContentHeader = document.querySelectorAll(".top-content .text-content h4")
const txtContent = document.querySelectorAll(".top-content .text-content p")

//txtContentHeader[0].textContent = "Features"
//txtContentHeader[0].setAttribute(h4, ["main-content"]["features-h4"])
txtContent[0].textContent = siteContent["main-content"]["features-content"]
txtContentHeader[0].textContent = siteContent["main-content"]["features-h4"]

txtContentHeader[1].textContent = siteContent["main-content"]["about-h4"]
txtContent[1].textContent = siteContent["main-content"]["about-content"]

const midImg = document.querySelector(".middle-img")
midImg.src = siteContent["main-content"]["middle-img-src"]
midImg.alt = "Image of code snippets across the screen"

const bottomContentHeader = document.querySelectorAll(".bottom-content .text-content h4")
const bottomContent = document.querySelectorAll(".bottom-content .text-content p")

bottomContentHeader[0].textContent = siteContent["main-content"]["services-h4"]
bottomContent[0].textContent = siteContent["main-content"]["services-content"]

bottomContentHeader[1].textContent = siteContent["main-content"]["product-h4"]
bottomContent[1].textContent = siteContent["main-content"]["product-content"]

bottomContentHeader[2].textContent = siteContent["main-content"]["vision-h4"]
bottomContent[2].textContent = siteContent["main-content"]["vision-content"]

const contactHead = document.querySelector(".contact h4")
const contactBody = document.querySelectorAll(".contact p")

contactHead.textContent = siteContent.contact["contact-h4"]
contactBody[0].textContent = siteContent.contact.address
contactBody[1].textContent = siteContent.contact.phone
contactBody[2].textContent = siteContent.contact.email




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
ctaTxt.textContent = "DOM Is not fun"
ctaButton.textContent = "Run While You Can"
navBar[0].textContent = "All"
navBar[1].textContent = "Your"
navBar[2].textContent = "Base"
navBar[3].textContent = "Are"
navBar[4].textContent = "Belong"
navBar[5].textContent = "To"
newNavItem2.textContent = "Us"
newNavItem1.textContent = "Ha. Ha. Ha."
}



