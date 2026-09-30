// ==============================
// JAVASCRIPT PORTFOLIO ALYAA
// ==============================


// ==============================
// 1. MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ==============================
// 2. MENU OTOMATIS TERTUTUP
// ==============================

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});


// ==============================
// 3. TAHUN FOOTER OTOMATIS
// ==============================

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


// ==============================
// 4. ANIMASI SAAT SCROLL
// ==============================

const cards =
    document.querySelectorAll(
        ".about-box, .timeline-content, .skill-card"
    );


const observer =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.2
        }

    );


cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});