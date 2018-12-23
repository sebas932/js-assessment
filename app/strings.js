stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    var arr = str.split('');
    var repeated = [], occurrences = [];
    arr.forEach(function(e, i) {
      occurrences[e] = (occurrences[e] || 0) + 1;
      if((occurrences[e]  == amount) && (arr[i+1] != e)){
        // Reset
        occurrences[e] = 0;
      }
      if((occurrences[e] <= amount) ) {
        repeated.push(e);
      }
    });
    return repeated.join('');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    var arr = str.split('');
    return arr.reverse().join('');
  },
};
