/**
 * Function for attaching to the passed element a shadow DOM root containing the passed css and html strings.
 *
 * @param  {HTMLElement} element
 * @param  {string} css
 * @param  {string} html
 */
export function buildShadowRoot(element, css, html) {
  const shadowRoot = element.attachShadow({ mode: "closed" });
  const style = document.createElement("style");
  style.innerHTML = css;
  shadowRoot.appendChild(style);
  const template = document.createElement("template");
  template.innerHTML = html;
  shadowRoot.appendChild(template.content.cloneNode(true));
  return shadowRoot;
}
