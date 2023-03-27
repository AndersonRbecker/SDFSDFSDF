const firebaseConfig = {
   apiKey: "AIzaSyDGOmfWs24xvNfwJ2wBeDY0maWolAVR6c0",
   authDomain: "rede-social-sem-ninguem.firebaseapp.com",
   databaseURL: "https://rede-social-sem-ninguem-default-rtdb.firebaseio.com",
   projectId: "rede-social-sem-ninguem",
   storageBucket: "rede-social-sem-ninguem.appspot.com",
   messagingSenderId: "411533503987",
   appId: "1:411533503987:web:a97a7929737cffd483f686"
 };

  firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");
  document.getElementById("userName").innerHTML = "Bem-vindo ,"+
  userName + "!";

  function addRoom(){
   roomName = document.getElementById("roomName").value;

   firebase.database().ref("/").child(roomName).update({ purpose: "adicionar sala"});

   localStorage.setItem("roomName", roomName)

   window.location = "kwitterPage.html"
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
           childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log ("Room Name - " + roomNames);
       row = "<div class 'roomName' id = " + roomNames +"onclick =' redirectToRoomName(this.id)' > #" + roomNames + "</div><hr>";
       document.getElementById("output").innerHTML +=row;
    });});}

    function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomName", name);
      window.location = "kwitterPage.html";
    }
    
function logout() {
   localStorage.removeItem("userName");
   localStorage.removeItem("roomName");
   window.location = "kwitter.html";
   }   

    getData();


