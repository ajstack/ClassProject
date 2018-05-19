var apiKey = "kJgzQXUSlb55GtDLH5Qh4BI1eZYNZvcp";
var bandName = "" //$(this).attr("data-topic"); {put this sort of thing here}

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword="+ bandName + "&apikey=" + apiKey;

$.ajax({
  type:"GET",
  url:queryURL,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});