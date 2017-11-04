const getGenreQuestion = (loadedQuestion) => {
  return {
    type: loadedQuestion.type,
    title: loadedQuestion.question,
    answerList: loadedQuestion.answers.map((answer) => {
      return {
        answer: answer.src,
        isCorrect: (answer.genre === loadedQuestion.genre)
      };
    })
  };
};

const getArtistQuestion = (loadedQuestion) => {
  return {
    type: loadedQuestion.type,
    title: loadedQuestion.question,
    audioSrc: loadedQuestion.src,
    answerList: loadedQuestion.answers.map((answer) => {
      return {
        answer: answer.title,
        image: answer.image.url,
        isCorrect: answer.isCorrect
      };
    })
  };
};

export default (loadedData) => {
  const adaptedData = loadedData.map((loadedQuestion) => {
    let adaptedQuestion;
    if (loadedQuestion.type === `artist`) {
      adaptedQuestion = getArtistQuestion(loadedQuestion);
    }
    if (loadedQuestion.type === `genre`) {
      adaptedQuestion = getGenreQuestion(loadedQuestion);
    }
    return adaptedQuestion;
  });

  return adaptedData;
};

