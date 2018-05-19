// console.log("hi");
// var itunesInfo;
// $.ajax({
//     url: "https://itunes.apple.com/search?term=Whitney&limit=5",
//     method: "GET"
//   }).then(function(response) {
//     itunesInfo = response
//     console.log(itunesInfo);
//   });

  
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
    console.log(wikiData);
  });



// var wikiData;
// $.ajax({
//       url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
//       method: "GET"
//     }).then(function(response) {
//       wikiData = response
//       console.log(wikiData);
//     });