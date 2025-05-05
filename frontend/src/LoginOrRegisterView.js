view()
function view () {
  const app = document.getElementById('app')
  app.innerHTML = /*HTML*/ `
    <div class="container">${HeadTitle()}<div>
    <div class="button-container">${FrontPageButtons()}<div>
    </div>
    `
}

function FrontPageButtons () {
  return /*HTML*/ `
    <button style="cursor: pointer;"  onclick="RegisterView()">Register</button>
    <button style="cursor: pointer;"  onclick="LoginView()">Login</button>
    `
}

function HeadTitle() {
  return /*HTML*/ `
    <div class="header-box">
      <div class="header-title">Financial System</div>
      <div class="header-subtitle">sign in or register</div>
    </div>
  `;
}
