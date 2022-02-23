const detailsOfPatient=document.getElementById('patient1');
const messageStatus=document.getElementById('messageStatus');

function sendAlertToTheDevice() {

    //set the status of the alert object
    firebase.database().ref("IOT/Patient1/Alert/status").set(1 , function(error) {
            if(error)
            {
                var errorCode = error.code;
                var errorMMesage = error.message;
                window.alert(errorMMesage);

            } else {
                console.log("Value set for the status field as 1");
            }
    });

    //set the message body to be displayed on the device
    firebase.database().ref("IOT/Patient1/Alert/message")
        .set(`${detailsOfPatient.children[3].value}` , function(error) {
            if(error)
            {
                var errorCode = error.code;
                var errorMMesage = error.message;
                window.alert(errorMMesage);

            } else {
                messageStatus.textContent = "Message sent successfully";
                console.log("Value set for the message field successfully");
            }
    });




    // let dataDetails = {
    //     Name: detailsOfPatient.children[0].textContent,
    //     Status: 1,
    //     Message: detailsOfPatient.children[3].value
    // }
    // STATUS: detailsOfPatient.children[1].firstElementChild.textContent;


    // reference for read data from firebase
    // let data;
    // firebase.database().ref("IOT/Patient1/Alert").on("value", function(snapshot) {
    //     data = snapshot.val();
    //     //dataloaded(data);
    //  }, function (error) {
    //     console.log("Error: " + error.code);
    //  });

    //to set
    // var userIN = userRef.child(a);
    //   userIN.set({
    //     "status": dat1,
    //   }, function(error)
    //   {
    //         if(error)
    //         {
    //           var errorCode = error.code;
    //           var errorMMesage = error.message;
    //               window.alert(errorMMesage);
    //         }
    //   });


    
}