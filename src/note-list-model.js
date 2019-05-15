(function(exports) {
  function NoteList() {
    this.notesArray = [];
  };

  NoteList.prototype.getArray = function () {
    return this.notesArray;
  };

  NoteList.prototype.addItem = function (item) {
    this.notesArray.push(item);
  };

  exports.NoteList = NoteList
})(this);
