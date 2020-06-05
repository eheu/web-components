/**
 * Function for attaching to the passed element a shadow DOM root containing the passed css, html and slots .
 *
 * @param  {HTMLElement} element
 * @param  {string} css
 * @param  {string} html
 * @param  {{
    count: HTMLDivElement;
}} slots
 */
export function buildShadowRoot(element, css, html, slots) {
  element.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.innerHTML = css;
  element.shadowRoot.appendChild(style);
  const template = document.createElement("template");
  template.innerHTML = html;
  element.shadowRoot.appendChild(template.content.cloneNode(true));
  const slotElements = Object.values(slots);
  slotElements.forEach((slotElement) => element.appendChild(slotElement));
}
