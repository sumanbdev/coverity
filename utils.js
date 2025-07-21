function alwaysFalseCheck() {
  if (false) {
    console.log("This will never run");
  }
}

function nestedError() {
  try {
    throw new Error("Boom");
  } catch (err) {
    // error ignored
  }
}

module.exports = { alwaysFalseCheck, nestedError };
