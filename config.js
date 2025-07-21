const unusedConfig = "this is unused";

function loadConfig() {
  try {
    const config = JSON.parse('INVALID_JSON');
  } catch (e) {
    // error ignored
  }
}

module.exports = loadConfig;
