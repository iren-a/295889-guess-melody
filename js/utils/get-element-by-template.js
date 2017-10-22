export default (template) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = template;
  return elem.firstChild;
};
