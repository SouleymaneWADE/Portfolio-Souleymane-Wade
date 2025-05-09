/* =====================================================
  Resume section tabs and tab contents
===================================================== */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function (resumeTabClick) {
  resumeTabContents.forEach((resumeTabContent) => {
    resumeTabContent.style.display = "none";
    resumeTabContent.classList.remove("active");
  });

  resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
    resumePortfolioTabBtn.classList.remove("active");
  });

  resumeTabContents[resumeTabClick].style.display = "flex";

  setTimeout(() => {
    resumeTabContents[resumeTabClick].classList.add("active");
  }, 100);

  resumeTabContents[resumeTabClick].classList.add("active");

  resumePortfolioTabBtns[resumeTabClick].classList.add("active");
};

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
  resumePortfolioTabBtn.addEventListener("click", () => {
    resumeTabNav(i);
  });
});

/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals = document.querySelectorAll(
  ".service-container .card-with-modal"
);

serviceCardWithModals.forEach((serviceCardWithModal) => {
  const serviceCard = serviceCardWithModal.querySelector(".service-card");
  const serviceBackDrop = serviceCardWithModal.querySelector(
    ".service-modal-backdrop"
  );
  const serviceModal = serviceCardWithModal.querySelector(".service-modal");
  const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

  serviceCard.addEventListener("click", () => {
    serviceBackDrop.style.display = "flex";

    setTimeout(() => {
      serviceBackDrop.classList.add("active");
    }, 100);

    setTimeout(() => {
      serviceModal.classList.add("active");
    }, 300);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      serviceBackDrop.style.display = "none";
    }, 500);

    setTimeout(() => {
      serviceBackDrop.classList.remove("active");
      serviceModal.classList.remove("active");
    }, 100);
  });
});
/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
  const portfolioTabs = document.querySelector(".portfolio-tabs");
  const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
  const cardsWithModals = document.querySelectorAll(
    ".portfolio-container .card-with-modal"
  );

  portfolioTabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const filter = tabBtn.getAttribute("data-filter");

      cardsWithModals.forEach((cardWithModal) => {
        if (filter === "tout" || cardWithModal.classList.contains(filter)) {
          cardWithModal.classList.remove("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = "1";
            cardWithModal.style.transition = ".5s ease";
          }, 1);
        } else {
          cardWithModal.classList.add("hidden");

          setTimeout(() => {
            cardWithModal.style.opacity = "0";
            cardWithModal.style.transition = ".5s ease";
          }, 1);
        }
      });
      // Add
      portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
      tabBtn.classList.add("active");
    });
  });
});

// Open/Close Portfolio modals.
const portfolioCardsWithModals = document.querySelectorAll(
  ".portfolio-container .card-with-modal"
);

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
  const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
  const portfolioBackdrop = portfolioCardWithModal.querySelector(
    ".portfolio-modal-backdrop"
  );
  const portfolioModal =
    portfolioCardWithModal.querySelector(".portfolio-modal");
  const modalCloseBtn =
    portfolioCardWithModal.querySelector(".modal-close-btn");

  portfolioCard.addEventListener("click", () => {
    portfolioBackdrop.style.display = "flex";

    setTimeout(() => {
      portfolioBackdrop.classList.add("active");
    }, 300);

    setTimeout(() => {
      portfolioModal.classList.add("active");
    }, 300);
  });

  modalCloseBtn.addEventListener("click", () => {
    setTimeout(() => {
      portfolioBackdrop.style.display = "none";
    }, 500);

    setTimeout(() => {
      portfolioBackdrop.classList.remove("active");
      portfolioModal.classList.remove("active");
    }, 100);
  });
});

/* =====================================================
   Testimonial Swiper
===================================================== */
var swiper = new Swiper(".wade-client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "vtnhFMd-_cfKm3uXK",
  });
})();

wadeContactForm = document.getElementById("wade-contact-form");
wadeContactFormAlert = document.querySelector(".contact-form-alert");

wadeContactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs
    .sendForm("service_d5k4dow", "template_hmf6vib", "#wade-contact-form")
    .then(
      () => {
        //   console.log('SUCCESS!');
        wadeContactFormAlert.innerHTML =
          "<span>Votre message est envoyé avec succes !</span> <i class'ri-checkbox-circle-fill'></i>";
        wadeContactForm.reset();

        setTimeout(() => {
          wadeContactFormAlert.innerHTML = "";
        }, 5000);
      },
      (error) => {
        //   console.log('FAILED...', error);
        wadeContactFormAlert.innerHTML =
          "<span>Message non envoyé !</span> <i class='ri-error-warning-fill'></i>";
        wadeContactFormAlert.title = error;
      }
    );
});

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
  const wadeHeader = document.querySelector(".wade-header");

  wadeHeader.classList.toggle("shrink", window.scrollY > 0);
});

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
  const navMenuSections = document.querySelectorAll(".nav-menu-section");
  const scrollY = window.pageYOffset;

  navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".bottom-nav .menu li a[href*=" + id + "]")
        .classList.remove("current");
    }
  });
});

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.querySelector(".bottom-nav");

  bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
  bottomNav.classList.add("active");
  menuShowBtn.classList.remove("active");

  if (window.scrollY < 10) {
    menuHideBtn.classList.remove("active");

    function scrollStopped() {
      bottomNav.classList.add("active");
    }

    clearTimeout(navTimeout);
    navTimeout = setTimeout(scrollStopped, 2500);
  }

  if (window.scrollY > 10) {
    menuHideBtn.classList.add("active");

    function scrollStopped() {
      bottomNav.classList.remove("active");
      menuShowBtn.classList.add("active");
    }

    clearTimeout(navTimeout);
    navTimeout = setTimeout(scrollStopped, 2500);
  }
});

// Hide bottom navigation menu on click menu-hide-btn.
menuHideBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.toggle("active");
  menuShowBtn.classList.toggle("active");
});

// Show bottom navigation menu on click menu-show-btn.
menuShowBtn.addEventListener("click", () => {
  bottomNav.classList.toggle("active");
  menuHideBtn.classList.add("active");
  menuShowBtn.classList.toggle("active");
});

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */
window.addEventListener("scroll", () => {
  const toTopBtn = document.querySelector(".to-top-btn");

  toTopBtn.classList.toggle("active", window.scrollY > 0);

  const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

  const pageScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollValue = (pageScroll / height) * 100;

  scrollIndicatorBar.style.height = scrollValue + "%";
});

/* =====================================================
   Customized cursor on mousemove
===================================================== */
const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorDot.style.top = y + "px";
  cursorDot.style.left = x + "px";
  cursorCircle.style.top = y + "px";
  cursorCircle.style.left = x + "px";
});

// Cursor effects on hover website elements.
const cursorHoverlinks = document.querySelectorAll(
  "body a, .theme-btn, .wade-main-btn, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn"
);

cursorHoverlinks.forEach((cursorHoverlink) => {
  cursorHoverlink.addEventListener("mouseover", () => {
    cursorDot.classList.add("large");
    cursorCircle.style.display = "none";
  });
});

cursorHoverlinks.forEach((cursorHoverlink) => {
  cursorHoverlink.addEventListener("mouseout", () => {
    cursorDot.classList.remove("large");
    cursorCircle.style.display = "block";
  });
});

/* =====================================================
   Website dark/light theme
===================================================== */

const themeBtn = document.querySelector(".theme-btn");
const darkAvatar = document.querySelector(".dark-avatar");
const lightAvatar = document.querySelector(".light-avatar");
const brightAvatar = document.querySelector(".bright-avatar");

// Gestion des images de la section "about-img"
const darkAbout = document.querySelector(".dark-about");
const lightAbout = document.querySelector(".light-about");
const brightAbout = document.querySelector(".bright-about");

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("bright-light-theme");
    themeBtn.classList.remove("active-sun-icon");
    themeBtn.classList.add("active-bright-sun-icon");

    // Gestion des avatars
    darkAvatar.style.display = "none";
    lightAvatar.style.display = "none";
    brightAvatar.style.display = "block";

    // Gestion des images "about-img"
    darkAbout.style.display = "none";
    lightAbout.style.display = "none";
    brightAbout.style.display = "block";
  } else if (document.body.classList.contains("bright-light-theme")) {
    document.body.classList.remove("bright-light-theme");
    document.body.classList.add("light-theme");
    themeBtn.classList.remove("active-bright-sun-icon");

    // Gestion des avatars
    darkAvatar.style.display = "none";
    lightAvatar.style.display = "block";
    brightAvatar.style.display = "none";

    // Gestion des images "about-img"
    darkAbout.style.display = "none";
    lightAbout.style.display = "block";
    brightAbout.style.display = "none";
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    themeBtn.classList.add("active-sun-icon");

    // Gestion des avatars
    darkAvatar.style.display = "block";
    lightAvatar.style.display = "none";
    brightAvatar.style.display = "none";

    // Gestion des images "about-img"
    darkAbout.style.display = "block";
    lightAbout.style.display = "none";
    brightAbout.style.display = "none";
  }

  const getCurrentTheme = () => {
    if (document.body.classList.contains("dark-theme")) return "dark";
    if (document.body.classList.contains("light-theme")) return "light";
    return "bright-light";
  };

  localStorage.setItem("wade-saved-theme", getCurrentTheme());
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("wade-saved-theme") || "dark";

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeBtn.classList.add("active-sun-icon");

    // Gestion des avatars
    darkAvatar.style.display = "block";
    lightAvatar.style.display = "none";
    brightAvatar.style.display = "none";

    // Gestion des images "about-img"
    darkAbout.style.display = "block";
    lightAbout.style.display = "none";
    brightAbout.style.display = "none";
  } else if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeBtn.classList.add("active-bright-sun-icon");

    // Gestion des avatars
    darkAvatar.style.display = "none";
    lightAvatar.style.display = "block";
    brightAvatar.style.display = "none";

    // Gestion des images "about-img"
    darkAbout.style.display = "none";
    lightAbout.style.display = "block";
    brightAbout.style.display = "none";
  } else if (savedTheme === "bright-light") {
    document.body.classList.add("bright-light-theme");

    // Gestion des avatars
    darkAvatar.style.display = "none";
    lightAvatar.style.display = "none";
    brightAvatar.style.display = "block";

    // Gestion des images "about-img"
    darkAbout.style.display = "none";
    lightAbout.style.display = "none";
    brightAbout.style.display = "block";
  }
});

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.
ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Target elements and specify options to create reveal animations.
ScrollReveal().reveal(".avatar-img", { delay: 100, origin: "top" });
ScrollReveal().reveal(".avatar-info, .section-title", {
  delay: 300,
  origin: "top",
});
ScrollReveal().reveal(".home-social, .home-scroll-btn, .copy-right", {
  delay: 600,
  origin: "bottom",
});
ScrollReveal().reveal(".about-img", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".about-info, .wade-footer .wade-logo", {
  delay: 300,
  origin: "bottom",
});
ScrollReveal().reveal(
  ".pro-card, .about-buttons .wade-main-btn, .resume-tabs .tab-btn, .portfolio-tabs .tab-btn",
  { delay: 500, origin: "right", interval: 200 }
);
ScrollReveal().reveal("#resume .section-content", {
  delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(
  ".service-card, .portfolio-card, .contact-item, .contact-social-links li, .footer-menu .menu-item",
  { delay: 300, origin: "bottom", interval: 300 }
);
ScrollReveal().reveal(".wade-client-swiper, .contact-form-body", {
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(".contact-info h3", {
  delay: 100,
  origin: "bottom",
  interval: 300,
});
