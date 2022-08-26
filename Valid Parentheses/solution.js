/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const regex = /(\(\)|\[\]|\{\})/g
    while(s.match(regex)){
       s = s.replace(regex, '')
    }
    return !s
};
