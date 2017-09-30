const leftKeyCode = 37;
const rightKeyCode = 39;

const screenTeplates = document.querySelector(`#templates`).content.querySelectorAll(`.main`);

let currentScreenIndex;

const toggleScreen = (index) => {
  if (index < 0 || index > screenTeplates.length - 1) {
    return;
  }
  const app = document.querySelector(`.app`);
  const currentScreen = document.querySelector(`.main`);
  const srceen = screenTeplates[index];

  app.replaceChild(srceen, currentScreen);

  currentScreenIndex = index;
};

const toggleScreenHandler = (evt) => {
  if (evt.altKey && evt.keyCode === rightKeyCode) {
    toggleScreen(currentScreenIndex + 1);
  }
  if (evt.altKey && evt.keyCode === leftKeyCode) {
    toggleScreen(currentScreenIndex - 1);
  }
};

document.addEventListener(`keydown`, toggleScreenHandler)

toggleScreen(0);
