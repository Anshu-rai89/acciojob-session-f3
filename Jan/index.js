const pNoSpan = document.getElementById('pNo'),
    listElement = document.getElementById('list'),
    nextBtn = document.getElementById('load_next'),
    prevBtn = document.getElementById('load_prev');

let pageNumber = 1;

const renderIssues = (issues) => {

    while(listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }

    issues.forEach(issue => {
        // First create a li issue
        const li = document.createElement('li');
        li.textContent = issue.title;

        // Second append in inside list
        listElement.appendChild(li);

        listElement.innerHTML = `
            <div>
                <li style='color: black'> ${issue.title}</li>
            </div>
        `
    })
}

const fetchIssues = async()=> {
    pNoSpan.textContent = pageNumber;
    const url  = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
    const res = await fetch(url);
    const data = await res.json();

    renderIssues(data);

}

const handleNextClick = () => {
    pageNumber+= 1 ;
    fetchIssues();
}

const prevClick = () => {
    if(pageNumber === 1) {
        alert("Page number is 1");
        return;
    }

    pageNumber-= 1;
    fetchIssues();
}

nextBtn.addEventListener('click' ,handleNextClick);
prevBtn.addEventListener('click',prevClick);
document.addEventListener('DOMContentLoaded', fetchIssues);