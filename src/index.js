module.exports = function check(str, bracketsConfig) {
  let next = 1;

  while (next > 0) {
    next = 0;
    for (let array of bracketsConfig) {
      let cpl = (array[0] + array[1]);
      while(str.includes(cpl)) {
        str = str.replace(cpl, '');
        next++;
      }
    }
  }

  return str.length === 0;
}
