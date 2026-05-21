class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
 let encoded = '';
    for (const s of strs) {
        encoded += s.length + '#' + s;
    }
    return encoded;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
    let i = 0;
    while (i < str.length) {
        const delim = str.indexOf('#', i);
  
        const length = parseInt(str.substring(i, delim), 10);
        
        const start = delim + 1;
        result.push(str.substring(start, start + length));
       
        i = start + length;
    }
    return result;
    }
}
