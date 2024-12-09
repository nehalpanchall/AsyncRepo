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
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} Match Tie!!! `
    ); // 1
  } else if (computerVal == 2) {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Won.. `
    );
  } else {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Lost.. `
    );
  }
};
const ball = (val) => {
  let message = `You selected: ${choice(val)}`;
  var computerVal = randomNumber();
  let compMsg = choice(computerVal);

  if (computerVal == val) {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} Match Tie!!! `
    ); // 2
  } else if (computerVal == 1) {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Lost.. `
    );
  } else {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Won.. `
    );
  }
};
const stump = (val) => {
  let message = `You selected: ${choice(val)}`;

  var computerVal = randomNumber();
  let compMsg = choice(computerVal);

  if (computerVal == val) {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} Match Tie!!! `
    ); // 3
  } else if (computerVal == 2) {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Lost.. `
    );
  } else {
    alert(
      `${message} ${"\n"}Computer selected: ${compMsg} ${"\n \n"} You Won.. `
    );
  }
};
