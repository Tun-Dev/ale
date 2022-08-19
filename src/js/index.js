import "../styles/main.scss";
// import "../styles/kinika.scss";
import { Cursor } from "./cursor";
import barba from "@barba/core";
// import CSSRulePlugin from "gsap-trial/CSSRulePlugin";
import { gsap } from "gsap/dist/gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin, CSSPlugin);

let cursorPick = document.querySelector(".cursor");
const cursor = new Cursor(cursorPick);

// To restart the page loader
window.onload = () => {
  localStorage.removeItem("pageloadcount");

  function refreshTime() {
    document.querySelectorAll("[id=time]").forEach((clk) => {
      const dateString = new Date().toLocaleTimeString();
      const formattedString = dateString.replace(", ", " - ");
      clk.textContent = formattedString;
    });
    // const timeDisplay = document.getElementById("time");
    // const dateString = new Date().toLocaleTimeString();
    // const formattedString = dateString.replace(", ", " - ");
    // timeDisplay.textContent = formattedString;
  }

  setInterval(refreshTime, 1000);
};

// Horizontal scroll with mouse wheel
// const scrollContainer = document.getElementById("scroll");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });

// var bar1 = document.getElementById("bar1");
// var bar2 = document.getElementById("bar2");
// var bar3 = document.getElementById("bar3");
// var fullpageMenu = document.getElementById("fullpageMenu");
// var word = document.getElementById("word");
// var word2 = document.getElementById("word2");
// var word3 = document.getElementById("word3");
// var word4 = document.getElementById("word4");
// var word5 = document.getElementById("word5");

const navMobile = () => {
  var menuToggle = document.getElementById("menuToggle");
  var menubar = gsap.timeline({ paused: true });

  menubar.to(
    "#bar1",
    {
      duration: 0.5,
      attr: { d: "M8, 2 L2,8" },
      x: 1,
      ease: "Power2.easeInOut",
    },
    "start"
  );
  menubar.to(
    "#bar2",
    {
      duration: 0.5,
      attr: { d: "M8, 8 L2,2" },
      x: 1,
      ease: "Power4.easeInOut",
    },
    "start"
  );
  menubar.to(
    "#bar3",
    {
      duration: 0.5,
      attr: { d: "M8, 8 L2,2" },
      x: 1,
      ease: "Power4.easeInOut",
    },
    "start"
  );
  menubar.reverse();

  var navtl = gsap.timeline({ paused: true });

  navtl.to("#fullpageMenu", {
    duration: 0.7,
    // display: "block",
    height: "100vh",
    opacity: 1,
    ease: "Power4.easeInOut",
  });
  navtl.to("#fullpageMenuInner", {
    duration: 0.5,
    display: "flex",
    // height: "100vh",
    // opacity: 1,
    ease: "Power4.easeInOut",
  });
  navtl.to(["#word", "#word2", "#word3", "#word4"], {
    y: "0%",
    duration: 0.5,
    // skewX: 10,
    stagger: {
      each: 0.2,
      // amount: 0.15,
    },
  });

  navtl.reverse();

  menuToggle.addEventListener("click", () => {
    menubar.reversed(!menubar.reversed());
    navtl.reversed(!navtl.reversed());
  });
};

// GAllery footer animation
function galleryFooter() {
  let footer = document.getElementById("footer");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      // footer.style.display = "flex";
      footer.classList.add("active");
    } else {
      footer.classList.remove("active");

      // footer.style.display = "none";
    }
  }

  const button = document.getElementById("backToTop");
  button.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}

function pageTransition() {
  var tl = gsap.timeline();

  gsap.set(".exit-transition", {
    zIndex: 30,
    top: "unset",
    bottom: 0,
  });
  gsap.set(".exit-span", {
    opacity: 1,
  });
  tl.to(".exit-transition", {
    height: window.innerHeight,
    // duration: 1.5,
    duration: 1,
    ease: "Expo.easeInOut",
  })
    .set(".exit-transition", {
      top: 0,
      bottom: "unset",
    })
    .from(
      ".exit-span",
      {
        yPercent: 110,
        duration: 1,
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
        ease: "power2.out",
      },
      "-=.5"
    )
    .to(".exit-span", {
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .to(
      ".exit-transition",
      {
        height: 0,
        duration: 1.5,
        ease: "Expo.easeInOut",
      },
      "-=1"
    );
}

function contentAnimation() {
  var tl = gsap.timeline();

  // Home page Transitions
  // tl.set(".imgcon", { autoAlpha: 1 });

  var loderTl = gsap.timeline();
  var shuffleTl = gsap.timeline({
    repeat: -1,
    // repeatRefresh: true,
  });

  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/"
  ) {
    loderTl.from(".load-bar", { delay: 0.5, opacity: 0, duration: 1 });
    loderTl
      .to(".word1", { duration: 0.7, y: "0%" })
      .to(".word1", {
        delay: 0.3,
        duration: 0.5,
        opacity: 0,
      })
      .to(".word2", { duration: 0.7, y: "0%" })
      .to(".word2", {
        delay: 0.7,
        duration: 0.5,
        opacity: 0,
      })
      .to(".word3", { duration: 0.7, y: "0%" })
      .to(".word3", {
        delay: 0.7,
        duration: 0.5,
        opacity: 0,
      })
      .to(".word4", { duration: 0.7, y: "0%" })
      .to(".word4", {
        delay: 0.7,
        duration: 0.5,
        opacity: 0,
      })
      .to(".word5", { duration: 0.7, y: "0%" })
      .to(".word5", {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
      })
      .to(".word6", { duration: 0.7, y: "0%" });
    loderTl
      .to(
        ".bar",
        {
          width: "30%",
          duration: 6,
          ease: "power4.out",
        },
        "-=9"
      )
      .to(
        ".bar",
        {
          width: "70%",
          duration: 6,
          ease: "power4.out",
        },
        "-=7"
      )
      .to(
        ".bar",
        {
          width: "100%",
          duration: 6,
          ease: "power4.out",
        },
        "-=4"
      );
    loderTl.to([".load-words", ".load-bar"], { delay: 0, opacity: 0 }).to(
      ".home-loader",
      {
        delay: 0.9,
        opacity: 0,
        height: 0,
        duration: 1.5,
        ease: "Expo.easeInOut",
      },
      "-=1"
    );

    tl.from(".shuffle-con", {
      duration: 2,
      opacity: 0,
      ease: "Expo.easeInOut",
      // ease: "power4.out",
      // height: "365px",
    });

    tl.to(".name h1", { duration: 0.9, y: "0%", delay: 0.7 });
    tl.to(".title h4", {
      duration: 0.5,
      y: "0%",
      stagger: {
        amount: 0.5,
      },
    });
    tl.to(
      ".links li",
      {
        duration: 0.5,
        y: "0%",
        stagger: {
          amount: 0.5,
        },
      },
      "-=.5"
    );
    tl.to(
      ".shuffle-con > .block",
      {
        duration: 2,
        // y: "0%",
        height: "100%",
        ease: "Expo.easeInOut",
        // ease: "power4.out",
        repeat: -1,
        delay: 1,
        stagger: {
          each: 3,
        },
      },
      "-=3"
    );

    if (localStorage.getItem("pageloadcount")) {
      loderTl.kill();
      gsap.to(".home-loader", { opacity: 0, display: "none" });
      // document.querySelector(".home-loader").style.display = "none";
    }
  }
  localStorage.setItem("pageloadcount", "1");
  // loader();

  var tll = gsap.timeline();

  // Gallery Page Transition
  if (
    window.location.pathname === "/gallery.html" ||
    window.location.pathname === "/gallery"
  ) {
    // Popup for pictures

    var openPopup = document.querySelectorAll(".gallery-div .div-imgs img");
    var closePopup = document.querySelector(".popup .left-pop button");
    var closePopup2 = document.querySelectorAll(".float-btn");

    var popupTL = gsap.timeline({ paused: true });

    popupTL.to(".popup", {
      duration: 0.9,
      // height: "calc(100vh - 60px)",
      height: "100%",
      bottom: 0,
      // zIndex: 99,
      ease: "Power2.easeInOut",
    });
    popupTL
      .to([".left-pop", ".right-pop"], {
        duration: 0.7,
        display: "flex",
      })
      .to(
        ".right-pop .img-cover",
        {
          duration: 1,
          // y: "0%",
          height: "0%",
          ease: "Expo.easeInOut",
        },
        "-=1"
      )
      .from(
        [".left-word h1", ".view-btn"],
        {
          yPercent: 110,
          duration: 1,
          // skewY: 10,
          // stagger: {
          //   amount: 0.3,
          // },
          ease: "power2.out",
        }
        // "-=.5"
      )
      .from(
        ".left-word p",
        {
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=.9"
      );
    // .to(".left-pop .left-word h1 span", {
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power4.out",
    // })
    popupTL.reverse();

    openPopup.forEach((popup) => {
      popup.onclick = () => {
        document.querySelector(".popup .right-pop img").src =
          popup.getAttribute("src");
        document.querySelector(".popup .left-pop .left-word h1").innerHTML =
          popup.getAttribute("data-title");
        document.querySelector(".popup .left-pop .left-word p").innerHTML =
          popup.getAttribute("data-body");
        popupTL.reversed(!popupTL.reversed());
      };
    });

    closePopup2.forEach((close) => {
      close.onclick = () => {
        popupTL.reversed(!popupTL.reversed());
      };
    });

    // closePopup2.onclick = () => {
    //   popupTL.reversed(!popupTL.reversed());
    // };

    // document.querySelectorAll(".gallery-div .div-imgs img").forEach((image) => {
    //   image.onclick = () => {
    //     // document.querySelector(".popup").style.display = "flex";
    //     // height: calc(100vh - 60px);
    //     document.querySelector(".popup").style.height = "calc(100vh - 60px)";
    //     // document.querySelector(".popup").style.transition = "height 2s";
    //     document.querySelector(".popup .right-pop img").src =
    //       image.getAttribute("src");
    //     document.querySelector(".popup .left-pop .left-word h1").innerHTML =
    //       image.getAttribute("data-title");
    //     document.querySelector(".popup .left-pop .left-word p").innerHTML =
    //       image.getAttribute("data-body");
    //   };
    // });
    // document.querySelector(".popup .left-pop button").onclick = () => {
    //   document.querySelector(".popup").style.display = "none";
    // };
    // Horizontal scroll with mouse wheel

    var x = window.matchMedia("(min-width: 800px)");
    const scrollContainer = document.getElementById("scroll");

    function testing(x) {
      if (x.matches) {
        scrollContainer.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          scrollContainer.scrollLeft += evt.deltaY;
        });
      } else {
        scrollContainer.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          // evt.defaultPrevented();
          scrollContainer.scrollTop += evt.deltaX;
        });
      }
    }

    testing(x);
    x.addEventListener("change", testing);

    navMobile();

    // gsap.set(".galcon", {
    //   delay: 2.5,
    //   zIndex: 30,
    //   top: "unset",
    //   bottom: 0,
    // });
    // gsap.set(".innercon-galcon", {
    //   opacity: 1,
    // });
    // tll.to(".galcon", {
    //   height: window.innerHeight,
    //   // duration: 1.5,
    //   duration: 1,
    //   ease: "Expo.easeInOut",
    // });
    // tll.set(".galcon", {
    //   top: 0,
    //   bottom: "unset",
    // });
    // tll
    //   .from([".innercon-galcon h4", ".innercon-galcon h5"], {
    //     delay: 1.5,
    //     yPercent: 300,
    //     duration: 1.5,
    //     // skewY: 10,
    //     stagger: {
    //       amount: 0.3,
    //     },
    //     ease: "power2.out",
    //   })
    //   .to(".innercon-galcon", {
    //     delay: 3,
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power4.out",
    //   })
    //   .to(
    //     ".galcon",
    //     {
    //       delay: 0.9,
    //       height: 0,
    //       duration: 1.5,
    //       ease: "Expo.easeInOut",
    //     },
    //     "-=1"
    //   );
    // tll
    //   .to(
    //     ".after",
    //     {
    //       // delay: 0.5,
    //       duration: 1.4,
    //       width: "0%",
    //       ease: "Power2.easeInOut",
    //     },
    //     "-=.5"
    //   )
    //   .from(
    //     ".img-container img",
    //     {
    //       duration: 1.4,
    //       scale: 1.6,
    //       ease: "Power2.easeInOut",
    //     },
    //     "-=1.5"
    //   )
    //   .to(".word h5", { duration: 1.2, y: "0%", ease: "power2.out" }, "-=1");
    // galleryFooter();
  }

  var kinikaTl = gsap.timeline();

  if (
    window.location.pathname === "/kinika.html" ||
    window.location.pathname === "/kinika"
  ) {
    // navMobile();
    kinikaTl.from(".innercon .right", {
      delay: 1.2,
      duration: 1.5,
      opacity: 0,
    });
  }

  var contactTl = gsap.timeline();

  if (
    window.location.pathname === "/contact.html" ||
    window.location.pathname === "/contact"
  ) {
    console.log("Contact");
    navMobile();
    // For the Time Stamp on the footer
    // contactTl.from(".contact-span", {
    //   delay: 1.2,
    //   yPercent: 110,
    //   duration: 0.6,
    //   // skewY: 10,
    //   stagger: {
    //     amount: 2,
    //   },
    //   ease: "power4.inout",
    // });
    // contactTl
    //   .from(
    //     ".botcon h2",
    //     {
    //       yPercent: 110,
    //       duration: 0.6,
    //     },
    //     "-=2"
    //   )
    //   .from(
    //     ".botcon div a",
    //     {
    //       yPercent: 110,
    //       duration: 0.6,
    //       stagger: {
    //         amount: 1,
    //       },
    //     },
    //     "-=2"
    //   );
    // navMobile();
  }

  if (
    window.location.pathname === "/articles.html" ||
    window.location.pathname === "/articles"
  ) {
    console.log("Article");
    navMobile();
  }

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

    requestAnimationFrame(() => update());
  };

  // console.log(window.location.pathname);

  if (
    window.location.pathname === "/gallery" ||
    window.location.pathname === "/gallery.html"
  ) {
    // update();
  }

  // Navbar mobile animation
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
