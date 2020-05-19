import { HRemoteLabel } from "../webcomponents";

export function defineCustomElements() {
  defineCustomElement(HRemoteLabel, "h-remote-label");
}

function defineCustomElement(element, name) {
  if (!customElements.get(name)) {
    customElements.define(name, element);
  }
}
