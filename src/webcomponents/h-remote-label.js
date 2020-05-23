import { defineCustomElement } from "../utils";

export class HRemoteLabel extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: "open" });

    const attributes = {
      text: this.getAttribute("text"),
    };

    this.shadowRoot.innerHTML = `
      ${this.css(attributes)}
      ${this.html(attributes)}
    `;
  }

  html(attributes) {
    return `
     <div onclick="alert('remote')">${attributes?.text || "test"}</div>
   `;
  }

  css(attributes) {
    return `
      <style>
        div {
          font-size: 16px;
        }
      </style>
    `;
  }
}

defineCustomElement(HRemoteLabel, "h-remote-label");
