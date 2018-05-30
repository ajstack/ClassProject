
// Using jQuery
// var wikiData;
// $.ajax( {
// url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
// //data: queryData,
// dataType: 'jsonp',
// type: 'POST',
// headers: { 'Api-User-Agent': 'Example/1.0' },
// success: function(data) {
//    // do something with data
// }
// }).then(function(response) {
//   wikiData = response;
//   console.log(wikiData);


// });



// var wikiData;
// $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
//       method: "GET"
//     }).then(function(response) {
//       wikiData = response
//       console.log(wikiData);
// });



$("#artistSearch").on("click", function (event) {
  event.preventDefault();

  // https://www.youtube.com/watch?v=
  var artist = $("#artist").val().trim();
  var youTube
  var youTubeAPIkey = "AIzaSyDXIkTs44eGNfH2r9jIyECiQgv4dJ6_RWM";
  var youTubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + artist + "&key=" + youTubeAPIkey;
  $.ajax({
    // url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=surfing&key=AIzaSyDXIkTs44eGNfH2r9jIyECiQgv4dJ6_RWM",
    url: youTubeURL,
    method: "GET",
    dataType: 'jsonp' // changed datatype first to "application/json and then just 'json' and then started getting a response from youTube API
  }).then(function (response) {
    youTube = response
    // console.log(youTube);
    var youTubeVideos = youTube.items;
    console.log(youTubeVideos);
    for (var i = 0; i < youTubeVideos.length; i++) {
      //console.log(youTubeVideos[i].snippet.title);
      // console.log("https://www.youtube.com/watch?v=" + youTubeVideos[i].id.videoId);
      var iframeSrc = "https://www.youtube.com/embed/" + youTubeVideos[i].id.videoId;
      console.log(iframeSrc);
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement("script");

      $("#youtubeIframe").attr("src", iframeSrc);

      // tag.src = "https://www.youtube.com/watch?v=" + youTubeVideos[i].id.videoId;
      // var firstScriptTag = document.getElementsByTagName("script")[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      // function onYouTubeIframeAPIReady() {
      //   new YT.Player("player", {
      //     height: "390",
      //     width: "640",
      //     videoId: youTubeVideos[i].id.videoId,
      //     events: {
      //       "onReady": onPlayerReady,
      //       "onStateChange": onPlayerStateChange
      //     }
      //   });
      // }
    }
  });
  // var youTubeVidEmbed = youTube.items.



});


// $(document).on("click", ".tunes", displayItunesInfo);

$("#artistSearch").on("click", function (event) {
  event.preventDefault();
  // console.log("search");

  var artist = $("#artist").val().trim();
  // console.log(artist);

  var ticketMasterApiKey = "kJgzQXUSlb55GtDLH5Qh4BI1eZYNZvcp";


  var ticketMasterQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=3&keyword=" + artist + "&apikey=" + ticketMasterApiKey;

  $.ajax({
    type: "GET",
    url: ticketMasterQueryURL,
    async: true,
    dataType: "json",
    success: function (ticketMasterResults) {
      //console.log(ticketMasterResults);
      var ticketMasterEvents = ticketMasterResults._embedded.events;
      //console.log(ticketMasterEvents);
      $("#tour-dates").empty();
      for (var i = 0; i < ticketMasterEvents.length; i++) {

        //console.log(ticketMasterEvents[i].name);
        //console.log(ticketMasterEvents[i].url);
        var listItem = $("<li>");
        var tourDates = ("<a href =" + ticketMasterEvents[i].url + " target='_blank'>" + ticketMasterEvents[i].name + "</a>");

        listItem.prepend(tourDates);

        $(listItem).appendTo("#tour-dates");

      }
    },
    error: function (xhr, status, err) {
      // This time, we do not end up here!
    }
  });

  var itunesQueryURL = "https://itunes.apple.com/search?term=" + artist + "&limit=3";

  $.ajax({
    url: itunesQueryURL,
    method: "GET"
  }).then(function (response) {
    itunesInfo = response
    //console.log(itunesInfo);
    var itunesObject = JSON.parse(itunesInfo);
    //console.log(itunesObject);

    var itunesResults = itunesObject.results
    console.log(itunesResults);
    //$("#").empty(); {put div for itunes here to clear with every search}
    $("#artist-image").empty();
    for (var i = 0; i < itunesResults.length; i++) {
      // console.log(itunesResults[i].artistName);
      // console.log(itunesResults[i].trackName);
      // console.log(itunesResults[i].artistViewUrl);
      // console.log(itunesResults[i].trackViewUrl);
      // console.log(itunesResults[i].artworkUrl100);
     
    }
    var artistImg = $("<img>");
    
    artistImg.attr("src", itunesResults[0].artworkUrl100);

    $(artistImg).appendTo("#artist-image");

    // var artistBio = $("<div>");

    // artistBio.attr("src", itunesResults);



    //$(artistImg).appendTo("#wikipedia");
  });


});



//  $("#artistSearch").on("click", function(event){
//   event.preventDefault();

//   var artist = $("#artist").val().trim();
//   var wikipedia
 
//   var wikipediaURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + artist + "&key=" + youTubeAPIkey;

// var wikiData;
// $.ajax( {
// url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
// // data: queryData,
// dataType: 'jsonp',
// type: 'POST',
// headers: { 'Api-User-Agent': 'Example/1.0' },
// // success: function(data) {
// //    // do something with data
// // }
// }).then(function(response) {
//   var wikiData = response;
//   console.log(response);

// });

// });


