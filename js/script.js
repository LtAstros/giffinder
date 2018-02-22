/* global $ */
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  $("body").click(function(){
  
  });  

});
  function giphyURLWithSearchTerm(searchTerm) {
    var newUrl = "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    return newUrl;
  }

  function appendImageToGallery(srcURL) {
    $("body").append("<img src="+srcURL+">");
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
           // Log the whole response to the console
            //console.log(response);
           // Log the first image of the data to the console
            console.log(response.data[0].url);
           // Log the "type" property of the first image object to the console
            console.log(response.data[0].type);
           // Log the "title" property of the first image object to the console
            console.log(response.data[0].title);
      },
    }); 
  }

