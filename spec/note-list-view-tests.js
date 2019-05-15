//Describe, ListView
//Describe, render(NoteList)

(function(exports) {
  function WithNoNotes(){
    var noteList = new NoteList();
    var listView = new ListView(noteList);

    ////////EXPECTATION////////////
    var testValue = listView.render()
    var expectation = '<ul></ul>'
    new Expect(testValue).toEqual(expectation)

  }
  WithNoNotes();
})(this);

(function(exports) {
  function WithOneNote(){
    var note1 = new Note('I am note 1');

    var noteList = new NoteList();
    noteList.addItem(note1.getText());

    var listView = new ListView(noteList);


    ////////EXPECTATION////////////
    var testValue = listView.render()
    var expectation = '<ul><li><div>I am note 1</div></li></ul>'
    new Expect(testValue).toEqual(expectation)

  }
  WithOneNote();
})(this);

(function(exports) {
  function WithSeveralNotes(){
    var note1 = new Note('I am note 1');
    var note2 = new Note('I am note 2');
    var note3 = new Note('I am note 3');

    var noteList = new NoteList();
    noteList.addItem(note1.getText());
    noteList.addItem(note2.getText());
    noteList.addItem(note3.getText());

    var listView = new ListView(noteList);


    ////////EXPECTATION////////////
    var testValue = listView.render()
    var expectation = '<ul><li><div>I am note 1</div></li><li><div>I am note 2</div></li><li><div>I am note 3</div></li></ul>'
    new Expect(testValue).toEqual(expectation)

  }
  WithSeveralNotes();
})(this);
