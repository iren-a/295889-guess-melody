const settings = {
  MAX_GAME_TIME: 300000,
  MAX_COUNT_MISTAKES: 3,
  MAX_QUICK_ANSWER_TIME: 30000,
  MIN_TIME_DANGER: 30000,
  COUNT_LEVELS: 10
};

const state = {
  timer: null,
  mistakes: 0,
  level: 0,
  score: null,
  results: [],
  isReset: false,
  get time() {
    if (this.timer === null) {
      return settings.MAX_GAME_TIME;
    }
    return this.timer.value;
  },
  reset() {
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
    this.score = null;
    this.results = [];
    this.isReset = false;
  }
};

let questions = [];

const fillQuestions = (loadedData) => {
  questions = loadedData;
};


export {settings, state, questions, fillQuestions};
