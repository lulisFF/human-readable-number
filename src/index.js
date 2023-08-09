module.exports = function toReadable(a) {
  if (a === 0) return "zero";
  const letKnow = (a) => {
      switch (a) {
          case 0:
              return "";
          case 1:
              return "one";
          case 2:
              return "two";
          case 3:
              return "three";
          case 4:
              return "four";
          case 5:
              return "five";
          case 6:
              return "six";
          case 7:
              return "seven";
          case 8:
              return "eight";
          case 9:
              return "nine";
          case 10:
              return "ten";
          case 11:
              return "eleven";
          case 12:
              return "twelve";
          case 13:
              return "thirteen";
          case 14:
              return "fourteen";
          case 15:
              return "fifteen";
          case 16:
              return "sixteen";
          case 17:
              return "seventeen";
          case 18:
              return "eighteen";
          case 19:
              return "nineteen";
          case 20:
              return "twenty";
          case 30:
              return "thirty";
          case 40:
              return "forty";
          case 50:
              return "fifty";
          case 60:
              return "sixty";
          case 70:
              return "seventy";
          case 80:
              return "eighty";
          case 90:
              return "ninety";
      }
  };
  
  if(a<=20){
      return letKnow(a)
  }
  if(a<=99 && a%10===0){
      return letKnow(a)
  }
  if(a<=99 && a%10 !==0){
      return letKnow(a-a%10) +' ' + letKnow(a%10)
  }
  if(a<=999 && (a%10 === 0 || a%100<20)){
      return (letKnow(Math.floor(a/100))+' hundred '+ letKnow(Math.floor(a%100))).trim()
  }
  if(a<=999 && a%10 !== 0 && a%100>20){
      return (letKnow(Math.floor(a/100))+' hundred '+ letKnow(a%100 - a%10) + ' ' + letKnow(Math.floor(a%10))).trim()
  }
};
