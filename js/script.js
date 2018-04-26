$(document).ready(function(){


    //here will be script for instanews app
      // console.log("Are you ready for some serious stuff?")
      //selecting section from dropdown list in html
      $('#nyt-feed-selection').on('change', function(){
      var section= $(this).val(); //getting value from the dropdown

  // requesting AJAX from NYT,; Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/topstories/v2/"+section+".json";
    url += '?' + $.param({
      'api-key': "7331fe55c27e461991e92be4dea1b870"
    });
    $.ajax({
      url: url,
      method: 'GET',
    })

    //success
    .done(function(data) {
      // console.log(data)
      $('.stories-list').empty();//clear the category choice after appending

      var story=0;//entering the first result;
      //there should be max 12 stories, only with pics
      for(var i=0; i<data.results.length && story<12; i++) {
        if (data.results[i].multimedia.length > 3)//checking if the story has a picture type:mediumThreeByTwo210(multimedia[4]), if yes, execute the code
          {
            var imageUrl = data.results[i].multimedia[4].url;// creating image variable for image url
            var storyUrl = data.results[i].url;
            var storyAbs = data.results[i].abstract;

            // .append("<div>""<p>" + storyAbs + "</p>")//this get me abstract
            // .append('<img src=' + imageUrl+ '>')// this get me image

           $(".stories-list").append('<li class="story-list-item"><a href="' + storyUrl + '" target="_blank" class="story-item" style="background: url(' + imageUrl + ') no-repeat center/cover"><p class="story-item-text">'+ storyAbs+'</p></a></li>');
            story += 1; //adding a story if contains pic
          }
      }
    })

    //error
    .fail(function(err) {
      throw err;
    });

  });// end of '#nyt-feed-selection').on 'change' function
      //copy-pasted from NYT
});//end of document.ready
