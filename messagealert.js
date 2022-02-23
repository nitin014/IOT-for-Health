const detailsOfPatient=document.getElementById('patient1_MedicineAlert');
const messageStatus=document.getElementById('messageStatus');

function sendAlertToTheDevice() {

    if(detailsOfPatient.children[3].value=="") {
        console.log("No input provided. Please type a msg");
        messageStatus.textContent="Please provide an input message";
        return;
    }

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
}