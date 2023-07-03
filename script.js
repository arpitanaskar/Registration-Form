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


// let name = document.getElementById('name').value.toString();
// let surname = document.getElementById('surname').value.toString();
// let email = document.getElementById('email').value.toString();
// let number = document.getElementById('number').value.toString();
// let date = document.getElementById('date').value.toString();
// let time = document.getElementById('timeInput').value.toString()


function storeValues() {
    let obj = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        date: document.getElementById('date').value,
        time: document.getElementById('timeInput').value
    }

    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem(document.getElementById('email').value.toString(), obj_serialized);

    

    let li = document.createElement('li')
    li.className = "list-group-item"
    li.textContent = obj.name + " " + obj.surname + " ---> " + "Phone No. : " + obj.number + " ---> " + "Email Id : " + obj.email + " ---> " + "Date : " + obj.date + " ---> " + "Time : " + obj.time;

    ol.appendChild(li);
    
}

let div = document.createElement('div');
let ol = document.createElement('ol');
    ol.className = "list-group list-group-numbered"
let body = document.body;
body.appendChild(div)
div.appendChild(ol)
