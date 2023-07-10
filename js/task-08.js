const form = document.querySelector('.login-form');


const handleSubmit = (event) => {
    event.preventDefault();
    
    const {
    elements: { email, password }
    } = event.currentTarget;
    const userData = {};
    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    } else {
        userData.Email = email.value;
        userData.Password = password.value
        console.log(userData);
        event.currentTarget.reset()
}}

form.addEventListener('submit', handleSubmit)

