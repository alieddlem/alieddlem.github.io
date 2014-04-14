// Backup data: $.getJSON("http://web2spring2014.herokuapp.com/assets/dribbble-cc215791e1db5565d5f5ffa3cc4a3cc7.json",function(data) {
    $(function() {


    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
      console.log(data);


    //the loop
for(var i=0;i<data.shots.length;i++){
var shots= data.shots[i]
var post = $("<div class='post'>");

var image = $("<img class='image'>").attr("src", shots.image_teaser_url);
var title = $("<div class='title'>").text(shots.title);
var author = $("<div class='author'>").text(shots.created_at);
var likes = $("<div class='likes'>").text(shots.likes_count);

post.append(image);
post.append(title);
post.append(author);
post.append(likes);
 
 $("#shots").append(post);       

createShot(data.shots[i]);        
      
}

function createShot(shots) {

      post.on("click",function() {

        var img = $("<img>").attr("src",shots.image_url);
        $("#detail").empty().append(img);
      });
    }


        // We need to save the current shot for later 







});
});
