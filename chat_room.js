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



function addroom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ purpose: "adding room name"});
   
   localStorage.setItem("room_name",room_name);
 
   window.location = "kwitter_room.html";
 
 }
 
 function getData() { firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    Room_names = childKey; 
    console.log("Room Name - " + Room_names); 
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row; }); }); }

 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
 }
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location = "index.html";
}
