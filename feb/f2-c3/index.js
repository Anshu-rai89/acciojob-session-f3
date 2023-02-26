const addNewButton = document.getElementById("add-new");
const tbody = document.querySelector('tbody');
const students = [];


// This will render all student details on table
function renderStudentsDetail (){
    // we need to delete previos render result
    
    tbody.innerHTML = "";

    students.forEach(student => {
        // First i need to create a row 
        const tr = document.createElement('tr');

        // i need to create 6 tds 
        const tds = [
          {
            elementName: "span",
            text: student.id,
          },
          {
            elementName: "span",
            text: student.student_name,
          },
          {
            elementName: "span",
            text: student.student_roll,
          },
          {
            elementName: "span",
            text: student.subject,
          },
          {
            elementName: "span",
            text: student.marks,
          },
          {
            elementName: "span",
            text: student.markedBy,
          },
        ];

        tds.forEach(data => createTd(data,tr));
        // add these tds into row

        tbody.appendChild(tr);
        // add this row inside tbody
    })
}
function saveData() {
    const name = document.querySelector('#name').value;
    const rollNo = document.querySelector("#rollNumber").value;
    const subject = document.querySelector("#subject").value;
    const marks = document.querySelector("#marks").value;
    const evaluatedBy = document.querySelector("#markedBy").value;
    const rowId = document.querySelector("#rowId").textContent;
    const saveTd = document.querySelector("#save-td");

    if(name && rollNo && subject && marks && evaluatedBy) {
        const student = {
          id: rowId,
          student_name: name,
          student_roll: rollNo,
          subject,
          marks,
          markedBy: evaluatedBy,
        };

        students.push(student);
        saveTd.style.display = 'none';
        renderStudentsDetail()
    }
    else {
        alert("Some Fields are empty");
    }
}

/**
 * {
      elementName: "input",
      id: "name",
      text: "",
    }
**/
function createTd(data, tr) {
    // first create a td;
    const td = document.createElement('td');
    const element = document.createElement(data.elementName); // span
    element.id = data.id;
    element.type = data.type;
    
    if (data.elementName == "button") {
      element.textContent = data.text;
      element.onclick = data.onClick;
    }

    if (data.elementName == "span") {
      element.textContent = data.text;
    }

    td.appendChild(element);
    tr.appendChild(td);
}

function addNewRow(){
    const saveTd = document.querySelector("#save-td");
    saveTd.style.display= 'block';
  // create a tr
  const tr = document.createElement("tr");
  // we need to create 7 cells tds

  const tds = [
    {
      elementName: "span",
      id: "rowId",
      text: students.length + 1,
    },
    {
      elementName: "input",
      id: "name",
      type: "text"
    },
    {
      elementName: "input",
      id: "rollNumber",
      type: "number"
    },
    {
      elementName: "input",
      id: "subject",
      type : "text"
    },
    {
      elementName: "input",
      id: "marks",
      type: "number"
    },
    {
      elementName: "input",
      id: "markedBy",
      type: "email"
    },
    {
      elementName: "button",
      onClick: saveData,
      text: "Save",
      id: "save",
    },
  ];

  // we need to push all these tds in tr
  tds.forEach((data) => {
    createTd(data, tr);
  });

  tbody.appendChild(tr);
  // we have to add these tr in tbody
}


addNewButton.addEventListener("click", addNewRow);