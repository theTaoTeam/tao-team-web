module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home-container')
      .assert.containsText(
        '',
        "We're in the process of making this site awesome"
      )
      .assert.elementCount('img', 1)
      .end();
  },
};
