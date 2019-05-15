function Expect(testValue) {
  this.testValue = testValue
};

Expect.prototype = {
  toEqual: function(expectation) {
    if (this.testValue !== expectation) {
      throw new Error('Test failing...') +
      '\n Expected: ' + expectation +
      '\n Got:      ' + this.testValue;
    } else {
      console.log('Test Pass '+'✅');
    }
  }
};
