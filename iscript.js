var firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,
  authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxx"
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
