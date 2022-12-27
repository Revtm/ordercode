
const { randomAlpha, randomNumeric } = require('./service/OrderCodeService.js');

const generateDefaultOrderCode = (length) => {
  let orderCode = "";
  for(let i = 0 ; i < length ; i++){
    let type = Math.floor(Math.random() * 2);
    if(type === 0){
      orderCode = randomAlpha(orderCode);
    }else{
      orderCode = randomNumeric(orderCode);
    }
  }

  return orderCode;
}

module.exports = { generateDefaultOrderCode };
