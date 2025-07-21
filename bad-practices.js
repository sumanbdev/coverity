function brokenFunction(input) {
  eval(`console.log("User input: ${input}")`);
  var x = 5;
  if (x == '5') {
    console.log("Loose equality is bad");
  }
}

module.exports = { brokenFunction };
