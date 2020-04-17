/**
 * @param {String} date
 * @returns {Object}
 */

 function getFormat(date) {
    var format = date.toISOString();

    format = format.replace(/(T)/, ' ').replace(/(:.{5}[0-9]Z)/, '');
    return format;
 }

function checkCorrect(value, name) {
    var number = parseInt(value);
    var names = ['years', 'months', 'days', 'hours', 'minutes'];

    if (number < 0 || !names.includes(name))
        throw new TypeError;
}
function changeDate(value, name, date, sign) {
    checkCorrect(value, name);
    value = sign === '-' ? value * (-1) : value;
    switch(name) {
        case 'years':
            date.setFullYear(date.getFullYear() + value);
            break;
        case 'months':
            date.setMonth(date.getMonth() + value);
            break;
        case 'days':
            date.setDate(date.getDate() + value);
            break;
        case 'hours':
            date.setHours(date.getHours() + value);
            break;
        case 'minutes':
            date.setMinutes(date.getMinutes() + value);
            break;
    }
}

module.exports = function (date) {
    date = new Date(date);

    var time = {
        get value() {
            return getFormat(date);
        },
        add: function (value, name) {
            changeDate(value, name, date, '+');
            return this;
        },
        subtract: function (value, name) {
            changeDate(value, name, date, '-');
            return this;
        }
    };
    return time;
};
