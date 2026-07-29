/* ======================================
   IMMORTAL ARTECH GAMES
   script.js
====================================== */

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// ==============================
// CLOSE MENU AFTER CLICK
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// ==============================
// STICKY NAVBAR
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ==============================
// HERO FADE EFFECT
// ==============================

const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    heroContent.style.opacity = 1 - value / 500;
    heroContent.style.transform =
        `translateY(${value * 0.25}px)`;

});

// ==============================
// PARALLAX BACKGROUND
// ==============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    hero.style.backgroundPositionY =
        offset * 0.5 + "px";

});

// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        const x = e.clientX - this.offsetLeft;
        const y = e.clientY - this.offsetTop;

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

// ==============================
// REVEAL ON SCROLL
// ==============================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();

// ==============================
// SCROLL TO TOP
// ==============================

const scrollTopBtn = document.createElement("div");

scrollTopBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

scrollTopBtn.className = "scrollTop";

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("Immortal Artech Games Website Loaded Successfully");
