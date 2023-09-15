let submit = document.getElementById('getcall');
submit.addEventListener('click', storeValues);

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/ee2059ca422a4e1bb55abd117dc5b833/appointmentData")
        .then(response => {
            console.log(response)

            for (let i = 0; i < response.data.length; i++) {
                const itemId = response.data[i]._id;
                console.log(`item ${i+1} ID: ${itemId}`)

                showResponse(response.data[i], itemId)
            }
        }
        )
        .catch(err => console.log(err))
})


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

    // let obj_serialized = JSON.stringify(obj);
    // localStorage.setItem(document.getElementById('email').value.toString(), obj_serialized);
    axios.post("https://crudcrud.com/api/ee2059ca422a4e1bb55abd117dc5b833/appointmentData", obj)
        .then((response) => {
            showResponse(response.data, null)
            console.log(response)
        })
        .catch((err) => console.log(err))
    
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
    editButton.textContent = "Edit";
    li.appendChild(editButton);

    editButton.addEventListener('click', editForm);
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
    axios.delete(`https://crudcrud.com/api/ee2059ca422a4e1bb55abd117dc5b833/appointmentData/${itemId}`)
        .then((response) => {
            // Handle success, you can remove the item from the DOM if needed
            let deleteItem = delBtn.parentElement;
            console.log(response)
            ol.removeChild(deleteItem);
        })
        .catch((err) => console.log(err));
}


function editForm() {
    var obj = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        date: document.getElementById('date').value,
        time: document.getElementById('timeInput').value
    }


    name.textContent = obj.name;
    surname.textContent = obj.surname;
    email.textContent = obj.email;
    number.textContent = obj.number;
    date.textContent = obj.number;
    time.textContent = obj.time;

    deleteItem();
}