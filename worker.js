
// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_Nglab4XFv5WuzSuUoUg0MTDSehDgUJk",
    authDomain: "assistprodatabase.firebaseapp.com",
    databaseURL: "https://assistprodatabase.firebaseio.com",
    projectId: "assistprodatabase",
    storageBucket: "assistprodatabase.appspot.com",
    messagingSenderId: "856578818550",
    appId: "1:856578818550:web:28a42553814ab29de187d7",
    measurementId: "G-2KR739JWYE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.app().storage("gs://assistprodatabase.appspot.com");
var storageRef = storage.ref();

AddSection("Steph", "Steph.png", 1);
AddSection("Steph2", "Dress.jpg", 1);
AddSection("Steph", "Steph.png", 1);
AddSection("Steph", "Steph.png", 1);
AddSection("Steph", "Steph.png", 1);
AddSection("Steph", "Steph.png", 1);
AddSection("Steph", "Steph.png", 1);
AddSection("Steph", "Steph.png", 1);


function AddSection(name, thumbnail, count){

  storageRef.child(thumbnail).getDownloadURL().then(function(url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    var div = document.getElementById("main_photos");
    div.innerHTML += "<a class=\"gallery-item\" href=\"single.html\"> <img src=\""+ url 
                      +"\"> <span class=\"overlay\"> <h2>"
                      + name + "</h2> <span>" + count 
                      + " Photos</span> </span></a>";

  }).catch(function(error) {
    // Handle any errors
  });
}