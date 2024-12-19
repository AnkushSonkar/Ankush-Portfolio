function initParticles() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#64FFDA",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#64FFDA",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "window", // Changed from canvas to window for better hover detection
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        // Added modes configuration
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
}

function initAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initial animations when page loads
  gsap.to("nav", {
    opacity: 1,
    duration: 1,
    delay: 0.5,
  });

  gsap.to("nav ul li", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: 1,
  });

  // Home section animations
  gsap.to("#home h1, #home h2, #home p, .cta-buttons", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 1.5,
  });

  // Scroll-triggered animations for sections
  gsap.utils.toArray("section").forEach((section, i) => {
    // Make sections visible for GSAP
    gsap.set(section, { visibility: "visible" });

    // Animate section
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      duration: 1,
    });

    // Animate section content
    const elements = section.querySelectorAll(
      ".about-content, .projects-grid, .skills-grid, .contact-content"
    );
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
      });
    });

    // Animate list items with stagger
    const listItems = section.querySelectorAll(
      "li, .project-card, .skill-category, .contact-form input, .contact-form textarea, .contact-form button, .social-links a"
    );
    gsap.to(listItems, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
    });
  });
}

//  Initialize Swiperfunction swiperJs() {
function swiperJs() {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 50,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: () => {
        document.querySelector(".swiper-button-next").style.color = "#64ffda";
        document.querySelector(".swiper-button-prev").style.color = "#64ffda";
      },
    },
  });

  let videos = document.querySelectorAll(".swiper-slide>a>video");

  videos.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.play();
      elem.playbackRate = 1.5;
    });

    elem.addEventListener("mouseleave", () => {
      elem.pause();
    });
  });
}

function sheryAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
  Shery.makeMagnet("nav>ul>li");
  Shery.makeMagnet(".social-links>a");

  Shery.imageEffect(".about-image", {
    style: 6,
    // debug: true,
    gooey: true,
  });
}

initParticles();
initAnimations();
swiperJs();
sheryAnimation();
