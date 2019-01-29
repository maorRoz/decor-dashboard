const { scores } = require('./sports.json');

let scoresLatestIndex = 0;

const fetchLatestScores = () => scores[scoresLatestIndex];

const progressGame = () => {
  scoresLatestIndex += 1;
  if(!scores[scoresLatestIndex]){
    scoresLatestIndex = 0;
  }
};

module.exports = {
  fetchLatestScores,
  progressGame
};
