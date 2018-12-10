$(document).ready(function(){
  var rooms = [{id:1, title:"Centroamericano"},
               {id:2, title:"Internacional"}];

  var events = [{id: 1, resourceId: 1, title: "Evento 1", start:"2018-12-09", color:"rgb(246, 42, 171)", textColor:"#fff", description:"hola hoy una descripcion", client:"Alvaro Garcia"},
                {id: 2, resourceId: 2, title: "Evento 2", start:"2018-12-09", end:"2018-12-12", description:"hola hoy una descripcion", client:"Alvaro Cornejo"}];

  $('#calendar').fullCalendar({
    locale: 'es',
    themeSystem: 'bootstrap4',
    defaultView: 'timelineMonth',
    contentHeight: 'auto',
    navLinks: true,
    selectable: true,
    header: {
            left:   'prev,next today',
            center: 'title',
            right:  'timelineDay,timelineWeek,timelineMonth,listMonth'
            },
    views:
    {
      timelineDay:
      {
        slotDuration: {hours: 12},
        slotLabelFormat: ['dddd DD MMMM YYYY'],
      },
      timelineWeek:
      {
        slotDuration: {hours: 24},
        slotLabelFormat: ['ddd DD'],

      }
    },
    eventSources: [
      {events: events,
      editable: true}
    ],
    eventLimit: true,
    eventOverlap: false,
    selectOverlap: function(event) {
              alert('Ya existe un evento');
            },
    selectMinDistance: 2,
    allDaySlot: false,
    resourceLabelText: 'Salones',
    resources: rooms,
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    timeFormat: 'H(:mm)'
  });

  var date = $.fullCalendar.moment('2018-05-01');
  var calendar = $('#calendar').fullCalendar('getCalendar');

  calendar.on('dayClick', function(date, jsEvent, view) {
    alert('Dia clickeado:  ' + date.format());
    $('#new-event').modal();
  });

  calendar.on('select', function(startDate, endDate, jsEvent, view) {
    alert('selected ' + startDate.format() + ' to ' + endDate.format());
    $('#new-event').modal();

  });

  calendar.on('eventClick', function(calEvent,jsEvent, view) {
    console.log(calEvent)
    var info =  `<p>${calEvent.description}</p>
                  <input type="date" value='${calEvent.start._i}'>`
    $('#day-info-label').html(calEvent.title);
    $('#day-info-body').html(info);
    $('#day-info').modal();
  });

  $('#print').click(function(){
    $('#calendar').fullCalendar('gotoDate', date);
    // window.print();
  });

});
