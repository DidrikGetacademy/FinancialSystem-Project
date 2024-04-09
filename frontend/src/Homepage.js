
function HomepageView (username) {
  const app = document.getElementById('app')
  app.innerHTML = /*HTML*/ `
    <div class="container">
    ${optionmenu(username)}
    ${optionmenu2(username)}
    ${Homepage(username)}
    </div>
      `
}

function Homepage (username) {
  return /*HTML*/ `
<div class="Username ">Logged in as ${username}<div>
<button class="Logout">Logout</button>
`
}

function optionmenu (username) {
  var user = username // Always use var, let, or const to declare variables
  return /*html*/ `
  <div class="hexagon" onmouseover="showOptions('menu1')" onmouseout="hideOptions('menu1')">
      <div class="content">
          <h1>Project</h1>
      </div>
      <div class="options" id="menu1">
          <div onclick="projectview(user)" class="hexagon element1">
              <div class="nr1">My projects</div>
          </div>
          <div onclick="DesignProject(user)" class="hexagon element2">
              <div class="nr2">Design project</div>
          </div>
          <div onclick="ForumView()" class="hexagon element3">
              <div class="nr3">Forum Project</div>
          </div>
      </div>
  </div>
  `
}
function optionmenu2 (username) {
  var user = username // Always use var, let, or const to declare variables
  return /*html*/ `
  <div class="hexagon2 container" onmouseover="showOptions('menu2')" onmouseout="hideOptions('menu2')" >
      <div class="content">
          <h1>Profile</h1>
      </div>
      <div class="options" id="menu2">
          <div onclick="UserSettings(user)" class="hexagon2 element4">
              <div class="nr4">Settings</div>
          </div>
      </div>
  </div>
  `
}
