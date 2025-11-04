// dimColor.js

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

const dimColor = (val, mean, sd) => {
    if (val > mean + 2 * sd || val < mean - 2 * sd) {
        return "rgba(229, 56, 53, 0.4)"; // red at 40% opacity
    }
   if (val > mean + 1 * sd || val < mean - 1 * sd) {
       return "rgba(255, 165, 0, 0.4)"; // orange at 40% opacity
   }
   return "rgba(76, 175, 80, 0.4)"; // green at 40% opacity
};

export default dimColor;