function editElement(element, str, replacer) {
  const text = element.textContent;
  const res = text.split(str).join(replacer);
  element.textContent = res;
}
