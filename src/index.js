module.exports = function toReadable (number) {
  let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; // 0 - 9
  let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; // 10 - 19
  let arr3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; // 10,20,30,40,50,60,70,80,90

  let result = '';

  if(number === 0) {
    return arr1[0];
  }

  for (let i = 0; i < 1000; i++) {
    if(number > 99){
      result += arr1[Math.floor(number / 100)] + ' hundred ';
      number %= 100;
    }
    if (number < 20 && number > 9) {
      result += arr2[Math.floor(number % 10)];
    } else {
      if(number < 10 && number > 0){
        result += arr1[number];
      } else {
        if(number != 0) {
          result += arr3[Math.floor(number / 10) - 1];
          if(number % 10 != 0){
            result += ' ' + arr1[Math.floor(number % 10)];
          }
        }
      }
    }
    return  result.trim();
  }
}