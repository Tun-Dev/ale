// import "../styles/kinika.scss";
// import barba from "@barba/core";
// import gsap from "gsap/dist/gsap";

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
//   tl.from(".profilecon", { duration: 1.5, opacity: 0 });
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
