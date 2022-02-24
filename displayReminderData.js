let myReminder = [];
const saveDataBtn = document.getElementById('saveReminderDatabtn"');
const displayReminderData = document.getElementById('displayreminderDATA');


function ReminderData(ID , Name , Remarks) {
    this.ID = ID;
    this.Name = Name;
    this.Remarks = Remarks;

    // this.info = function() {
    //     return `${ID}  ${Name} , ${Remarks}`;
    // }
}

function saveReminderData() {
    const _id = document.getElementById('reminderID').value;
    const _name = document.getElementById('reminderNAME').value;
    const _remarks = document.getElementById('reminderREMARKS').value;

    addDataToReminder(_id,_name,_remarks);
}



function addDataToReminder(Id,Name,remarks) {

    const reminderData = new ReminderData(Id,Name,remarks) ;
    myReminder.push(reminderData);

    displayDataInReminder(reminderData);
    
}

function displayDataInReminder(reminderData) {
    
        const reminderCard = document.createElement('div');
        const innerCard = document.createElement('div');

        reminderCard.classList.add('card');
        reminderCard.classList.add('shortCard');
        innerCard.classList.add('classA');

        innerCard.innerHTML = `<h3>ID: ${reminderData.ID} </h3>
                                <h3>Name: ${reminderData.Name} </h3>
                                <h3>Remarks: ${reminderData.Remarks}</h3>`;

        reminderCard.appendChild(innerCard);       
        displayReminderData.appendChild(reminderCard);
    
}