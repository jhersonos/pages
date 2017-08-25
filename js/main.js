/* google maps autocomplete */ 
var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(-12.114194,-77.044559),
  new google.maps.LatLng(-12.114194,-77.044559));

var input = document.getElementById('auto-c');
var options = {
  bounds: defaultBounds,
  types: ['establishment']
};

autocomplete = new google.maps.places.Autocomplete(input, options);

$(".bubbles div").click(function () {
  $(this).toggleClass("active");
})