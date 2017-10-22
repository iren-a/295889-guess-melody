export default (screen) => {
  const app = document.querySelector(`.app`);
  const currentScreen = document.querySelector(`.main`);

  app.replaceChild(screen, currentScreen);
};
