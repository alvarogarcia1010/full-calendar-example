$(document).ready(function(){

  $('#calendar').fullCalendar({
    locale: 'es',
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  });


  var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    alert('Dia clickeado:  ' + date.format());
  });

});
