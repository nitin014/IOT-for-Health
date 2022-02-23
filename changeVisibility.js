const home = document.getElementById('home');
const medicineAlert = document.getElementById('medicineAlert');
const reminder = document.getElementById('reminder');
const contact = document.getElementById('contact');


function changeVisibilityFor(navigationField) {

    console.log(`Called changedVisibility for ${navigationField}`);
    if(navigationField == "medicineAlert") {
        home.style.display = "none";
        medicineAlert.style.display = "block";
        reminder.style.display = "none";
        contact.style.display = "none";
    }
    else if(navigationField == "home") {
        home.style.display = "block";
        medicineAlert.style.display = "none";
        reminder.style.display = "none";
        contact.style.display = "none";
    }
    else if(navigationField == "reminder") {
        home.style.display = "none";
        medicineAlert.style.display = "none";
        reminder.style.display = "block";
        contact.style.display = "none";
    }
    else if(navigationField == "contact") {
        home.style.display = "none";
        medicineAlert.style.display = "none";
        reminder.style.display = "none";
        contact.style.display = "block";
    }

}