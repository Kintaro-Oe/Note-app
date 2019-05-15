(function(exports) {
  function ListView(noteListModel){
    this.noteList = noteListModel
  };


  ListView.prototype.render = function () {
    return '<ul>' +
    this.noteList.getArray().map(x => '<li><div>'+x+'</div></li>').join("") +
    '</ul>';
  };

  exports.ListView = ListView
})(this);
