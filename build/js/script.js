'use strict';

$(document).ready(function () {
  var x = 1;
  $('#loading-image').hide();
  //selecting section from dropdown list in html
  $('#nyt-feed-selection').on('change', function () {
    var section = $(this).val(); //getting value from the dropdown
    if (section.length === 0) {
      return;
    }
    $('header').addClass('header-smaller');
    //to get header with the added class

    // requesting AJAX from NYT,; Built by LucyBot. www.lucybot.com
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json';
    url += '?' + $.param({
      'api-key': '7331fe55c27e461991e92be4dea1b870'
    });
    $('#loading-image').show();
    $.ajax({
      url: url,
      method: 'GET'

    })

    //success
    .done(function (data) {
      $('.story-list').empty();
      $('#loading-image').hide();

      var story = 0; //entering the first result;
      //there should be max 12 stories, only with pics
      for (var i = 0; i < data.results.length && story < 12; i++) {
        //checking if the story has a picture type:mediumThreeByTwo210(multimedia[4]), if yes, execute the code
        if (data.results[i].multimedia.length > 3) {
          var imageUrl = data.results[i].multimedia[4].url;
          var storyUrl = data.results[i].url;
          var storyAbs = data.results[i].abstract;

          $('.story-list').append('<li class="story-list-item"><a href="' + storyUrl + '" target="_blank" class="story-item" style="background: url(' + imageUrl + ') no-repeat center/cover"><p class="story-item-text">' + storyAbs + '</p></a></li>');
          story += 1;
        }
      }
    }) //end of success

    //error
    .fail(function () {
      $('.story-list').append('<p>Sorry, it appears there is a problem. Try agai later</p>');
    }); //end of error
  }); // end of $('#nyt-feed-selection').on 'change'function
}); //end of document.ready