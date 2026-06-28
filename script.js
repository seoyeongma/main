// ======================================================
// Seoyeong Ma Portfolio
// Main Interaction
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    const isTouch =
        window.matchMedia("(hover: none)").matches;

    if (isTouch) return;

    //--------------------------------------------------
    // Elements
    //--------------------------------------------------

    const menuItems = {

        works: document.querySelector(".menu.works"),
        texts: document.querySelector(".menu.texts"),
        bio: document.querySelector(".menu.bio"),
        cv: document.querySelector(".menu.cv"),
        contact: document.querySelector(".menu.contact")

    };

    const curves = {

        works: [

            ".works-left",
            ".works-right"

        ],

        texts: [

            ".texts-top",
            ".texts-bottom"

        ],

        bio: [

            ".bio-top",
            ".bio-bottom"

        ],

        cv: [

            ".cv-left",
            ".cv-right"

        ]

    };

    //--------------------------------------------------
    // Helper
    //--------------------------------------------------

    function highlight(selectorArray) {

        selectorArray.forEach(selector => {

            const element = document.querySelector(selector);

            if (!element) return;

            element.style.stroke = "#ff8f45";

            element.style.strokeWidth = "2.4";

        });

    }

    function reset(selectorArray) {

        selectorArray.forEach(selector => {

            const element = document.querySelector(selector);

            if (!element) return;

            element.style.stroke = "#f26b1d";

            element.style.strokeWidth = "1.8";

        });

    }

    //--------------------------------------------------
    // Hover Events
    //--------------------------------------------------

    Object.keys(curves).forEach(key => {

        const menu = menuItems[key];

        if (!menu) return;

        menu.addEventListener("mouseenter", () => {

            menu.style.transform = "scale(1.08)";

            menu.style.letterSpacing = ".08em";

            highlight(curves[key]);

        });

        menu.addEventListener("mouseleave", () => {

            menu.style.transform = "scale(1)";

            menu.style.letterSpacing = "0";

            reset(curves[key]);

        });

    });

    //--------------------------------------------------
    // Contact
    //--------------------------------------------------

    if (menuItems.contact) {

        menuItems.contact.addEventListener("mouseenter", () => {

            menuItems.contact.style.transform =
                "translateY(-4px)";

        });

        menuItems.contact.addEventListener("mouseleave", () => {

            menuItems.contact.style.transform =
                "translateY(0px)";

        });

    }

    //--------------------------------------------------
    // Center Name
    //--------------------------------------------------

    const center =
        document.querySelector(".center-name");

    if (center) {

        center.addEventListener("mouseenter", () => {

            center.style.transition =
                ".4s ease";

            center.style.letterSpacing =
                ".08em";

        });

        center.addEventListener("mouseleave", () => {

            center.style.letterSpacing =
                ".03em";

        });

    }

    //--------------------------------------------------
    // Small Mouse Parallax
    //--------------------------------------------------

    const svg =
        document.querySelector(".diagram");

    if (svg) {

        document.addEventListener("mousemove", e => {

            const x =
                (e.clientX / window.innerWidth - 0.5) * 6;

            const y =
                (e.clientY / window.innerHeight - 0.5) * 6;

            svg.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }

});
