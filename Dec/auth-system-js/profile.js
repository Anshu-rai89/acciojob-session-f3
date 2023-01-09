const user = JSON.parse(localStorage.getItem("user")),
  profileContainer = document.querySelector(".container");

function redirectUserToHomePage () {
    localStorage.removeItem('user');
    window.open("./signup.html", "_self");
    return;
}

const isUserLoggedIn = () => {
  if (user?.access_token) {
    return true;
  }

  return false;
};

const renderUserDataOnUi = (user) => {
    const profileLineItems = [
      {
        label: "Full Name :",
        data: user.name,
      },
      {
        label: "Email :",
        data: user.email,
      }
    ];

    profileLineItems.map(item => {
        // create a div 

        const div = document.createElement('div'); 

        // create a span element for label 

        const spanLabel = document.createElement('span'),
            spanInfo = document.createElement('span');

        spanLabel.textContent = item.label;
        spanInfo.textContent = item.data;
       

        div.appendChild(spanLabel);
        div.appendChild(spanInfo);

        console.log("User", user,profileContainer);
        profileContainer.appendChild(div);
        // create a span element for value
    })

     const logoutButton = document.createElement("button");
     logoutButton.id = 'logout';
     logoutButton.onclick = redirectUserToHomePage;
     logoutButton.textContent = 'Logout';
     profileContainer.appendChild(logoutButton);
  // We will users details on UI
  console.log("User",user);
};

// Check if user is logged in or not

document.addEventListener("DOMContentLoaded", () => {
    console.log("Check for user",isUserLoggedIn());
  if (isUserLoggedIn()) {
    renderUserDataOnUi(user);
  }
  else {
   redirectUserToHomePage();
  }
});
