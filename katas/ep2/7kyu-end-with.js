/**

Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).
 kata Link : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
 */

const endWith = (str, ending) => {
  return str.slice(str.length - ending.length) === ending;
};

module.exports = endWith;
