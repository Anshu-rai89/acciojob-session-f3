
const issueContainer = document.getElementById("container"),
    nextButton = document.getElementById('next');

const renderIssue = (issue) => {
    let html = issueContainer.innerHTML;
    const issueElement = `
        <div class='issue'>
            <svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
        </div>
        <div>
            <div>
            <h3>${issue.title}</h3>
            </div>

            <div>
                #${issue.number} ${issue.status} ${issue.user.type}
            </div>
        </div>
    `;

    html+= issueElement;
    issueContainer.innerHTML = html;
}

const fetchIssue = async() => {
    const pageNumberHere = 1;
    const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5.`;
    const res = await fetch(url);
    const data = await res.json();

    console.log("data",data);
    data.forEach(issue=> renderIssue(issue));
}


document.addEventListener('DOMContentLoaded',fetchIssue);
