// variation 1 with index subtraction
var rle_1 = function (str) {
  let i = 0;
  let j = 1;
  let result = [];

  for (j; j <= str.length; j++) {
    if (str[i] == str[j]) continue;
    else {
      result.push([j - i, str[i]]);
      i = j;
    }
  }

  return result;
};

//variation 2 with counter
const rle_2 = function (str) {
  if (str.length == 0 || typeof str != "string") return -1;

  let current = str[0],
    counter = 1,
    arr = [];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] == current) counter++;
    else {
      arr.push(current);
      if (counter > 1) {
        arr.push(counter);
        counter = 1;
      }
      current = str[i];
    }
  }

  return arr.join("");
};

//variation 3 with regexp
const rle_3 = (str) =>
  (str.match(/(.)\1*/g) || []).map((elem) => [elem.length, elem[0]]);

//variation 4 with regexp (encode decode)
const rle_4 = (str, flag) => {
  return flag == "decode"
    ? str.replace(/(\d+)(\w)/g, (match, p1, p2) => p2.repeat(p1))
    : str.replace(/(.)\1*/g, (match, p1) => match.length + p1);
};

console.log(rle_1("aabbbbcc"));
console.log(rle_2("aabbbbcc"));
console.log(rle_3("aabbbbcc"));
console.log(rle_4("aabbbbcc"));
console.log(rle_4("4A8B11C1Z", "decode"));
