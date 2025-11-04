// brightColor.js

/**
* @param {number} val - The value to evaluate.
* @param {number} mean - The mean of the dataset.
* @param {number} sd - The standard deviation of the dataset.
* @returns {string} - The corresponding color ("red" or "green").
*/


// this function is used to follow the following color pattern:
/*
val > mean + 2*sd    : Red
mean - 2*sd <= val <= mean + 2*sd    : Green
val < mean - 2*sd    : Red
*/
const brightColor = (val, mean, sd) => {
    if (val > mean + 2 * sd || val < mean - 2 * sd) {
        //return "red"
        return "rgba(229, 56, 53, 1)"; // red at 100% opacity
    }
   if (val > mean + 1 * sd || val < mean - 1 * sd) {
       return "rgba(255, 165, 0, 1)"; // orange at 100% opacity
   }
    return "rgba(76, 175, 80, 1)"; // green at 100% opacity
};

export default brightColor;