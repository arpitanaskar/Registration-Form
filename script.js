let submit = document.getElementById('getcall');
submit.addEventListener('click', storeValues);

window.addEventListener('DOMContentLoaded', fetchDataAndDisplay);

function fetchDataAndDisplay() {
    axios.get("https://crudcrud.com/api/70b0a1fdb7b941eb957148f637dc2bed/appointmentData")
        .then(response => {
            console.log(response);

            // Clear the existing list before displaying the updated data
            ol.innerHTML = "";
            
            for (let i = 0; i < response.data.length; i++) {
                const itemId = response.data[i]._id;
                console.log(`item ${i+1} ID: ${itemId}`);
                showResponse(response.data[i], itemId);
            }
        })
        .catch(err => console.log(err));
}


let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let number = document.getElementById('number');
let date = document.getElementById('date');
let time = document.getElementById('timeInput')



function storeValues() {
    var obj = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        date: document.getElementById('date').value,
        time: document.getElementById('timeInput').value
    }

    const itemId = submit.getAttribute('data-id');
    if (itemId) {
        // Edit existing user
        axios.put(`https://crudcrud.com/api/70b0a1fdb7b941eb957148f637dc2bed/appointmentData/${itemId}`, obj)
            .then(response => {
                console.log('User details updated:', response);
                fetchDataAndDisplay();
                clearInputFields();
            })
            .catch(err => console.log(err))
            .finally(() => {
                submit.removeAttribute('data-id');  // Reset data-id after the update
            });
    } else {
        // Create a new user
        axios.post("https://crudcrud.com/api/70b0a1fdb7b941eb957148f637dc2bed/appointmentData", obj)
            .then((response) => {
                showResponse(response.data, null);
                clearInputFields();
                console.log(response);
            })
            .catch((err) => console.log(err));
    }
}

function clearInputFields() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('date').value = '';
    document.getElementById('timeInput').value = '';
}


function showResponse(obj, itemId) {
    let li = document.createElement('li')
    li.className = "list-group-item"

    
    
    let text = document.createTextNode(" " + obj.name + " " + obj.surname + " ---> " + "Phone No. : " + obj.number + " ---> " + " ---> " + "Date : " + obj.date + " ---> " + "Time : " + obj.time);
    let email = document.createTextNode(obj.email);
    li.appendChild(email);
    li.appendChild(text);
    ol.appendChild(li);


    //----DELETE BUTTON----//
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', itemId || obj._id);
    deleteButton.id = 'deleteButton'
    deleteButton.className = "delete"
    deleteButton.textContent = "Delete"
    li.appendChild(deleteButton)
    deleteButton.addEventListener('click', function() {
        deleteItem(this)
    });


   //----EDIT BUTTON----//
   let editButton = document.createElement('button');
   editButton.id = "edit"
   editButton.innerHTML = "&#9998;";  // Edit icon
   editButton.className = "edit-button";
   li.appendChild(editButton);

   // Attach an event listener for the edit button
   editButton.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent propagation to the parent elements
    populateFormForEdit(obj);
    submit.setAttribute('data-id', itemId || obj._id);
});
}


let ol = document.createElement('ol');
ol.className = "list-group list-group-numbered"
       
let div = document.createElement('div');

let body = document.body;
body.appendChild(div)
div.appendChild(ol);

function deleteItem(delBtn) {
    const itemId = delBtn.getAttribute('data-id');
    console.log(itemId);
    axios.delete(`https://crudcrud.com/api/70b0a1fdb7b941eb957148f637dc2bed/appointmentData/${itemId}`)
        .then((response) => {
            // Handle success, you can remove the item from the DOM if needed
            let deleteItem = delBtn.parentElement;
            console.log(response)
            ol.removeChild(deleteItem);
        })
        .catch((err) => console.log(err));
}

function populateFormForEdit(obj) {
    // Populate the main registration form with user details for editing
    document.getElementById('name').value = obj.name;
    document.getElementById('surname').value = obj.surname;
    document.getElementById('email').value = obj.email;
    document.getElementById('number').value = obj.number;
    document.getElementById('date').value = obj.date;
    document.getElementById('timeInput').value = obj.time;
}



// function editForm() {
//     var obj = {
//         name: document.getElementById('name').value,
//         surname: document.getElementById('surname').value,
//         email: document.getElementById('email').value,
//         number: document.getElementById('number').value,
//         date: document.getElementById('date').value,
//         time: document.getElementById('timeInput').value
//     }


//     name.textContent = obj.name;
//     surname.textContent = obj.surname;
//     email.textContent = obj.email;
//     number.textContent = obj.number;
//     date.textContent = obj.number;
//     time.textContent = obj.time;

//     deleteItem();
// }