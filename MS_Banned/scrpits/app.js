
var assignmentDatabase = 'https://api.myjson.com/bins/coyca';

$.ajax({
  url: assignmentDatabase,
  type: "GET",
  dataType: "json",
  cache: false,
  success: function(data) {

    $.each(data, function(index, value) {

      if (value.State == "California" | value.State == "Florida" | value.State == "Illinois" | value.State == "Texas" | value.State == "South Carolina" | value.State == "New York" | value.State == "Washington") {

        var d = new Date(value["Incident Date"]);
        var day = ("0" + d.getDate()).slice(-2);
        var month = convertMonth(d.getMonth());
        var year = d.getFullYear();


   var html = '<div class="item">'+
              '<div class="Left_div"><div class="date">' + day + ' ' + month + ' ' + year + '</div>'+
				      '<div id="state" class="state">' + state_show(value.State) + '</div>'+
				      '<div class="address">' + value.Address + '</div></div>'+
              '<div class="Right_div"><div id="killed">' + killed_show(value["# Killed"]) + '</div>'+
					    '<div id="injured">' + injured_show(value["# Injured"]) + '</div></div>'+
						  '</div>';

$('#main').append(html);
      }
    });


resizeItems();

  },

});

function convertMonth(month) {
  switch (month + 1) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";

  }
}

function killed_show(num) {
  var j = "";
  for (var i = 0; i < num; i++) {
    j += '<div class="killed"></div>';
  }
  return j;
}

function injured_show(num) {
  var j = "";
  for (var i = 0; i < num; i++) {
    j += '<div class="injured"></div>';
  }
  return j;
}

function state_show(nam) {


  return nam;

}

setTimeout(function () { window.print(); }, 5000);
