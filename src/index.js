module.exports = function check(str, bracketsConfig) {
  let border = str.length;
  bracketsConfig.forEach(a => str = str.split(a[0] + a[1]).join(''));
  return str.length === 0 ? true : (str.length === border ? false : check(str, bracketsConfig));
}
