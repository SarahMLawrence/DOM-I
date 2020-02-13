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
    "vision-content": "Vision content elementum magna eros, ac posuerehj elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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

//imgs
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let middImg = document.getElementById("middle-img");
middImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//header h1 and btn
let headerH1 = document.getElementsByTagName("h1");
headerH1[0].innerHTML = siteContent["cta"]["h1"];

let headerBTN = document.getElementsByTagName("button");
headerBTN[0].innerHTML = siteContent["cta"]["button"];

//nav - using forEach to select ALL nav items
let navItems = document.querySelectorAll("a");
navItems.forEach((e, i) => {
  e.innerHTML = siteContent["nav"][`nav-item-${i+1}`]
});

//using for loop to change color of nav items
for (let i = 0; i<navItems.length; i++){
  navItems[i].style.color = 'green';
}

//create new nav elements

let newNav1 = document.createElement("a");
newNav1.innerHTML = "Blog";
newNav1.style.color = 'green';
newNav1.setAttribute("href", "#");

let newNav2 = document.createElement("a");
newNav2.innerHTML = "Portfolio";
newNav2.style.color = 'green';
newNav2.setAttribute("href", "#");

let newNav = document.querySelector('nav');
newNav.appendChild(newNav1); //places new nav at the end 
newNav.prepend(newNav2); //place new nav at the beginning

//all paragraphs 
let allP = document.getElementsByTagName("p");
allP[0].innerHTML = siteContent["main-content"]["features-content"];
allP[1].innerHTML = siteContent["main-content"]["about-content"];
allP[2].innerHTML = siteContent["main-content"]["product-content"];
allP[3].innerHTML = siteContent["main-content"]["services-content"];
allP[4].innerHTML = siteContent["main-content"]["vision-content"];
allP[5].innerHTML = siteContent["contact"]["address"];
allP[6].innerHTML = siteContent["contact"]["email"];
allP[7].innerHTML = siteContent["contact"]["phone"];
allP[8].innerHTML = siteContent["footer"]["copyright"];



//all H4
let allH4 = document.getElementsByTagName("h4");
allH4[0].innerHTML = siteContent["main-content"]["features-h4"];
allH4[1].innerHTML = siteContent["main-content"]["about-h4"];
allH4[2].innerHTML = siteContent["main-content"]["product-h4"];
allH4[3].innerHTML = siteContent["main-content"]["services-h4"];
allH4[4].innerHTML = siteContent["main-content"]["vision-h4"];
allH4[5].innerHTML = siteContent["contact"]["contact-h4"];


//create new nav items using append/prepend child



