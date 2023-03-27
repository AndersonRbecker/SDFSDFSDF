
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

function addUser(){
userName = document.getElementById("userName").value;

localStorage.setItem("userName",userName);

firebase.database().ref("/").child(userName).update({
    purpose:("adicionar usuario")
})

alert("usuario cadastrado"+userName)
window.location = "kwitterRoom.html";

}


