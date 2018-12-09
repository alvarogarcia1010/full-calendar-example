$(document).ready(function(){
  var rooms = [{id:1, title:"Centroamericano"},
               {id:2, title:"Internacional"}]

  $('#calendar').fullCalendar({
    locale: 'es',
    themeSystem: 'bootstrap4',
    defaultView: 'timelineMonth',
    contentHeight: 'auto',
    header: {
            left:   'prev,next today',
            center: 'title',
            right:  'timelineDay,timelineWeek,timelineMonth,listMonth'
            },
    views:
    {
      timelineDay:
      {
        slotDuration: {hours: 6},
        slotLabelFormat: ['dddd DD MMMM YYYY'],
      },
      timelineWeek:
      {
        slotDuration: {hours: 12},
        slotLabelFormat: ['ddd DD'],

      }
    },
    eventLimit: true,
    eventOverlap: false,
    allDaySlot: false,
    resourceLabelText: 'Salones',
    resources: rooms,
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    timeFormat: 'H(:mm)'
  });


  var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    alert('Dia clickeado:  ' + date.format());
  });

  $('#print').click(function(){
    window.print();
  });

});
