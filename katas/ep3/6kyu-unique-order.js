const uniqueOrder = (iterable) => {
  const order = [];
  const arr = [...iterable];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      order.push(arr[i]);
    }
  }
  return order;
};

// console.log();
module.exports = uniqueOrder;
