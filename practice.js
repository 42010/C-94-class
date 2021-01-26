//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyASXn3qMYascMv-T7DI4mX_zPRvYZ0-c3w",
    authDomain: "kwitter-practice-bde08.firebaseapp.com",
    databaseURL: "https://kwitter-practice-bde08-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-bde08",
    storageBucket: "kwitter-practice-bde08.appspot.com",
    messagingSenderId: "737090073592",
    appId: "1:737090073592:web:895ea7a96922a30e32dc0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        jyoti_maam : "Tejash"
    });
}