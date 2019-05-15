(function(exports) {
  function testNoteList() {
    var noteList = new NoteList
    var note = new Note("I am a note")

    noteList.addItem("hello")
    noteList.addItem(note.getText())

    var testValue = noteList.getArray().join(", ")
    var expectation = "hello, I am a note"
    new Expect(testValue).toEqual(expectation)

  }

  testNoteList();
})(this);
