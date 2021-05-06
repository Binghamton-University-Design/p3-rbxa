/* javascript */

$(document).ready(function() {

$( ".toggle-nav" ).click(function() {
  $( ".nav-wrapper" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

});

