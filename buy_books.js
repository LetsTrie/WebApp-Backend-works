var DatabaseRef = firebase.database().ref('/BookSellPost');

// kuno post dlt korle sheta extra akta hisebe dekhay... refresh korle sob thik hoye jay...

DatabaseRef.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {  
      var childData = childSnapshot.val();
      document.querySelector("#All_Book_posts").innerHTML += "<div> <p> " + 
            "Seller_Name : " + childData.Seller_Name +        "<br>" + 
            "Book Title : " + childData.Book_Title +               "<br>" + 
            "Book Description : " + childData.Book_Description +   "<br>" + 
            "Book Tag : " + childData.Book_Tag +                   "<br>" +
            "Book Writter : " + childData.WritterName +  "<br>" + 
            "Post Time : " + childData.PostTime +             "<br>" + 
            "</p> </div> <hr>";
  });
});