import "../styles/main.scss";
import { Cursor } from "./cursor";
import barba from "@barba/core";
import { gsap } from "gsap/dist/gsap";

let cursorPick = document.querySelector(".cursor");
const cursor = new Cursor(cursorPick);

// To restart the page loader
window.onload = () => {
  localStorage.removeItem("pageloadcount");

  // Timer for contact page
  function refreshTime() {
    document.querySelectorAll("[id=time]").forEach((clk) => {
      const dateString = new Date().toLocaleTimeString();
      const formattedString = dateString.replace(", ", " - ");
      clk.textContent = formattedString;
    });
  }

  setInterval(refreshTime, 1000);
};

// Mobile Navbar animation
const navMobile = () => {
  var menuToggles = document.querySelectorAll("#menuToggle");
  var menubar = gsap.timeline();

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

  var navtl = gsap.timeline();

  navtl.to("#fullpageMenu", {
    duration: 0.7,
    height: "100vh",
    opacity: 1,
    ease: "Power4.easeInOut",
  });
  navtl.to("#fullpageMenuInner", {
    duration: 0.5,
    display: "flex",
    ease: "Power4.easeInOut",
  });
  navtl.to(["#word", "#word2", "#word3", "#word4"], {
    y: "0%",
    duration: 0.5,
    stagger: {
      each: 0.2,
    },
  });

  navtl.reverse();

  menuToggles.forEach((menuToggle) => {
    menuToggle.onclick = () => {
      menubar.reversed(!menubar.reversed());
      navtl.reversed(!navtl.reversed());
    };
  });
};

// Transition between pages animation
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

// Content animation, this means all animations that are in every page is here due to barbajs setup
function contentAnimation() {
  var tl = gsap.timeline();
  var loderTl = gsap.timeline();

  // Animation for home page for both the loader and home page
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
        height: "100%",
        ease: "Expo.easeInOut",

        repeat: -1,
        delay: 1,
        stagger: {
          each: 3,
        },
      },
      "-=3"
    );

    // This checks if the home page has been loaded once, then adds to the local storage so loader won't play again until you refresh the page, should fix soon tho :)
    if (localStorage.getItem("pageloadcount")) {
      loderTl.kill();
      gsap.to(".home-loader", { opacity: 0, display: "none" });
    }
  }
  // Sets the local storage to 1 so the loader won't play again until you refresh the page.
  localStorage.setItem("pageloadcount", "1");

  var tll = gsap.timeline();

  // Gallery Page Transition
  if (
    window.location.pathname === "/gallery.html" ||
    window.location.pathname === "/gallery"
  ) {
    var openPopup = document.querySelectorAll(".gallery-div .div-imgs img");
    var closePopup = document.querySelectorAll(".float-btn");

    var popupTL = gsap.timeline({ paused: true });

    // Popup animation
    popupTL.to(".popup", {
      duration: 0.9,
      height: "100%",
      bottom: 0,
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
          height: "0%",
          ease: "Expo.easeInOut",
        },
        "-=1"
      )
      .from([".left-word h1", ".view-btn"], {
        yPercent: 110,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        ".left-word p",
        {
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=.9"
      );
    popupTL.reverse();

    // This listens to each click on the image and then plays the popup animation
    openPopup.forEach((popup) => {
      popup.onclick = () => {
        document.querySelector(".popup .right-pop .popupimg").src =
          popup.getAttribute("src");
        document.querySelector(".popup .left-pop .left-word h1").innerHTML =
          popup.getAttribute("data-title");
        document.querySelector(".popup .left-pop .left-word p").innerHTML =
          popup.getAttribute("data-body");
        document.querySelector(".popup .left-pop .left-word a").href =
          popup.getAttribute("data-link");
        popupTL.reversed(!popupTL.reversed());
      };
    });

    // This listens to each click on the close button and then closes the popup animation
    closePopup.forEach((close) => {
      close.onclick = () => {
        popupTL.reversed(!popupTL.reversed());
      };
    });

    // This sets the scroll to horital when page width is more than 800px
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
          scrollContainer.scrollTop += evt.deltaX;
        });
      }
    }

    testing(x);
    x.addEventListener("change", testing);

    navMobile();
  }

  // Profile page transition
  var kinikaTl = gsap.timeline();

  if (
    window.location.pathname === "/kinika.html" ||
    window.location.pathname === "/kinika"
  ) {
    navMobile();
    kinikaTl.from(".innercon .right", {
      delay: 1.2,
      duration: 1.5,
      opacity: 0,
    });
  }

  // Contact page transition
  if (
    window.location.pathname === "/contact.html" ||
    window.location.pathname === "/contact"
  ) {
    navMobile();
  }

  // Article page transition
  if (
    window.location.pathname === "/articles.html" ||
    window.location.pathname === "/articles"
  ) {
    navMobile();
  }

  // This listen to mouseenter and mouseleave for cursor to increase on enter and decrease on leave on elements like a and button
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });
  document.querySelectorAll("button").forEach((link) => {
    link.addEventListener("mouseenter", () => cursor.enter());
    link.addEventListener("mouseleave", () => cursor.leave());
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// Barbajs setup
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
