let submit = document.getElementById('getcall');
submit.addEventListener('click', storeValues);


// function storeValues() {
//     let name = document.getElementById('name').value.toString();
//     localStorage.setItem('Name', name)

//     let surname = document.getElementById('surname').value.toString();
//     localStorage.setItem('Surname', surname)

//     let email = document.getElementById('email').value.toString();
//     localStorage.setItem('Email', email)

//     let number = document.getElementById('number').value.toString();
//     localStorage.setItem('Phone No.', number)

//     let date = document.getElementById('date').value.toString();
//     localStorage.setItem('Date', date)

//     let time = document.getElementById('timeInput').value.toString();
//     localStorage.setItem('Time for call', time)

// }

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
    axios.post("https://crudcrud.com/api/0dc9a80fd1824970b846b489a02d5955/appointmentData", obj)
        .then((response) => {
            showResponse(response.data)
            console.log(response)
        })
        .catch((err)=> console.log(err))

    //Delete Button

    function showResponse(obj) {
        let li = document.createElement('li')
    li.className = "list-group-item"

    let text = document.createTextNode(" " + obj.name + " " + obj.surname + " ---> " + "Phone No. : " + obj.number + " ---> " + " ---> " + "Date : " + obj.date + " ---> " + "Time : " + obj.time);
    let email = document.createTextNode(obj.email);
    li.appendChild(email);
    li.appendChild(text);
    ol.appendChild(li);
}

    let deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton'
    deleteButton.textContent = "Delete"
    li.appendChild(deleteButton)

    deleteButton.addEventListener('click', deleteItem);


    //Edit Button

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

function deleteItem() {
    e.preventDefault();
    let email = ol.firstChild.firstChild.textContent; // Get the email value
    localStorage.removeItem(email);

    let item = deleteButton.parentElement;
    ol.removeChild(item);
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


