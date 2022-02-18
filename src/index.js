module.exports = function toReadable (number) {
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 
      'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const tenX = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr = [0,0,0];
    let arr1 = Array.from(number.toString()).reverse();
    for (let i = arr1.length-1; i >= 0; i--) {
      arr[i] = arr1[i];
      arr.reverse();
    }
    let str = '';
    if (arr[0] != 0) str += hundreds[arr[0]];
    if (arr[0] != 0 && arr[1] != 0) str += ' ';
    if (arr[1] == 1) str += tenX[arr[2]];
    if (arr[1] > 1) str += tens[arr[1]];
    if (arr[2] != 0 && arr[1] != 1 && str != '') str += ' ';
    if (arr[2] > 0 && arr[1] != 1) str += ones[arr[2]];
    if (number === 0) str = 'zero';
    return str;
  }