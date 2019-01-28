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
    "h1": "DOM<br>Is<br>Awesome",
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
var logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

var ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

var midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


// Navbar
var link = document.getElementsByTagName('a');

link[0].innerText = siteContent.nav["nav-item-1"];
link[1].innerText = siteContent.nav["nav-item-2"];
link[2].innerText = siteContent.nav["nav-item-3"];
link[3].innerText = siteContent.nav["nav-item-4"];
link[4].innerText = siteContent.nav["nav-item-5"];
link[5].innerText = siteContent.nav["nav-item-6"];

// Hero
var headerTitle = document.getElementsByTagName("h1");
headerTitle[0].innerHTML = siteContent.cta.h1;

var ctaButton = document.getElementsByTagName("button");
ctaButton[0].innerText = siteContent.cta.button;

// Main Content

var h4Titles = document.getElementsByTagName('h4');

h4Titles[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Titles[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Titles[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Titles[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Titles[4].innerHTML = siteContent["main-content"]["vision-h4"];


var pTextContent = document.getElementsByTagName('p');
pTextContent[0].innerText = siteContent["main-content"]["features-content"];
pTextContent[1].innerText = siteContent["main-content"]["about-content"];
pTextContent[2].innerText = siteContent["main-content"]["services-content"];
pTextContent[3].innerText = siteContent["main-content"]["product-content"];
pTextContent[4].innerText = siteContent["main-content"]["vision-content"];

// Contact

h4Titles[5].innerHTML = siteContent["contact"]["contact-h4"];

var pContact = document.getElementsByTagName('p');
pTextContent[5].innerText = siteContent["contact"]["address"];
pTextContent[6].innerText = siteContent["contact"]["phone"];
pTextContent[7].innerText = siteContent["contact"]["email"];














