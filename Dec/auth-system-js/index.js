
const submitBtn = document.getElementById("submit"),
    errorElement = document.getElementById('error');

const getInputValueById = (id) => {
    return document.getElementById(id).value;
}

const handleSubmitBtnClick = () => {
    errorElement.textContent = '';
  const inputItemsIds = ["name", "email", "password", "confirm_password"];
  const user = {};
  let isError = false;

  /**
   * const name = getInputValueById('name')
   * const email = getInputValueById('email')
   */
  inputItemsIds.forEach((id) => {
    const userData = getInputValueById(id);

    // Userdata contains some value -> if block will evaluate as true
    if (!userData) {  
      isError = true;
      return ;
    }
    // user['name'] = data
    user[id] = userData;
  });

  

  if (isError ) {
    errorElement.textContent = "Error : All the fields are mandatory";
    return;
  }

  if (user.password !== user.confirm_password) {
    errorElement.textContent = "Error : Password & Confirm password do not match";
    return ;
  }
    // We have to create access token and append it on user 
      const access_token = (Math.random() + 1).toString(36).substring(1);

      user.access_token = access_token;

      console.log("User",user);
    // we have to store our user in local storage 
      
       localStorage.setItem('user',JSON.stringify(user));  // ['object' object]
    // we have to redirect user to profile page 
       // window.location.href= ''
        window.open('./profile.html','_self')
}


submitBtn.addEventListener('click',handleSubmitBtnClick);
