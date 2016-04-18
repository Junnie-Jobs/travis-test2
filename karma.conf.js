// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ["mocha", "chai"],
        files: ["js/todo.js", "test/todo.test.js"],
        browsers: ["PhantomJS"],
        singleRun: true
    });
};

//npm install karma-chrome-launcher --save-dev