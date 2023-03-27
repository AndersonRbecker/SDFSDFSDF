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
  userName= localStorage.getItem("userName");
  roomName = localStorage.getItem("roomname");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
          name:userName,
          message:msg,
          like:0
      });
  
      document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
         console.log(firebaseMessageId);
         console.log(messageData);
        name = messageData ['name'];
        message = messageData['message'];
        like  = messageData ['like'];

        nameWithTag = "<h4> " + name + "<img class' user_tick' src='tick.png'> </h4>" ;

        messageWithTag = "<h4 class = 'message_h4'>" + message + "</h4>";

        likeButton = "<button class = 'btn btn-warning'id="+firebaseMessageId+" value="+like+"onclick='updateLike(this.id)'>";
       spanWithtag= "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+ "</span></button></hr>"
        row = nameWithTag + messageWithTag + likeButton + spanWithtag;
        document.getElementById("output").innerHTML += row;




      } });  }); }

      function updateLike(messageId){
        console.log ("botão precionado -" + messageId);
        button_id = messageId;
        likes = document.getElementById(button_id).value;
        updteLikes.log = Number(likes) + 1;
        console.log(updateLikes);

        firebase.database().ref(roomName).child(messageId).update({ 
            like :updateLikes
        });


      }
      function logout(){
            localStorage.removeItem("userName");
            localStorage.removeItem("roomname");
            window.location.replace("index.html");
      }
