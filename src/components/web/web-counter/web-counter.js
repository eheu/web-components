import css from "./web-counter.css";
import html from "./web-counter.html";
import { buildShadowRoot } from "../../../utils";

export class WebCounter extends HTMLElement {
  #shadowRoot = null;

  constructor() {
    super();
    this.#shadowRoot = buildShadowRoot(this, css, html);
    this.#shadowRoot.querySelector("#count").innerHTML = this.count;
    this.#shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.count++);
  }

  static get observedAttributes() {
    return ["count"];
  }

  get count() {
    return Number.parseInt(this.getAttribute("count"));
  }

  set count(value) {
    if (!value) {
      this.removeAttribute("count");
    } else {
      this.setAttribute("count", value);
      this.#shadowRoot.querySelector("#count").innerHTML = value;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "count" && oldValue !== newValue) this.count = newValue;
  }
}

customElements.define("web-counter", WebCounter);
