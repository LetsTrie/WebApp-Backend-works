function sell_now() {
  var book_seller_Name = firebase.auth().currentUser.displayName;
  var book_title = document.getElementById("title_ID").value;
  var book_description = document.getElementById("description_ID").value;
  var book_tag = document.getElementById("tag_ID").value;
  var book_postTime = new Date();

  var newPostKey = firebase.database().ref().child('BookSellPost').push().key;

  firebase.database().ref('/BookSellPost/' + newPostKey).set({
    Seller_Name     			: book_seller_Name,
    Book_Title           	: book_title,
    Book_Description     	: book_description,
    Book_Tag             	: book_tag,
    PostTime        			: book_postTime
  }).then(function() {
    window.location = "homepage.html";
  });
}


function sell_book_page_selector()  {
	try {
		var user = firebase.auth().currentUser;
		if(user != null) {
			window.location = "CreateNewPost.html";
		} else {
			window.location = "sign_in.html";
		}
	}
	catch (err) {
			window.location = "sign_in.html";
	} 
}
