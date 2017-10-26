import audio from "./audio";

const settings = {
  maxGametime: 300000,
  maxCountMistakes: 3,
  maxQuickAnswerTime: 30000,
  countLevels: 10
};

const state = {
  timeLeft: settings.maxGametime,
  mistakes: 0,
  level: 0,
  results: [],
  isReset: false,
  reset() {
    this.time = settings.maxGametime;
    this.mistakes = 0;
    this.level = 0;
    this.results = [];
    this.isReset = false;
  }
};

const questions = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        image: audio[0].image,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        image: audio[1].image,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        image: audio[2].image,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        image: audio[0].image,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        image: audio[1].image,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        image: audio[2].image,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        image: audio[0].image,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        image: audio[1].image,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        image: audio[2].image,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        image: audio[0].image,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        image: audio[1].image,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        image: audio[2].image,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    audioSrc: audio[1].src,
    answerList: [
      {
        answer: audio[0].artist,
        image: audio[0].image,
        isCorrect: false
      },
      {
        answer: audio[1].artist,
        image: audio[1].image,
        isCorrect: true
      },
      {
        answer: audio[2].artist,
        image: audio[2].image,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите кантри треки`,
    answerList: [
      {
        answer: audio[2].src,
        isCorrect: true
      },
      {
        answer: audio[3].src,
        isCorrect: true
      },
      {
        answer: audio[4].src,
        isCorrect: false
      },
      {
        answer: audio[5].src,
        isCorrect: false
      }
    ]
  }
];

const statistics = [1, 2, 3, 4, 5];

export {settings, state, questions, statistics};
