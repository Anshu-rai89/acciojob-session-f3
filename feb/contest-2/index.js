// First i need to access book name value 
// I need to access issue to value 
// get the current time and date using js 
// set the status as not returned 
// add these items in array when user clicks on issue book

const bookNameElement = document.getElementById('book-name');
const issueToElement = document.getElementById("issue-to");
const btnElement = document.getElementById('btn');
const tableBody = document.querySelector("tbody");
const books = [
];


function createTableRow (data, tableBody, id) {
    // First create a tr
    //  const tr = `
    //   <tr>
    //     <td> ${index} </td>
    //     <td> ${data.name} </td>
    //     <td> ${data.status} </td>
    //   </tr>
    //  `;

    //  tableBody.innerHtml += tr;

    const tr = document.createElement("tr");
    // create 5 ths and add data inside it

    const idTd = document.createElement("td");
    idTd.textContent = id;

    const bookNameTd = document.createElement("td");
    bookNameTd.textContent = data.name;

     const issueToTd = document.createElement("td");
     issueToTd.textContent = data.issuedTo;


    const issuedAtTd = document.createElement("td");
    issuedAtTd.textContent = data.issuedAt;

    const statusTd = document.createElement("td");
    const div = document.createElement('div');
    div.classList.add('flex')
    const button = document.createElement('button');
    const span = document.createElement('span');
    span.textContent = data.status;
    span.classList.add('red'); 
    button.textContent = 'Edit';

    div.appendChild(span);
    div.appendChild(button);

    statusTd.appendChild(div);
     
    // add these ths in tr 

    tr.appendChild(idTd);
    tr.appendChild(bookNameTd);
    tr.appendChild(issueToTd);
    tr.appendChild(issuedAtTd);
    tr.appendChild(statusTd);

    // add this tr in tbody
    tableBody.appendChild(tr);
}

/**
 * This will render all items present in the books into table
 */
function renderBooksInsideTable() {

    // while(tableBody.firstChild) {
    //     tableBody.removeChild(tableBody.firstChild)
    // }

    tableBody.innerHTML = "";

   books.map(function (book, index) {

    // This will create a row and add it inside tbody
    createTableRow(book, tableBody,index+1);
   })
}

function handleFormSubmit () {
    // read book data 
    const bookName = bookNameElement.value;
    bookNameElement.value = "";

    // read issued to data 
    const issuedTo = issueToElement.value;
    issueToElement.value = "";

    // create a book object with issueAd and default status

    if(bookName && issuedTo) {
        const book = {
          name: bookName,
          issuedTo: issuedTo,
          issuedAt: new Date().toUTCString().substring(0,12),
          status: "not returned",
        };

        books.push(book);
        renderBooksInsideTable();
    }
    else {
        alert("You are trying to enter empty details");
    }
    
}

btnElement.addEventListener('click', handleFormSubmit);