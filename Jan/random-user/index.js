
/**
 *  {
 *      info: page: 1 ,results: 1 ,seed: ,"80bcc66d0d0f0abd",
 *      results : [
 * {
 *          
 * }]

 *  }
 */


let user = {};
const imgElement = document.getElementById("img"),
  nameElement = document.getElementById("name"),
  additionalInfo = document.getElementById("add-info"),
  infoButtons = Array.from(document.querySelectorAll("[data-id]")),
  fetchBtn = document.getElementById("getUser");

const renderUserBasicDetails = (user) => {

   nameElement.innerHTML = '';
   imgElement.innerHTML = '';
    const nameSpan= document.createElement('span');
    const img = document.createElement('img');

    // name: { title: 'Miss', first: 'Adriza', last: 'Nascimento'}
    nameSpan.textContent = user.name.first + " " + user.name.last;

    img.src = user.picture.large;
    img.classList.add('img')

    imgElement.appendChild(img);

    nameElement.appendChild(nameSpan);
}

const fetchUser = async () => {
    const resp = await fetch("https://randomuser.me/api/");
    const data = await resp.json();
    user = data.results[0];
    console.log("User",user);
    renderUserBasicDetails(user);
} 

const createInfoELement = (info) => {

    while(additionalInfo.firstChild) {
        additionalInfo.removeChild(additionalInfo.firstChild);
    }

    // create an span of label 
    // span with value 

    const label = document.createElement('span');
    const infoData = document.createElement('span');

    label.textContent = info.label;
    infoData.textContent = info.data;

    // add it inside additional info

    additionalInfo.appendChild(label);
    additionalInfo.appendChild(infoData);
}

const handleInfoButtonClick = (event) => {
    const info = [
        {
            id: 'age',
            label: "Age",
            data: user.dob.age
        },
        {
            id: 'phone',
            label: "Phone",
            data: user.phone
        },
        {  id: 'email',
            label: "email",
            data: user.email
        }];

    const id = event.target.dataset.id;
    const data = info.find((item) => item.id === id);
    
    createInfoELement(data);
}

infoButtons.map((btn) => btn.addEventListener("click", handleInfoButtonClick));
fetchBtn.addEventListener("click", fetchUser);
document.addEventListener('DOMContentLoaded',fetchUser);