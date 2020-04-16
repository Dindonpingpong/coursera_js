/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var tags = [];
    tweet = tweet.split(' ');
    for (var i = 0; i < tweet.length; i++) {
        if (tweet[i].indexOf('#') !== -1)
            tags.push(tweet[i].slice(1, tweet[i].length));
    }
    return tags;
};
