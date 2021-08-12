const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arrSymb = expr.match(/.{10}/g);
  let resStr = "";
  let valArrSymb = [];
  let strSymb = "";

  arrSymb.map((val) => {
    strSymb = "";

    if (val == "**********") {
      resStr += " ";
    } else {
      valArrSymb = val.split("");

      for (let i = 0; i < 9; i += 2) {
        if (valArrSymb[i] == 1) {
          if (valArrSymb[i + 1] == 1) {
            strSymb += "-";
          } else {
            strSymb += ".";
          }
        }
      }
      resStr += MORSE_TABLE[strSymb];
    }
  });
  return resStr;
}

module.exports = {
  decode,
};
