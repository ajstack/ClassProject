// console.log("hi");

// function renderButtons() {
// var itunesInfo;
// var artist;
// var queryURL = "https://itunes.apple.com/search?term=" + &limit=5"


$.ajax({
    url: "https://itunes.apple.com/search?term=Whitney&limit=5",
    method: "GET"
  }).then(function(response) {
    itunesInfo = response
   console.log(itunesInfo);
  });
// }
//  var itunesObject = JSON.parse(itunesInfo);
//  console.log(itunesObject);
  
  // console.log("hi");
  // var itunesInfo;
  // $.ajax({
  //     url: "https://itunes.apple.com/search?term=Whitney&limit=5",
  //     method: "GET"
  //   }).then(function(response) {
  //     itunesInfo = response
  //     console.log(itunesInfo);
  //   });
  
    

  // Using jQuery
  var wikiData;
$.ajax( {
  url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
  // data: queryData,
  dataType: 'jsonp',
  type: 'POST',
  headers: { 'Api-User-Agent': 'Example/1.0' },
  // success: function(data) {
  //    // do something with data
  // }
  }).then(function(response) {
    wikiData = response;
    // console.log(wikiData);


  });



// var wikiData;
// $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
//       method: "GET"
//     }).then(function(response) {
//       wikiData = response
//       console.log(wikiData);
//     });

var youTube
$.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDXIkTs44eGNfH2r9jIyECiQgv4dJ6_RWM",
    method: "GET"
  }).then(function(response) {
    youTube = response
  //  console.log(youTube);
  });


  var apiKey = "kJgzQXUSlb55GtDLH5Qh4BI1eZYNZvcp";
  var bandName = "" //$(this).attr("data-topic"); {put this sort of thing here}
  
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&keyword="+ bandName + "&apikey=" + apiKey;
  
  $.ajax({
    type:"GET",
    url:queryURL,
    async:true,
    dataType: "json",
<<<<<<< HEAD
    success: function(ticketMasterResults) {
                console.log(ticketMasterResults);
                var ticketMasterEvents = ticketMasterResults._embedded.events;
                console.log(ticketMasterEvents);
=======
    success: function(json) {
                // console.log(json);
>>>>>>> master
                // Parse the response.
                // Do other things.
                 for (var i=0; i<ticketMasterEvents.length; i++){
                   console.log(ticketMasterEvents[i].name);
                   console.log(ticketMasterEvents[i].url);
                 }
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });


  // $(document).on("click", ".tunes", displayItunesInfo);

  $("#artistSearch").on("click", function(event){
    event.preventDefault();
    console.log("search");

    var artist = $("#artist").val().trim();
    console.log(artist);

    var apiKey = "kJgzQXUSlb55GtDLH5Qh4BI1eZYNZvcp";
    // var bandName = "" //$(this).attr("data-topic"); {put this sort of thing here}
    
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword="+ artist + "&apikey=" + apiKey;
    
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

     } );


