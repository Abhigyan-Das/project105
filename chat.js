//Add firebase here 
const firebaseConfig = {
    apiKey: "AIzaSyALAo76Px6BePCwGU3ptzKLA7xXY7fN8RI",
    authDomain: "kwitter-8e400.firebaseapp.com",
    databaseURL: "https://kwitter-8e400-default-rtdb.firebaseio.com",
    projectId: "kwitter-8e400",
    storageBucket: "kwitter-8e400.appspot.com",
    messagingSenderId: "881512672797",
    appId: "1:881512672797:web:f282ae8ddba24b162260f4"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  
function addUser()
{
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.getItem("user_name", user_name);

    window.location = "chat_room.html";
    
}





