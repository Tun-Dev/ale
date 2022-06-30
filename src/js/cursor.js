import gsap from "gsap/dist/gsap";
import { lerp, getMousePos } from "./utils";
// import { lerp, getMousePos } from "utils";

// Tracking mouse position
let mouse = { x: 0, y: 0 };
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
}
// window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));

export class Cursor {
  constructor(el) {
    // Variables
    this.Cursor = el;
    this.Cursor.style.opacity = 0;

    this.bounds = this.Cursor.getBoundingClientRect();

    this.renderedStyles = {
      xx: { previous: 0, current: 0, amt: 0.18 },
      yy: { previous: 0, current: 0, amt: 0.18 },
      scale: { previous: 1, current: 1, amt: 0.15 },
      opacity: { previous: 1, current: 1, amt: 0.1 },
    };

    this.onMouseMoveEv = () => {
      this.renderedStyles.xx.previous = this.renderedStyles.xx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.yy.previous = this.renderedStyles.yy.previous =
        mouse.y - this.bounds.height / 2;

      gsap.to(this.Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }

  enter() {
    this.renderedStyles["scale"].current = 2.5;
    this.renderedStyles["opacity"].current = 0.5;
  }
  leave() {
    this.renderedStyles["scale"].current = 1;
    this.renderedStyles["opacity"].current = 1;
  }

  render() {
    this.renderedStyles["xx"].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles["yy"].current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.Cursor.style.transform = `translateX(${this.renderedStyles["xx"].previous}px) translateY(${this.renderedStyles["yy"].previous}px) scale(${this.renderedStyles["scale"].previous})`;
    this.Cursor.style.opacity = this.renderedStyles["opacity"].previous;

    requestAnimationFrame(() => this.render());
  }
}
