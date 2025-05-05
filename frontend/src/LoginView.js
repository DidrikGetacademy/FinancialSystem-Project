function LoginView() {
    const app = document.getElementById("app");
    app.innerHTML = /*HTML*/ `
    <div class="container">
    <img src="/images/back.png" class="GoBackimg" onclick="view()"><img>
    ${LoginMenu()}
    </div>
      `;
  }


  function LoginMenu() {
return /*html*/ `
<div class="container">
  <div class="background-box">
    <h1>Login</h1>
    <label>Username:</label><br>
    <input id="username" /><br><br>
    <label>Password:</label><br>
    <input type="password" id="password" /><br><br>
    <button onclick="LoginUser()">Login</button>
  </div>
</div>
`;
}






