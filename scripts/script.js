$(document).ready(function(){
    //here will be script for instanews app
console.log("Are you ready for some serious stuff?")

//copy-pasted from NYT
// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "7331fe55c27e461991e92be4dea1b870"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
});