
var windowHeight = $(window).height();
var menuBarHeight = $('#menuBar').height();
var codeContainerHeight = windowHeight - menuBarHeight;

$('.codeContainer').height(codeContainerHeight+'px');

$('.toggle').on('click', function() {
  $(this).toggleClass('selected');
  var activeDiv = $(this).html();

  $('#' + activeDiv + 'Container').toggle();

  // get the number of containers opened 
  var showingDivs = $('.codeContainer').filter(function() {
      return ($(this).css('display') != 'none');
  }).length;

  // calculate the width of containers 
  var width = 100 / showingDivs;

  $('.codeContainer').css('width', width + '%');
});

$('#runButton').on('click', function() {
  $('iframe').contents().find('html').html("<style>" + $('#cssCode').val() + "</style>" + $('#htmlCode').val());
});