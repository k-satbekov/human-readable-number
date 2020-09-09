const firstNineteen = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'
];

const tenDivs = [
    '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
    'seventy', 'eighty', 'ninety'
];

const thousands = ['', 'thousand', 'million', 'billion'];

module.exports = function toReadable (number) {
  if (number === 0 || !number) return 'zero';

  let message = '', count = 0;

  while (number > 0) {
    if (number % 1000 !== 0) {
      message = `${extractNum(number % 1000)} ${thousands[count]} ${message}`;
    }

    number = Math.floor(number / 1000);
    count++;
  }

  return message.trim();
}

const extractNum = number => {
  if (number === 0) {
    return '';
  } 
  else if (number < 20) {
    return firstNineteen[number];
  } 
  else if (number < 100) {
    return `${tenDivs[Math.floor(number/10)]} ${extractNum(number % 10)}`;
  } 
  else {
    return `${firstNineteen[Math.floor(number/100)]} hundred ${extractNum(number%100)}`;
  }
}
