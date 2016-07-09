$(function($){
  var curses = [];
  function random_index(max){
    return Math.ceil(Math.random() * (max - 0) + 0);
  }

  function get_curses(){
    $.ajax({
      url: "https://raw.githubusercontent.com/morriswchris/proast/master/curses.json",
      success: function(data){
        data = JSON.parse(data);
        curses = data.curses;
        var index = random_index(curses.length);
        var curse = curses[index];
        $("#curse").text(curse);
      }
    });
  }
  get_curses();
});
