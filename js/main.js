$(document).ready(function(){

  $('#calendar').fullCalendar({
    locale: 'es',
    themeSystem: 'bootstrap4',
    header: {
            left:   'prev,next today',
            center: 'title',
            right:  'month,agendaWeek,agendaDay,listMonth'
            },
    // events: 'https://fullcalendar.io/demo-events.json',
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  });


  var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    alert('Dia clickeado:  ' + date.format());
  });

});
