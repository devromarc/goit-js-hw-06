// Form submission (form.login-form) must be processed on the submit event.
// The page must not reload when the form is submitted.
// If the form has empty fields, display alert saying that all fields must be filled in.
// As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the elements property to access form elements.
// Display the object with the entered data in the console and clear the values of the form fields using the reset method.

const form = document.querySelector('form.login-form');

const onSubmitForm = (event) => {
    event.preventDefault();
    
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const formData = {email,password};

    if(email === '' || password=== ''){
        alert("All Fields Must Be Filled")
    }else{
        console.log(formData)
        form.reset();
    }

}

form.addEventListener('submit', onSubmitForm);