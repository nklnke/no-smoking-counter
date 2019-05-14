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

document.getElementById("endOfCigs").innerHTML = word;
