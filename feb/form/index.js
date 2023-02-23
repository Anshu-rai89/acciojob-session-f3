const formElement = document.querySelector('form');
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector("#email");
const phoneNumberElement = document.querySelector("#phoneNumber");
const passwordElement = document.querySelector("#password");
const confirmPasswordElement = document.querySelector("#confirmPassword");
const genderElement = document.querySelector("#gender");
const submitBtn = document.querySelector("#submit");
const errorDiv = document.querySelector('#error');
const headingElement = document.querySelector("#heading");

//we need to handle the form submit event 
function handleFormSubmit(event) {
    event.preventDefault();

    const name = nameElement.value;
    const phoneNumber = phoneNumberElement.value;
    const gender = genderElement.value;
    const password = passwordElement.value;
    const confirmPassword = confirmPasswordElement.value;
    const email = emailElement.value;
    const alphaNumberRegex = /^[a-z0-9]+$/i;
    const matchFound = name.match(alphaNumberRegex) ? name.match(alphaNumberRegex) : [];
     if (matchFound.length == 0) {
       errorDiv.textContent = "Name is not alphanumeric";
     } else if (email.includes("@") == false || email.includes('.') == false) {
       errorDiv.textContent = "Email must contain @";
     } 
     else if (phoneNumber.length != 10) {
        errorDiv.textContent = "Phone number is invalid";
     }
     else if (password.length < 6) {
       errorDiv.textContent = "Password must contain atleast 6 letters";
     } 
     else if (confirmPassword != password) {
         errorDiv.textContent = "Password and confirm password do not match";
     }
     else {
       errorDiv.textContent = "";
       // This is a valid form now
       // First hide the form
       formElement.style.display = "none";
       // Print Hello username
       const [userName] = email.split("@");

       headingElement.textContent = "Hello " + userName;

       //JS Object -> JSON 
       const userObject = {
         name: name,
         password: password,
         phone_number: phoneNumber,
         email: email,
         gender: gender
       };

       console.log(userObject);

       const userObjectInString = JSON.stringify(userObject);
       console.log(userObjectInString);
     }
}

formElement.addEventListener('submit', handleFormSubmit);