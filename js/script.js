/* global $ */
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  $("button").click(function(){
      callGiphyAPIWithSearchTerm($("input").val(), 0);
  });
  $("input").click(function(){
  for (var i = 1; i < 21; i = i + 1) {    
      callGiphyAPIWithSearchTerm($("input").val(), i);
  }
  });

});
  function giphyURLWithSearchTerm(searchTerm) {
    var newUrl = "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    return newUrl;
  }

  function appendImageToGallery(srcURL) {
    $("#output").html("<img id=output src="+srcURL+">");
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

