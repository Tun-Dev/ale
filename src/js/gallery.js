// import "../styles/gallery.scss";
// import "../styles/main.scss";
// import gsap from "gsap/dist/gsap";
// import barba from "@barba/core";

// import { Cursor } from "./cursor";

// let cursorPick = document.querySelector(".cursor");
// const cursor = new Cursor(cursorPick);

// function pageTransition() {
//   var tl = gsap.timeline();

//   tl.to("ul.transition li", {
//     duration: 0.7,
//     scaleY: 1,
//     transformOrigin: "bottom left",
//     stagger: 0.2,
//   });
//   tl.to("ul.transition li", {
//     duration: 0.7,
//     scaleY: 0,
//     transformOrigin: "top left",
//     stagger: 0.1,
//     delay: 0.5,
//   });
// }

// function contentAnimation() {
//   var tl = gsap.timeline();
//   tl.from(".galleryinner", { duration: 1.5, opacity: 0 });
// }

// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// barba.init({
//   sync: true,

//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();

//         pageTransition();
//         await delay(1500);
//         done();
//       },

//       async enter(data) {
//         contentAnimation();
//       },

//       async once(data) {
//         contentAnimation();
//       },
//     },
//   ],
// });

// const content = document.querySelector(".gallerycon");
// const maxSkew = 15;
// const maxRotate = 10;

// let currentPosition = window.pageYOffset;

// function skewEffect() {
//   const newPosition = window.pageYOffset;
//   const dif = newPosition - currentPosition;

//   let skew = dif * 0.8;
//   let rotate = dif * 0.2;
//   if (skew > maxSkew || skew < -maxSkew) {
//     if (skew > 0) {
//       skew = maxSkew;
//     } else if (skew < 0) {
//       skew = -maxSkew;
//     }
//   }
//   if (rotate > maxRotate || rotate < -maxRotate) {
//     if (rotate > 0) {
//       rotate = maxRotate;
//     } else if (skew < 0) {
//       rotate = -maxRotate;
//     }
//   }

//   content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
//   currentPosition = newPosition;
//   requestAnimationFrame(skewEffect);
// }

// skewEffect();
