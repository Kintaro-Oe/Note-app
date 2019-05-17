function NoteController(noteList) {
  this.noteList = noteList
  this.listViewDouble = new ListViewDouble(this.noteList)
};

NoteController.prototype = {
  render: function() {
    app.innerHTML = this.listViewDouble.addHTML()
  }
};
