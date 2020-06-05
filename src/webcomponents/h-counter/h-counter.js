import css from "./h-counter.css";
import html from "./h-counter.html";
import { buildShadowRoot } from "../../utils/buildShadowRoot";

export class HCounter extends HTMLElement {
  constructor() {
    super();
    buildShadowRoot(this, css, html, this.#slots);
  }
  
  static get observedAttributes() {
    return ["count"]
  }

  #count = 0;

  get count() {
    return this.#count;
  }

  set count(value) {
    this.#count = value;
    this.#slots.count.innerHTML = newValue;
  }

  #slots = {
    count: (() => {
      const div = document.createElement("div");
      div.slot = ""
      div.innerHTML = this.count;
      div.slot = "count";
      return div;
    })(),
  };

  connectedCallback() {
    console.log(this.count)
    this.shadowRoot.querySelector("button").addEventListener("click", this.count  );
    console.log(this.count)
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === "count") this.count = newValue;
  }
}

customElements.define("h-counter", HCounter);
