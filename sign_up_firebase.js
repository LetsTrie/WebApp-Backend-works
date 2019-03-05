function Signup(){
	var userFirstName = document.getElementById("signUpFirstNameID").value;
	var userLastName = document.getElementById("signUpLastNameID").value;
	var userEmail = document.getElementById("signUpEmailAddressID").value;
	var userPassword = document.getElementById("signUpPasswordID").value;
	var userPasswordAgain = document.getElementById("signUpPasswordAgainID").value;
	if(userPassword != userPasswordAgain) {
		window.alert("Password is not matching.");
		return;
	}
	if(userPassword.length < 6 || userPasswordAgain.length < 6 ) {
		window.alert("Password must be greater than 5 characters.");
		return;	
	}
	if(userEmail.length < 6) {
		window.alert("Invalid Email");
		return;
	}
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then(function(user) {
	 //    var user = firebase.auth().currentUser;
	 //    var userId = user.uid;
		// firebase.database().ref('Users/' + userId).set({
		// 	FirstName : userFirstName,
		// 	LastName : userLastName,
		// 	Email : userEmail,
		// 	UserID : userId
		// });

	    firebase.auth().signOut(); 
	    window.location = "sign_in.html";
	}, function(error) {
	 	var errorCode = error.code;
		var errorMessage = error.message;
	  	window.alert("Error Code: " + errorCode);
	  	window.alert("Error Message: " + errorMessage);		
	});	
}