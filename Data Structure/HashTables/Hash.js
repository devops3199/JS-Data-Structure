/**
 * Works only on strings
 * @param {string} key 
 * @param {number} len 
 * @returns number
 */
function hash(key, len) {
    let total = 0;
    let prime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * value + prime) % len;
    }
    return total;
}

console.log(hash('cyan', 13));