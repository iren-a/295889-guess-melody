export const getElementbyTemplate = (template) => {
  const elem = document.createElement(`div`);
  elem.innerHTML = template;
  return elem.firstChild;
};

export const renderScreen = (screen) => {
  const app = document.querySelector(`.app`);
  const currentScreen = document.querySelector(`.main`);

  app.replaceChild(screen, currentScreen);
};

