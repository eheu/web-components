import css from "./h-counter.css";
import html from "./h-counter.html";
import { makeComponent } from "../../utils/makeComponent";

export class HCounter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    makeComponent(this, css, html, [this.#count]);
  }

  #count = `<div slot="count">0</div>`;
}

customElements.define("h-counter", HCounter);
