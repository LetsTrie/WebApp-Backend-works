let database = firebase.database();
let storage  = firebase.storage();
let fileName = document.getElementById("pddff");
let storage_ref = database.ref("MyPdfFolder_What");

function updao() {
  console.log("Hello");
}
function sell_now() {
  var book_seller_Name = firebase.auth().currentUser.displayName;
  var book_title = document.getElementById("title_ID").value;
  var book_description = document.getElementById("description_ID").value;
  var book_tag = document.getElementById("tag_ID").value;
  var book_WritterName = document.getElementById("WritterName_ID").value;
  var somoy = new Date(); 
  var book_postTime = somoy.toString();

  var newPostKey = firebase.database().ref().child('BookSellPost').push().key;

  firebase.database().ref('/BookSellPost/' + newPostKey).set({
    Seller_Name     			: book_seller_Name,
    Book_Title           	: book_title,
    Book_Description     	: book_description,
    WritterName           : book_WritterName,
    Book_Tag             	: book_tag,
    PostTime        			: book_postTime
  }).then(function() {
        let myfile = fileName.files[0];
        let uploadTask = storage.ref("MyPdfFolder/" + new Date()).put(myfile);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {
              switch (error.code) {
                case 'storage/unauthorized':
                  // User doesn't have permission to access the object
                  break;
                case 'storage/canceled':
                  // User canceled the upload
                  break;
                // ...
                case 'storage/unknown':
                  break;
              }
      }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            window.location = "buy_books.html";
          });
      });
  });

}


function sell_book_page_selector()  {
	try {
		var user = firebase.auth().currentUser;
		if(user != null) {
			window.location = "sell_books.html";
		} else {
			window.location = "sign_in.html";
		}
	}
	catch (err) {
			window.location = "sign_in.html";
	} 
}
