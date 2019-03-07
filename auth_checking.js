firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("logged_in").style.display = "block";
    document.getElementById("login_signin").style.display = "none";
    var user = firebase.auth().currentUser;
    if(user != null){
      var my_email_id = user.email;
      var my_email_verified = user.emailVerified;
      document.getElementById("user_welcome").innerHTML = "Welcome User : " + my_email_id;
      if(my_email_verified) {
      	document.getElementById("Verified").style.display = "block";
      	document.getElementById("VerifyYourAccount").style.display = "none";
      } else {
      	document.getElementById("Verified").style.display = "none";
      	document.getElementById("VerifyYourAccount").style.display = "block";
      }
    }
  } else {
    document.getElementById("logged_in").style.display = "none";
    document.getElementById("login_signin").style.display = "block";
  }
});

function logout(){
  firebase.auth().signOut();
}

function SendVerificationCode() {
	var user = firebase.auth().currentUser;

	user.sendEmailVerification().then(function() {
		//Email is send..
		window.alert('Verification Code is send to your Email.')
	}).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error Code: " + errorCode);
      window.alert("Error Message: " + errorMessage);  
	});
}

function create_post_newpage_selector()  {
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
    
var DatabaseRef = firebase.database().ref('/UserPost');

DatabaseRef.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {  
      var childData = childSnapshot.val();
      document.querySelector("#All_posts").innerHTML += "<div> <p> " + 
            "Author_Name : " + childData.Author_Name +        "<br>" + 
            "Post Title : " + childData.Title +               "<br>" + 
            "Post Description : " + childData.Description +   "<br>" + 
            "Post Tag : " + childData.Tag +                   "<br>" +
            "Post Reading Time : " + childData.ReadingTime +  "<br>" + 
            "Post Time : " + childData.postTime +             "<br>" + 
            "</p> </div> <hr>";
  });
});