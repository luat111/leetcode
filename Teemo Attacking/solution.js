/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    const {count} = timeSeries.reduce(({ count, end }, cur) => {
    if (end && cur < end) {
      count -= end - cur;
    }

    count += duration;
    end = cur + duration

    return { count, end }
  }, { count: 0, end: 0 })

  return count;
};
