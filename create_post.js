function post_now() {
  var post_author_Name = firebase.auth().currentUser.displayName;
  var post_title = document.getElementById("title_ID").value;
  var post_description = document.getElementById("description_ID").value;
  var post_tag = document.getElementById("tag_ID").value;
  var post_readingTime = document.getElementById("minute_ID").value;
  var post_postTime = new Date();

  var newPostKey = firebase.database().ref().child('UserPost').push().key;

  firebase.database().ref('/UserPost/' + newPostKey).set({
    Author_Name     : post_author_Name,
    Title           : post_title,
    Description     : post_description,
    Tag             : post_tag,
    ReadingTime     : post_readingTime,
    postTime        : post_postTime
  }).then(function() {
    window.location = "homepage.html";
  });
}