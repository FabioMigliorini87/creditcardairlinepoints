module.exports = function(config) {
  config.set({

    showStack: true,

    autoWatch: true,

    frameworks: ["mocha", "chai", "chai-as-promised"],

    browsers: ["PhantomJS"],

    reporters: ["mocha"],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-mocha",
      "karma-chai",
      "karma-chai-plugins",
      "karma-mocha-reporter",
      "karma-phantomjs-launcher"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true

  });

};