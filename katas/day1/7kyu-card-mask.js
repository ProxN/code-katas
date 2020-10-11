/**
Usually when you buy something, you're asked whether your credit card number,
 phone number or answer to your most secret question is still correct. 
 However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Kata Link: https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
 */

const maskify = (cc) => {
  if (cc.length < 4) return cc;
  const maskedDigitLength = cc.length - 4;
  const last4Digit = cc.slice(maskedDigitLength);
  return '#'.repeat(maskedDigitLength) + last4Digit;
};

module.exports = maskify;
