const findTheNumberOfOddNumbers = (oddNumber) => {
  let counter = 0;
  for (let index = 0; index < oddNumber.length; index++) {
    if(oddNumber[index] % 2 === 1) {
      counter++;
    }
  }
  return counter;
};

const getIndexOfFalseItem = (falseItem) => {
  return falseItem;
};

const filterNumbers = (fnumber) => {
  let fnumber = 23;
  for (let index = 0; index < fnummer.length; index++) {
    if (fnumber[index]) {
      return true;
    }
    
  }
  return false;
};

const generateEmailAddress = (generateEmailAddress) => {
  let toLowerCase = generateEmailAddress.toLowerCase();
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};



