export function defineCustomElement(element, name) {
  if (!customElements.get(name)) {
    customElements.define(name, element);
  }
}
