/**
 * Function for attaching to the passed element a ShadowDOM root containing the provided css style and html markup.
 */
export function buildShadowRoot(element: HTMLElement, css: string, html: string) {
  const shadowRoot = element.attachShadow({ mode: "closed" });
  const style = document.createElement("style");
  style.innerHTML = css;
  shadowRoot.appendChild(style);
  const template = document.createElement("template");
  template.innerHTML = html;
  shadowRoot.appendChild(template.content.cloneNode(true));
  return shadowRoot;
}
