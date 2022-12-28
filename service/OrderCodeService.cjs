const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const randomAlpha = (orderCode) => {
  return orderCode + alpha[Math.floor(Math.random() * alpha.length)];
}

const randomNumeric = (orderCode) => {
  return orderCode = orderCode + numeric[Math.floor(Math.random() * numeric.length)];
}


module.exports = { randomAlpha, randomNumeric, alpha, numeric };
