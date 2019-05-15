(function(exports) {
  function testInstatiationInput() {
    var note = new Note('10');

    if (typeof note.getText() !== 'string') {
      throw new Error('Test 1 failing...');
    } else {
      console.log('Test Pass '+'✅')
    }
  };
  testInstatiationInput();
})(this);
