
import { randomAlpha, randomNumeric } from './service/OrderCodeService.js';

class OrderCode {
  constructor(){

  }
  //generate default order code with length = 6
  generateDefault(){
    let orderCode = "";
    for(let i = 0 ; i < 6 ; i++){
      let type = Math.floor(Math.random() * 2);
      if(type === 0){
        orderCode = randomAlpha(orderCode);
      }else{
        orderCode = randomNumeric(orderCode);
      }
    }
    return orderCode;
  }

  //generate default order code with custom length
  generateWithCustomLength(length){
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

  static generate(){
      const orderCode = new OrderCode();
      if(arguments.length == 0){
        return orderCode.generateDefault();
      }else if(arguments.length == 1){
        return orderCode.generateWithCustomLength(arguments[0]);
      }else{
        throw new TypeError('Too much arguments when create order code, please follow the documentation on ( https://github.com/Revtm/ordercode#readme ).');
      }
  }
}

export { OrderCode as default };
