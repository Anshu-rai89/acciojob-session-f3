
const submitBtn = document.getElementById("submit"),
    errorElement = document.getElementById('error');
const getInputValueById = (id) => {
    return document.getElementById(id).value;
}

const handleSubmitBtnClick = () => {
    const inputItems = ['name','email','password','confirm-password'];
    const user = {};
    let error = false;
    inputItems.map((item) => {
        const data = getInputValueById(item);

        if(!data) {
            errorElement.textContent = "Error : All the fields are mandatory";
            error = true;
            return '';
        }
        user[item] = data;
    })

    console.log("USer",user);
    if(error) return ;

    window.open('./profile.html','_self')
}
submitBtn.addEventListener("click", handleSubmitBtnClick);
