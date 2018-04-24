$(document).ready(function(){
    //here will be script for instanews app
      // console.log("Are you ready for some serious stuff?")
      //selection section from dropdown list in html
      $('#nyt-feed-selection').on('change', function(){
      var section= $(this).val(); //getting value from the dropdown

  // requeting AJAX from NYT,; Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/topstories/v2/"+section+".json";
    url += '?' + $.param({
      'api-key': "7331fe55c27e461991e92be4dea1b870"
    });
    $.ajax({
      url: url,
      method: 'GET',
    })
    .done(function(data) {
      // console.log(data)
      $('.feed-images').empty();//clear the category choice after appending

      var story=0;//entering the first result;
      //there should be max 12 stories, only with pics
      for(var i=0; i<data.results.length && story<12; i++) {
        if (data.results[i].multimedia.length > 3)//checking if the story has a picture type:mediumThreeByTwo210(multimedia[4]), if yes, execute the code
          {
            var imageUrl = data.results[i].multimedia[4].url// creating image variable for image url

            $('.feed-images')//tbc: separate divs for abstract + img? Easier to flexbox them?
            .append(`<p>${data.results[i].abstract}</p>`)//this get me abstract
            .append(`<img src="${imageUrl}" />`)// this get me image
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
