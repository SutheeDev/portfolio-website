gsap.registerPlugin(ScrollTrigger);

// --------------------------------
// Hide the loading-container when the page is done loading
// --------------------------------
window.addEventListener("load", () => {
  const loadingContainer = document.querySelector(".loading-container");
  loadingContainer.style.opacity = "0";
  loadingContainer.style.zIndex = "0";
});

// --------------------------------
// Scroll To
// --------------------------------
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
const linkAbout = document.querySelector(".link-to-about");
const linkProjects = document.querySelector(".link-to-projects");
const linkContact = document.querySelector(".link-to-contact");
linkAbout.addEventListener("click", () =>
  aboutSection.scrollIntoView({ behavior: "smooth" })
);
linkProjects.addEventListener("click", () =>
  projectsSection.scrollIntoView({ behavior: "smooth" })
);
linkContact.addEventListener("click", () =>
  contactSection.scrollIntoView({ behavior: "smooth" })
);

// --------------------------------
// Words Animation Data
// --------------------------------
const swiperWrapper1 = document.querySelector(".swiper-wrapper1");
const words = [
  "interactive systems",
  "scalable platforms",
  "motion design",
  "automation",
  "system design",
  "data interfaces",
  "developer tools",
  "creative tech",
];

let allWords = words
  .map((word) => {
    return `<h3 class="words-animation contactInView swiper-slide">${word}</h3>`;
  })
  .join("");
swiperWrapper1.innerHTML = allWords;

// --------------------------------
// Words Animation Functionality
// --------------------------------
const swiper1 = new Swiper(".swiper1", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  direction: "vertical",
  clickable: false,
  allowTouchMove: false,
});
ScrollTrigger.create({
  trigger: ".interested",
  start: "top 80%",
  end: "bottom 80%",
  onEnter: () => {
    setTimeout(() => {
      swiper1.autoplay.start();
    }, 1500);
  },
  onLeaveBack: () => {
    swiper1.autoplay.stop();
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const headerLine = document.querySelector(".header-line");
  const logo = document.querySelector(".logo");
  const introText1 = document.querySelector(".line1-slide");
  const introText2 = document.querySelector(".line2-slide");
  const introTextMid = document.querySelector(".lineMid-slide");
  const introP = document.querySelector(".intro-p");
  const scrollArrow = document.querySelector(".scroll");
  let width = window.innerWidth;

  function populateText(width) {
    if (width <= 888) {
      introText1.innerText = "Creative";
      introTextMid.innerText = "Software";
      introText2.innerText = "Engineer";
    } else {
      introText1.innerText = "Creative Software";
      introTextMid.innerText = "";
      introText2.innerText = "Engineer";
    }
  }
  populateText(width);

  // --------------------------------
  // Change Intro Text
  // --------------------------------
  function changeHeadlineText(width) {
    if (width > 888) {
      introText1.innerText = "Creative Software";
      introTextMid.innerText = "";
      introText2.innerText = "Engineer";
    } else if (width > 490) {
      introText1.innerText = "Creative";
      introTextMid.innerText = "Software";
      introText2.innerText = "Engineer";
    }
  }
  // Listen to resize and change headline text;
  window.addEventListener("resize", () => {
    width = window.innerWidth;
    changeHeadlineText(width);
  });

  // --------------------------------
  // Stop Word Animation after DOM loaded
  // --------------------------------
  swiper1.autoplay.stop();

  // --------------------------------
  // H1 Animation Timeline
  // --------------------------------
  const tl = gsap.timeline();

  tl.add(() => {
    document.body.style.overflow = "hidden";
  });

  tl.fromTo(
    headerLine,
    1,
    {
      scaleX: "0%",
      x: "-50%",
      opacity: 0.5,
    },
    {
      scaleX: "100%",
      x: "0%",
      opacity: 1,
      ease: "Power2.easeInOut",
    }
  );

  tl.fromTo(
    logo,
    0.5,
    {
      opacity: 0,
      y: "-50%",
    },
    {
      opacity: 1,
      y: "0%",
      ease: "Power2.easeInOut",
    },
    "-=0.6"
  );

  tl.fromTo(
    linkAbout,
    0.5,
    {
      opacity: 0,
      y: "-50%",
    },
    {
      opacity: 1,
      y: "0%",
      ease: "Power2.easeInOut",
    },
    "-=0.4"
  );

  tl.fromTo(
    linkProjects,
    0.5,
    {
      opacity: 0,
      y: "-50%",
    },
    {
      opacity: 1,
      y: "0%",
      ease: "Power2.easeInOut",
    },
    "-=0.4"
  );

  tl.fromTo(
    linkContact,
    0.5,
    {
      opacity: 0,
      y: "-50%",
    },
    {
      opacity: 1,
      y: "0%",
      ease: "Power2.easeInOut",
    },
    "-=0.4"
  );

  tl.fromTo(
    [introText1, introTextMid],
    1,
    {
      x: "10%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      ease: "Power2.easeInOut",
    },
    "-=0.4"
  );

  tl.fromTo(
    introText2,
    1,
    {
      x: "-10%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      ease: "Power2.easeInOut",
    },
    "-=1"
  );

  tl.fromTo(
    introP,
    0.5,
    {
      y: "15%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
      ease: "Power2.easeInOut",
    },
    "-=0.7"
  );

  tl.fromTo(
    scrollArrow,
    0.7,
    {
      y: "-15%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
      ease: "Power2.easeInOut",
    },
    "-=0.7"
  );

  tl.add(() => {
    document.body.style.overflow = "visible";
  });
});

// --------------------------------
// Projects Data and Functionality
// --------------------------------
const projectsContainer = document.querySelector(".projContainer");
projects.reverse();
let allProject = projects.map((project, index) => {
  const div = document.createElement("div");
  div.classList.add("project");
  let num = index + 1;
  div.innerHTML = `
        <div class="line project-line"></div>
            <div class="project-content projInView">
                <p class="project-num">0${num}</p>
                <h2 class="project-name" onclick={window.open('${project.url}')}>${project.name}</h2>
                <div class="project-info">
                    <p class="project-desc">${project.desc}</p>
                    <p class="technology">${project.technologies}</p>
                </div>
                <button class="btn visit-btn projInView" onclick={window.open('${project.url}')}>
                    <div>
                        <p class='visit-btn-text'>visit site</p>
                        <img class="arrow-right" src="./ASSETS/SVGs/down arrow.svg" alt="right Arrow Icon">
                    </div>
                </button>
            </div>`;
  projectsContainer.appendChild(div);
});
const lineDiv = document.createElement("div");
lineDiv.classList.add("line", "project-line-last");
projectsContainer.appendChild(lineDiv);

// --------------------------------
// GSAP
// --------------------------------
// --------------------------------
// Intro
// --------------------------------
gsap.to([".line1-slide", ".lineMid-slide"], {
  scrollTrigger: {
    trigger: ".line1-slide",
    start: "5% 20%",
    scrub: 0.5,
  },
  x: 300,
});
gsap.to(".line2-slide", {
  scrollTrigger: {
    trigger: ".line2-slide",
    start: "-105% 23%",
    scrub: 0.5,
  },
  x: -300,
});
// gsap.to(".intro-p", {
//   scrollTrigger: {
//     trigger: ".intro-p",
//     scrub: 0.7,
//     start: "-20% center",
//   },
//   y: 200,
//   opacity: 0,
// });

// --------------------------------
// About Section In-View Animation
// --------------------------------
gsap.from(".aboutInView", {
  scrollTrigger: {
    trigger: ".aboutInView",
    start: "top 75%",
    end: "bottom 0%",
    toggleActions: "play complete none reverse",
  },
  stagger: {
    amount: 0.5,
  },
  y: 50,
  opacity: 0,
});

// --------------------------------
// Projects Section In-View Animation
// --------------------------------
gsap.from(".projInView", {
  scrollTrigger: {
    trigger: ".projInView",
    start: "top 80%",
    end: "bottom 0%",
    toggleActions: "play none none reverse",
  },
  stagger: {
    amount: 1,
  },
  y: 50,
  opacity: 0,
});
gsap.from(".project-line", {
  scrollTrigger: {
    trigger: ".projInView",
    start: "top 80%",
    end: "bottom 0%",
    toggleActions: "play none none reverse",
  },
  stagger: {
    amount: 1.25,
  },
  scaleX: 0,
  ease: "power2.inOut",
});

// --------------------------------
// Contact Section In-View Animation
// --------------------------------
gsap.from(".contactInView", {
  scrollTrigger: {
    trigger: ".contactInView",
    start: "top 80%",
    end: "bottom 0%",
    toggleActions: "play none none reverse",
  },
  stagger: {
    amount: 0.8,
  },
  y: 35,
  opacity: 0,
});

// --------------------------------
// Star Animation
// --------------------------------
gsap.to(".about-star", {
  scrollTrigger: {
    trigger: ".about-star",
    scrub: true,
  },
  rotate: 90,
});
gsap.to(".proj-star", {
  scrollTrigger: {
    trigger: ".proj-star",
    scrub: true,
  },
  rotate: 90,
});
gsap.to(".contact-star", {
  scrollTrigger: {
    trigger: ".contact-star",
    scrub: true,
  },
  rotate: 90,
});

// --------------------------------
// Arrow-down Animation
// --------------------------------
gsap.to(".arrow-down", {
  y: 5,
  repeat: -1,
  yoyo: true,
});

// --------------------------------
// Alter BG Color
// --------------------------------
const sections = gsap.utils.toArray(".section");
sections.forEach((section, i) => {
  var colorAttr = section.getAttribute("data-color");

  gsap.to(".body", {
    backgroundColor: colorAttr,
    immediateRender: false,
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: "20% bottom",
      end: "+=100%",
    },
  });
});

// --------------------------------
// Button Functionalities
// --------------------------------
const emailBtn = document.querySelector(".email-btn");
const myEmail = document.querySelector(".email");
var copyText = document.querySelector(".copy-email");
copyText.innerHTML = copyText.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

emailBtn.addEventListener("mouseover", () => {
  anime({
    targets: ".copy-email span",
    translateY: [20, 0],
    duration: 400,
    easing: "easeOutElastic(1, .6)",
    delay: anime.stagger(20),
  });
});
const swiper2 = new Swiper(".swiper2", {
  duration: 1500,
  clickable: false,
  allowTouchMove: false,
});
emailBtn.addEventListener("click", () => {
  copyToClipboard();

  swiper2.slideNext();
});
function copyToClipboard() {
  let inputEl = document.createElement("input");
  inputEl.value = myEmail.innerText;
  document.body.appendChild(inputEl);
  inputEl.select();
  document.execCommand("copy");
  inputEl.parentNode.removeChild(inputEl);
}
emailBtn.addEventListener("mouseout", () => {
  anime({
    targets: ".copy-email span",
    translateY: [0, 20],
    duration: 400,
    easing: "easeInElastic(1, .6)",
    delay: anime.stagger(20, { from: "last" }),
  });
  setTimeout(() => {
    swiper2.slidePrev();
  }, 500);
});
