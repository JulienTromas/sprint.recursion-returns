const getElementsByClassName = (input) => {
  const resultArray = [];

  function check(element) {
    if (element.className.includes(input)) {
      resultArray.push(element);
    }
    if (element.children === undefined) {
      return;
    }
    for (const child of element.children) {
      check(child);
    }
  }

  check(document.body);

  return resultArray;
};

module.exports = { getElementsByClassName };
