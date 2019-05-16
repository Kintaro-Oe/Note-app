(function(exports) {
  function NoteController(one){
    var noteList = one
    var note = new Note("Favourite drink: seltzer");
    var text = note.getText()
    noteList.addItem(text)

    this.listView = new ListView(noteList)

  };

  NoteController.prototype = {

    render: function() {
      app.innerHTML = this.listView.addHTML()
    }
  };

  exports.NoteController = NoteController
})(this);














window.onload = function() {
  var app = document.getElementById('app');


  var noteList = new NoteList();

  var controller = new NoteController(noteList);

  controller.render();


  // app.innerHTML = "howdy"
  console.log(app)
}
