module.exports = {

  //todo: refactor elements s constants
  before: function(browser) {
    console.log("Setting up...");
    browser
      .windowSize('current', 1024, 768)
      .url("http://127.0.0.1:8000/") //this should be in global config
      .waitForElementVisible("body", 1000)
      .login('user', 'password')
  },

  after : function(browser) {
    browser.end()
    console.log("Closing down...");
  },

  beforeEach: function(browser) {
    browser
      .pause(3000)
      .useCss()
  },

  "Test Index": function(browser) {
    browser
      .saveScreenshot("screenshots/test_index.png")
      .assert.containsText("#main", "require.js up and running")
      .pause(5000);
  },

  "Test Index2": function(browser) {
    browser
      .saveScreenshot("screenshots/test_index2.png")
      .assert.containsText("#main", "require.js up and running")
      .pause(5000);
  }
}