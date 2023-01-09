let user = null;
const parentElement = document.getElementById('parent');

const createUser = (userData)=> {
    const userHtml = `
        <div style ="display: flex">
            <div>
                User Name
            </div>
            <div>
                ${userData.name.first} &nbsp; ${userData.name.last}
            </div>
        </div>
        <div>
            <img  height = 100 width = 100 src=${userData.picture.thumbnail}>
        </div>
    `; 
    parentElement.innerHTML = userHtml;
}
const fetchUser = async () => {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    createUser(data.results[0]);
    user = data.results[0];
}

document.addEventListener("DOMContentLoaded", fetchUser);