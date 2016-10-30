$(function($){
  function type_text(curse) {
    $("#curse").typed({
      strings: [curse],
      showCursor: false,
      typeSpeed: 10,
    });
  }

  function get_curses(){
    $.ajax({
      method: 'GET',
      url: 'http://' + window.location.host + '/random',
      success: function(data){
        type_text(data);
      }
    });
  }
  get_curses();
});
