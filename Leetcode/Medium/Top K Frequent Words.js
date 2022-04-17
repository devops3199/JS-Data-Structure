/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const wordsOf = words.reduce((result, word) => {
    if (result[word] !== undefined) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }

    return result;
  }, {});

  const result = Object.entries(wordsOf)
    .sort(([ak, av], [bk, bv]) => {
      if (av === bv) {
        if (ak > bk) {
          return 1;
        } else if (ak < bk) {
          return -1;
        }
        return 0;
      } else {
        return bv - av;
      }
    })
    .map(([k, v]) => k);

  return result.slice(0, k);
};
