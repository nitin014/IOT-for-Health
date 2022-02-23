var firebaseConfig = {
    apiKey: "AIzaSyDB43wG01ov1Dcw8gYZ3NIWDT9qTjSOi44",
  authDomain: "webserver-d7a49.firebaseapp.com",
  databaseURL: "https://webserver-d7a49.firebaseio.com",
  projectId: "webserver-d7a49",
  storageBucket: "webserver-d7a49.appspot.com",
  messagingSenderId: "362490308654",
  appId: "1:362490308654:web:3ae23f71793fe0ea3e97bf",
  measurementId: "G-RZX14Y2DC6"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  function login(){
    var email = document.getElementById("emid").value;
    var password =  document.getElementById("passwd").value;
    if(email == "" && password == "")
    {
        window.alert("please fill all the parameters");
    }
    else 
    {
       var result =  firebase.auth().signInWithEmailAndPassword(email,password);
       
       result.catch(function(error)
       {
         window.alert("Your Credentials are wrong");
         var errorcode = error.code;
         var erroMessage = error.message;
         window.alert(errorcode, errorMessage);
       });
    }
}
