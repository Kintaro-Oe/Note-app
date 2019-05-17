
function NoteListDouble() { this.notesArray = ["Favourite drink: seltzer"] };

function ListViewDouble(noteListDouble) { this.noteListDouble = noteListDouble };

ListViewDouble.prototype = {
  addHTML: function () {
    return '<ul>' +
    this.noteListDouble.notesArray.map(x => '<li><div>'+x+'</div></li>').join("") +
    '</ul>';
  }
};


var noteListDouble = new NoteListDouble();
var controller = new NoteController(noteListDouble);


//Test 1
new Expect(controller.noteList).toEqual(noteListDouble)

//Test 2
window.onload = function() {
  app = document.getElementById('app');
  controller.render();

  new Expect(app.innerHTML).toEqual('<ul><li><div>Favourite drink: seltzer</div></li></ul>')
}
