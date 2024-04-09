username = 'defi';
const username = localStorage.getItem('username');
function projectview(Username) {
    ProjectList(Username); 
    const app = document.getElementById("app");
    app.innerHTML = /*HTML*/ `
        <div class="container">
        <img src="/images/back.png" class="GoBackimg" onclick="HomepageView(username)">
        <div>${MyProjects()}</div>
        </div>
    `;

}

function ProjectList(Username) {
    fetch("https://financialsystemappservice.azurewebsites.net/api/User/projectList", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Username),
    })
    console.log(Username)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        return response.json();
    })
    .then((data) => {
        const projectHtml = Projects(data);
        document.getElementById("projectContainer").innerHTML = projectHtml; 
    })
    .catch((error) => {
        console.error('Error fetching projects:', error);
    });
}

function MyProjects(){
    return /*html*/ `
        <div id="projectContainer" class="ProjectContainer"></div>
         <div id="projectDescription"></div>
        `;}


function Projects(data) {
    if (!data) return ""; 
    var projectList = data.map(project => /*HTML*/ `
        <div class="ProjectBox">
            <h2 class="ProjectTitle" onclick="Description('${project.title}', '${project.description}')">${project.title}</h2>
        </div>`).join('');

        
    return /*HTML*/ `
        <div>
            <h3 class="MyProjectTitle">My Projects</h3>${projectList}</div>
            `;
}


function Description(title, description) {
  const projectbox = document.getElementById("projectDescription");
  projectbox.innerHTML = `
  <div class="ProjectBox2">
  <h2>${title}</h2>
  <ul>${description}</ul>
  </div>`;
}








  