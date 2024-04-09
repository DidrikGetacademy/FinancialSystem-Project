//api request til database funksjon
function LoginUser(){
const usernameInput = document.getElementById("username").value;
const passwordinput = document.getElementById("password").value;


const userData = {
Username: usernameInput,
Password: passwordinput,
};

fetch("https://financialsystemappservice.azurewebsites.net/api/User/Login",{
method: "POST",
headers:{
"Content-Type": "application/json",
},
body: JSON.stringify(userData),
}).then((response) => {
if(response.ok){
  HomepageView(userData.Username);
  localStorage.setItem('username', userData.Username);
}else if(response.status === 409){
alert("Username or password is wrong")
}else {
alert("Login Failed")
}
});
} 