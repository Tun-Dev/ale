// import "../styles/main.scss";
// import "../styles/kinika.scss";
import { Cursor } from "./cursor";
import barba from "@barba/core";
import gsap from "gsap/dist/gsap";

let cursorPick = document.querySelector(".cursor");
const cursor = new Cursor(cursorPick);

window.onload = () => {
  localStorage.removeItem("pageloadcount");
};

function pageTransition() {
  var tl = gsap.timeline();

  // tl.to("ul.transition li", {
  //   duration: 0.7,
  //   scaleY: 1,
  //   transformOrigin: "bottom left",
  //   stagger: 0.2,
  //   ease: "power4.easeInOut",
  // });
  // tl.to("ul.transition li", {
  //   duration: 0.7,
  //   scaleY: 0,
  //   transformOrigin: "top left",
  //   stagger: 0.1,
  //   delay: 0.7,
  //   ease: "power4.easeInOut",
  // });

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

function loader() {
  var loderTl = gsap.timeline();

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
}

function contentAnimation() {
  var tl = gsap.timeline();

  // Home page Transitions
  // tl.set(".imgcon", { autoAlpha: 1 });

  if (localStorage.getItem("pageloadcount")) {
    document.querySelector(".home-loader").style.display = "none";
  }

  localStorage.setItem("pageloadcount", "1");

  var loderTl = gsap.timeline();

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

  // loader();
  tl.from(".imgcon", {
    duration: 1.5,
    yPercent: 200,
    ease: "power2.out",
  });
  tl.from(".imgcon img", {
    duration: 1.5,
    yPercent: -100,
    scale: 1.3,
    delay: -1.5,
    ease: "Power2.out",
  });
  tl.to(".name h1", { duration: 0.9, y: "0%", delay: 0.7 }, "-=2");
  tl.to(".title h4", {
    duration: 0.5,
    y: "0%",
    stagger: {
      amount: 0.5,
    },
  });
  tl.to(
    ".line",
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

  var tll = gsap.timeline();

  // Gallery Page Transition
  gsap.set(".galcon", {
    delay: 2.5,
    zIndex: 30,
    top: "unset",
    bottom: 0,
  });
  gsap.set("innercon-galcon", {
    opacity: 1,
  });
  tll.to(".galcon", {
    height: window.innerHeight,
    // duration: 1.5,
    duration: 1,
    ease: "Expo.easeInOut",
  });
  tll.set(".galcon", {
    top: 0,
    bottom: "unset",
  });
  tll
    .from([".innercon-galcon h4", ".innercon-galcon h5"], {
      delay: 1.5,
      yPercent: 300,
      duration: 1.5,
      // skewY: 10,
      stagger: {
        amount: 0.3,
      },
      ease: "power2.out",
    })
    .to(".innercon-galcon", {
      delay: 3,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .to(
      ".galcon",
      {
        delay: 0.9,
        height: 0,
        duration: 1.5,
        ease: "Expo.easeInOut",
      },
      "-=1"
    );

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

  if (window.location.pathname === "/gallery") {
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
