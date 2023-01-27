const customLocalStorage = {
}


function setItem(key , value) {
    customLocalStorage[key] = value;
}


function getItem(key) {
    return customLocalStorage[key];
}

setItem('name', "Anshu");
getItem('name');


