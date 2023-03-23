/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let mid = Math.floor(Math.sqrt(area));

  while (area % mid !== 0) mid--;

  return [area / mid, mid]
};
