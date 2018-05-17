$.ajax({
    url: "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=8eb091be8b1dd1a4700dc3b2a357bc1d",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });