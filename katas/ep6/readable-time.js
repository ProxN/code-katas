/** 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

link:https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
*/

const addZero = (number) => {
  return number > 9 ? number : `0${number}`;
};

const humanReadable = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = Math.floor(sec % 60);

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};

module.exports = humanReadable;
