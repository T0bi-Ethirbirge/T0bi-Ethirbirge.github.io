//var div = document.getElementById('fh5co-main').getElementById("main_photos");

//div.innerHTML += "";

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

storage.ref().child("Dress.jpg").getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('main_img');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });