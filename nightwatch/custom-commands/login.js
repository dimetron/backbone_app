exports.command = function(username, password, callback) {
    var self = this;
    this
        .frame(null)
        .waitForElementPresent('input[name=username]', 10000)
        .setValue('input[name=username]', username)
        .waitForElementPresent('input[name=password]', 10000)
        .setValue('input[name=password]', password)
        .click('#submit');

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};