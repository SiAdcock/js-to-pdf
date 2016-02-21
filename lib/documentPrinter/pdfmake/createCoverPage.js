module.exports = function createCoverPage(customerData) {
  const stack = customerData.addressLines.map((addressLine) => {
    return {
      text: addressLine,
      style: 'subheader'
    };
  });
  const stackLength = stack.unshift('Designs for customer:');

  stack[stackLength - 1].pageBreak = 'after';

  return {
    stack: stack,
    style: 'header'
  };
};
