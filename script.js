let submit = document.getElementById('getcall');
submit.addEventListener('click', storeValues);


function storeValues() {
    let name = document.getElementById('name').value.toString();
    localStorage.setItem('Name', name)

    let surname = document.getElementById('surname').value.toString();
    localStorage.setItem('Surname', surname)

    let email = document.getElementById('email').value.toString();
    localStorage.setItem('Email', email)

    let number = document.getElementById('number').value.toString();
    localStorage.setItem('Phone No.', number)

    let date = document.getElementById('date').value.toString();
    localStorage.setItem('Date', date)

    let time = document.getElementById('timeInput').value.toString();
    localStorage.setItem('Time for call', time)
    
}
