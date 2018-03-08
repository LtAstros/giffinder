/* global $ */
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  var i = 0;
  $("#button1").click(function(){
      callGiphyAPIWithSearchTerm($("input").val(), 0);
  });
  $("#button2").click(function(){
      variabletoarray($("input").val());
  });
  $(".output").click(function(){
      if (i < 21) {
        console.log(i);
        callGiphyAPIWithSearchTerm($("input").val(), i);
        i = Math.floor(Math.random()*20);
      } else {
        i = 0;
      }  
  });

});
  function giphyURLWithSearchTerm(searchTerm) {
    var newUrl = "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    return newUrl;
  }

  function appendImageToGallery(srcURL) {
    $(".output").html("<img class=output src="+srcURL+">");
  }
  function appendImage(srcURL) {
    $(".output").append("<img class=output src="+srcURL+">");
  }
  function variabletoarray(searchTerm){
    var arr = searchTerm.split(" ");
    console.log(arr);
    var arr1 = [
      "https://api.giphy.com/v1/stickers/search?q="+arr[0]+"&api_key=dc6zaTOxFJmzC",
      "https://api.giphy.com/v1/stickers/search?q="+arr[1]+"&api_key=dc6zaTOxFJmzC",
      "https://api.giphy.com/v1/stickers/search?q="+arr[0]+arr[1]+"&api_key=dc6zaTOxFJmzC"
      ];
  for (var a = 0; a < 3; a++) {
    $.ajax({
      url: arr1[a],
      method: "GET",
      success: function(response) {
           var url = response.data[0].images.original.url;
           appendImage(url);
      },
    });
  }
  }
  function callGiphyAPIWithSearchTerm(searchTerm, tempo) {
    // use the giphyURLWithSearchTerm function to customize the url below
    var giphyURL = "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
           var url = response.data[tempo].images.original.url;
           appendImageToGallery(url);
      },
    });
}

