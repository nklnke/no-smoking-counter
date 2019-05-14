// начал с цены за пачку 115р
// цены на https://www.tabacum.ru/info/cigarette/brand/WINSTON
// закончил 107.25-143.00

function update() {
  var lastTime = new Date("September 26, 2018"),
    currentDate = new Date(),
    noSmokingTime =
      (currentDate.getTime() - lastTime.getTime()) / (1000 * 60 * 60 * 24),
    cigCost = (115 + (107.25 + 143) / 2) / 2,
    startingCosts = 2990 + 1990 + 390 * 2 + 100,
    zhizhCosts = 500,
    tempedCosts = 650 + 200 + 270 + 690 + 200 + 200 + 250 + 250 + 100 + 300,
    savedMoney = noSmokingTime * cigCost * 1.25, // Модификатор на 1.15 пачки в день
    daySavings =
      (savedMoney -
        startingCosts -
        tempedCosts -
        zhizhCosts * (noSmokingTime / 30)) /
      noSmokingTime;

  // Вывод значений

  document.getElementById("noSmokingTime").innerHTML = Math.round(
    noSmokingTime
  );
  document.getElementById("numberOfCigs").innerHTML = Math.round(
    noSmokingTime * 20 * 1.25
  ); // Модификатор на 1.15 пачки в день
  document.getElementById("savedMoney").innerHTML = savedMoney.toFixed(2);
  document.getElementById("startingCosts").innerHTML = startingCosts;
  document.getElementById("zhizhCosts").innerHTML = zhizhCosts;
  document.getElementById("tempedCosts").innerHTML = tempedCosts;
  document.getElementById("economy").innerHTML = (
    savedMoney -
    startingCosts -
    tempedCosts -
    zhizhCosts * (noSmokingTime / 30)
  ).toFixed(2);
  document.getElementById("daySavings").innerHTML = daySavings.toFixed(2);
  document.getElementById("hourSavings").innerHTML = (daySavings / 24).toFixed(
    2
  );
  document.getElementById("minuteSavings").innerHTML = (
    daySavings /
    (24 * 60)
  ).toFixed(3);
  document.getElementById("secondSavings").innerHTML = (
    daySavings /
    (24 * 60 * 60)
  ).toFixed(5);

  // Склонение дней

  var day = Math.round(noSmokingTime),
    dayStr = day.toString(),
    dayEndOfWord = dayStr.substr(dayStr.length - 1),
    dayWord;

  if ((dayEndOfWord >= 5 && dayEndOfWord <= 9) || dayEndOfWord == 0) {
    dayWord = "дней";
  } else if (dayEndOfWord == 1) {
    dayWord = "день";
  } else if (dayEndOfWord >= 2 && dayEndOfWord <= 4) {
    dayWord = "дня";
  }

  // Склонение сигарет

  var cigaretten = Math.round(noSmokingTime * 20 * 1.25),
    cigarettenStr = cigaretten.toString(),
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

  // Вывод единиц измерения

  document.getElementById("endOfCigs").innerHTML = cigarettenWord;
  document.getElementById("endOfNoSmokingTime").innerHTML = dayWord;
}

function start() {
  setInterval(update, 1000);
  update(); // начать тут же, не ждать 1 секунду, пока setInterval сработает
}

start();
