// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

function ftAdd (name, phones) {
    if (!phoneBook.hasOwnProperty(name))
        phoneBook[name] = [];
    phoneBook[name] = phoneBook[name].concat(phones);
    return undefined;
}

function checkExistPhone(arr, element) {
    return arr.some(currEl => currEl == element);
}

function ftRemove (phone) {
    
    var keys = Object.keys(phoneBook);

    for (var i = 0; i < keys.length; i++) {
        var value = phoneBook[keys[i]];

        if (checkExistPhone(value, phone)) {
            for (var j = 0; j < value.length; j++) {
                if (value[j] == phone) {
                    value.splice(j, 1);
                    return true;
                }
            }
        }
    }
    return false;
}

function ftShow () {
    var keys = Object.keys(phoneBook);
    var output = [];

    for (var i = 0; i < keys.length; i++) {
        if (phoneBook[keys[i]].length > 0)
            output.push(keys[i] + ": " + phoneBook[keys[i]].join(', '));
    }
    return output.sort();
}

module.exports = function (command) {
    var cmdName = command.split(' ');
    switch (cmdName[0]) {
        case 'ADD':
            return ftAdd(cmdName[1], cmdName[2].split(','));
        case 'REMOVE_PHONE':
            return ftRemove(cmdName[1]);
        case 'SHOW':
            return ftShow();
    }
};
