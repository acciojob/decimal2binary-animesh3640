function decimalToBinary(num){
   let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  
  return binary;
}
 
module.exports = decimalToBinary;

