function post_now() {
  var post_author = firebase.auth().currentUser;
  var post_title = document.getElementById("title_ID").value;
  var post_description = document.getElementById("description_ID").value;
  var post_tag = document.getElementById("tag_ID").value;
  var post_readingTime = document.getElementById("minute_ID").value;
  var post_postTime = new Date();

  // var newPostKey = firebase.database().ref().child('UserPost').push().key;
  
  // //it is not working after that.....  
  // firebase.database().ref('UserPost').child(newPostKey).set({
  //   Author  : post_author,
  //   Title   : post_title,
  //   Description : post_description,
  // });
  window.location = "homepage.html";
}