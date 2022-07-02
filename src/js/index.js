import "../styles/main.scss";
// import "../styles/kinika.scss";
import { Cursor } from "./cursor";
import barba from "@barba/core";
import gsap from "gsap/dist/gsap";

let cursorPick = document.querySelector(".cursor");
const cursor = new Cursor(cursorPick);

function pageTransition() {
  var tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.7,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2,
  });
  tl.to("ul.transition li", {
    duration: 0.7,
    scaleY: 0,
    transformOrigin: "top left",
    stagger: 0.1,
    delay: 0.5,
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  // tl.from(".HomeContainer", { duration: 1.5, opacity: 0 });
  // tl.from(".galleryinner", { duration: 4.5, opacity: 0 });

  // Animation for cursor to increase when hovering on links
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });
  document.querySelectorAll("button").forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });

  // Skew scrolling for gallery page

  const section = document.querySelector(".galleryinner");

  let currentPos = window.pageYOffset;

  const update = () => {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.15;

    section.style.transform = `skewY(${speed}deg)`;

    currentPos = newPos;

    requestAnimationFrame(update);
  };

  console.log(window.location.pathname);

  if (window.location.pathname === "/gallery.html") {
    update();
  }
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      },
    },
  ],
});
