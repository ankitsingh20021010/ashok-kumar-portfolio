/* =========================================================
   ASHOK KUMAR PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   1. MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}



/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICK
========================================================= */

const navLinks = document.querySelectorAll(
    ".nav-menu a"
);


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (!navMenu) return;

        navMenu.classList.remove("active");

        const icon = menuBtn?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

});



/* =========================================================
   3. ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll(
    "section[id]"
);


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");


        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();



/* =========================================================
   4. NAVBAR SHADOW ON SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(13, 27, 53, 0.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();



/* =========================================================
   5. SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const targetElement =
                document.querySelector(targetId);


            if (!targetElement) return;


            event.preventDefault();


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;


            const targetPosition =
                targetElement.offsetTop -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });



/* =========================================================
   6. CLOSE MENU WHEN RESIZING TO DESKTOP
========================================================= */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 850 &&
        navMenu
    ) {

        navMenu.classList.remove("active");


        const icon =
            menuBtn?.querySelector("i");


        if (icon) {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }

});



/* =========================================================
   7. IMAGE FALLBACK
   If an image is missing, prevent broken-image icon.
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.background =
                "#eef1f5";

            image.style.objectFit =
                "cover";

            console.warn(
                "Image could not be loaded:",
                image.src
            );

        }
    );

});



/* =========================================================
   8. DOWNLOAD CV BUTTON
   Temporary placeholder until real CV is added.
========================================================= */

const cvButtons =
    document.querySelectorAll(
        ".nav-cv, .btn-outline"
    );


cvButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (event) => {

            const href =
                button.getAttribute("href");


            /*
             * CV will be added later.
             * For now prevent empty "#" navigation.
             */

            if (
                !href ||
                href === "#"
            ) {

                event.preventDefault();

                alert(
                    "Ashok Kumar's CV will be available soon."
                );

            }

        }
    );

});



/* =========================================================
   9. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .experience-card, .personal-card"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );

            revealObserver.observe(
                element
            );

        }
    );

}



/* =========================================================
   10. CURRENT YEAR
========================================================= */

const footerYear =
    document.querySelector(
        "footer strong"
    );


if (footerYear) {

    const currentYear =
        new Date().getFullYear();


    footerYear.textContent =
        `© ${currentYear} Ashok Kumar`;

}



/* =========================================================
   11. CONSOLE MESSAGE
========================================================= */

console.log(
    "Ashok Kumar Portfolio loaded successfully."
);