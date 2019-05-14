for (let cigaretten = 0; cigaretten <= 9; cigaretten++) {
  let cigarettenStr = cigaretten.toString(),
    cigarettenEndOfWord = cigarettenStr.substr(cigarettenStr.length - 1),
    cigarettenWord; // = ["сигарет", "сигарета", "сигареты"];

  if (
    (cigarettenEndOfWord >= 5 && cigarettenEndOfWord <= 9) ||
    cigarettenEndOfWord == 0
  ) {
    cigarettenWord = "сигарет";
  } else if (cigarettenEndOfWord == 1) {
    cigarettenWord = "сигарета";
  } else if (cigarettenEndOfWord >= 2 && cigarettenEndOfWord <= 4) {
    cigarettenWord = "сигареты";
  }
  console.log(cigaretten + " " + cigarettenWord);
}

for (let day = 0; day <= 9; day++) {
  let dayStr = day.toString(),
    dayEndOfWord = dayStr.substr(dayStr.length - 1),
    dayWord; // = ["сигарет", "сигарета", "сигареты"];

  if ((dayEndOfWord >= 5 && dayEndOfWord <= 9) || dayEndOfWord == 0) {
    dayWord = "дней";
  } else if (dayEndOfWord == 1) {
    dayWord = "день";
  } else if (dayEndOfWord >= 2 && dayEndOfWord <= 4) {
    dayWord = "дня";
  }
  console.log(day + " " + dayWord);
}
