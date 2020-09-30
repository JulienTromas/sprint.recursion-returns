const stringifyJSON = (input) => {
  if (typeof input === "number" || typeof input === "boolean") {
    return `${input}`;
  } else if (
    input === undefined ||
    input instanceof Function ||
    typeof input === "symbol"
  ) {
    return "null";
  } else if (typeof input === "string") {
    return `${input}`;
  } else if (Array.isArray(input)) {
    const arrayElements = [];
    for (const element of input) {
      arrayElements.push(stringifyJSON(element));
    }
    return `[${arrayElements}]`;
  } else if (input instanceof Object) {
    const objKeysArray = Object.keys(input);
    const resultArrayOfKeys = [];
    objKeysArray.forEach((key) => {
      resultArrayOfKeys.push(
        ` ${stringifyJSON(key)}: ${stringifyJSON(input[key])}`
      );
    });
    return `{${resultArrayOfKeys} }`;
  }
};

module.exports = { stringifyJSON };
