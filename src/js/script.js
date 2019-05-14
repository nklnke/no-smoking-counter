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

  // Склонение сигарет

  var cigaretten = Math.round(noSmokingTime * 20 * 1.25),
    cigarettenStr = cigaretten.toString(),
    endOfWord = cigarettenStr.substr(cigarettenStr.length - 1),
    word; // = ["сигарет", "сигарета", "сигареты"];

  if ((endOfWord >= 5 && endOfWord <= 9) || endOfWord == 0) {
    word = "сигарет";
  } else if (endOfWord == 1) {
    word = "сигарета";
  } else if (endOfWord >= 2 && endOfWord <= 4) {
    word = "сигареты";
  }

  // Вывод единиц измерения
  
  document.getElementById("endOfCigs").innerHTML = word;
}

function start() {
  setInterval(update, 1000);
  update(); // начать тут же, не ждать 1 секунду, пока setInterval сработает
}

start();
