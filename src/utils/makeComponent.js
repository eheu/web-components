export function makeComponent(element, css, html, slots) {
  const style = document.createElement("style");
  style.innerHTML = css;
  element.shadowRoot.appendChild(style);
  element.shadowRoot.appendChild(
    document.createRange().createContextualFragment(html)
  );
  slots.map((slot) =>
    element.appendChild(document.createRange().createContextualFragment(slot))
  );
}
