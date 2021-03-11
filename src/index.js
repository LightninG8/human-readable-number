module.exports = function toReadable (number) {
  if (number == 0) return "zero";

  const categoryNames = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "one hundred",
    "200": "two hundred",
    "300": "three hundred",
    "400": "four hundred",
    "500": "five hundred",
    "600": "six hundred",
    "700": "seven hundred",
    "800": "eight hundred",
    "900": "nine hundred",
  }

  const categoryArr = number.toString().split("").reverse().map((item, i) => item + ("0").repeat(i)).reverse();

  console.log(categoryArr[1]);

  if (categoryArr[categoryArr.length - 2] === "10") {
    categoryArr[categoryArr.length - 2] = (+categoryArr[categoryArr.length - 2] + +categoryArr[categoryArr.length - 1]).toString();

    categoryArr.pop();
  }
  
  let result = [];

  for (let item of categoryArr) {
    if (+item !== 0) {
      result.push(categoryNames[item]);
    }
  }
  return result.join(" ");
}
