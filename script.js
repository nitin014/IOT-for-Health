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
 
 
 //MenuToggler
 let toggle = document.querySelector('.toggle');
 let navigation = document.querySelector('.navigation');
 let main = document.querySelector('.main');
 
 toggle.onclick = function(){
     navigation.classList.toggle('active');
     main.classList.toggle('active');
 }
 
 
 
 
 // adding  hovered class in selected list item
 let list = document.querySelectorAll('.navigation li');
 function activeLink(){
     list.forEach((item) => 
     item.classList.remove('hovered'));
     this.classList.add('hovered');
 }
 list.forEach((item) => 
 item.addEventListener('click', activeLink));


 function logout(){
    firebase.auth().signOut().then(function (){
      //window.open("index.html", "_self")
    });
    
  }



  function loadvalues(){
    const mainBox = document.querySelector('.mainBox');
  }

  var data;

  firebase.database().ref("IOT").on("value", function(snapshot) {
    data = snapshot.val();
    dataloaded(data);
 }, function (error) {
    console.log("Error: " + error.code);
 });

// run after data loading
function dataloaded(data){
  document.getElementById("name1").innerHTML = "Name: " + data.Patient1.Name;
  document.getElementById("age1").innerHTML = "Age: " + data.Patient1.Age;
  document.getElementById("medRep1").innerHTML = "Medical Report: " + "<a id = 'demrep1' > Demo Report </a>";
  document.getElementById("demrep1").href = data.Patient1.MedicalReport;
  
  var BPMdata = [];
  var BPMtime = [];

  for (const key in data.Patient1.RHD.BPM) {
    //console.log(`${key}: ${data.Patient1.RHD.BPM[key].Ts}`);
    BPMdata.push(`${data.Patient1.RHD.BPM[key].BPM}`);
    var dd = new Date(parseInt(`${data.Patient1.RHD.BPM[key].Ts}`)).toLocaleTimeString();
    BPMtime.push(dd);
  }

  console.log(BPMdata);
  console.log(BPMtime);

  new Chart("pat1BPMchart", {
    type: "line",
    data: {
      labels: BPMtime,
      datasets: [{
        
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.5)",
        data: BPMdata,
      }]
    },
    options: {
      scales: {
          yAxes: [{
              display: true,
              stacked: true,
              ticks: {
                  min: 0, // minimum value
                  max: 150 // maximum value
              }
          }]
      }
  }
  });

  var TEMPData = [];
  var TEMPtiming = [];


  for (const key in data.Patient1.RHD.Bodytemp) {
    //console.log(`${key}: ${data.Patient1.RHD.BPM[key].Ts}`);
    var temp = `${data.Patient1.RHD.Bodytemp[key].TEMP}`;
    temp  = temp*1.8 + 32;
    TEMPData.push(temp);
    var dd = new Date(parseInt(`${data.Patient1.RHD.Bodytemp[key].Ts}`)).toLocaleTimeString();
    TEMPtiming.push(dd);
  }

  console.log(TEMPData);

  new Chart("pat1TEMPchart", {
    type: "line",
    data: {
      labels: TEMPtiming,
      datasets: [{
        
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(255,0,0,1.0)",
        borderColor: "rgba(255,0,0,0.5)",
        data: TEMPData,
      }]
    },
    options: {
      scales: {
          yAxes: [{
              display: true,
              stacked: true,
              ticks: {
                  min: 50, // minimum value
                  max: 110 // maximum value
              }
          }]
      }
  }
  });
  
  
}






