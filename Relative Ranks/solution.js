/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const medal = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const map = new Map();

  const sort = [...score].sort((a, b) => b - a);
  sort.map((e, index) => {
    if (medal.length) map.set(e, medal.shift())
    else map.set(e, String(index + 1))
    return e;
  })

  return score.map(e => {
    return map.get(e)
  })
};
