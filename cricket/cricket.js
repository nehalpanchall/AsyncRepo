const matchScore = {
  tie: 0,
  win: 0,
  lose: 0,

  displayScore() {
    return `Tie: ${this.tie} | Win: ${this.win} | Lose: ${this.lose}`;
  },
};

const choice = (val) => {
  if (val == 1) {
    return `Bat`;
  } else if (val == 2) {
    return `Ball`;
  } else {
    return `Stump`;
  }
};

const randomNumber = () => {
  let randomNo = Math.ceil(Math.random() * 3);
  return randomNo;
};

const bat = (val) => {
  let message = `You selected: ${choice(val)}`;
  var computerVal = randomNumber();
  let compMsg = choice(computerVal);

  if (computerVal == val) {
    matchScore.tie++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} Match Tie!!! ${"\n \n"} 
      ${JSON.stringify(matchScore)}
      
      ${matchScore.displayScore()}`
    ); // 1
  } else if (computerVal == 2) {
    matchScore.win++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Won.. ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    );
  } else {
    matchScore.lose++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Lost.. ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    );
  }

  // console.log(matchScore);
};
const ball = (val) => {
  let message = `You selected: ${choice(val)}`;
  var computerVal = randomNumber();
  let compMsg = choice(computerVal);

  if (computerVal == val) {
    matchScore.tie++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} Match Tie!!!  ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    ); // 2
  } else if (computerVal == 1) {
    matchScore.lose++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Lost.. ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    );
  } else {
    matchScore.win++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Won.. ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    );
  }

  // console.log(matchScore);
};
const stump = (val) => {
  let message = `You selected: ${choice(val)}`;

  var computerVal = randomNumber();
  let compMsg = choice(computerVal);

  if (computerVal == val) {
    matchScore.tie++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} Match Tie!!! ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    ); // 3
  } else if (computerVal == 2) {
    matchScore.lose++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Lost.. ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    );
  } else {
    matchScore.win++;
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Won.. ${"\n \n"} 
      ${JSON.stringify(matchScore)}

      ${matchScore.displayScore()}`
    );
  }

  // console.log(matchScore);
};
