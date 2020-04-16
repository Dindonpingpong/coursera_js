/**
 * @param {String[]} hashtags
 * @returns {String}
 */

function isExist(arr, element) {
    return arr.some(currEl => currEl == element);
}

module.exports = function (hashtags) {
    var uniques = [];

    for (var i = 0; i < hashtags.length; i++) {
        var tag = hashtags[i].toLowerCase();

        if (!isExist(uniques, tag))
            uniques.push(tag);
    }
    return uniques.join(', ');
};
