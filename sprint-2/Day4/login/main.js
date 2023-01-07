function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass= document.getElementById('password').value;
    var user = {
        email:email,
        username:username,
        password:pass,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    console.log("user added");

}

function loginfun(e){
    event.preventDefault();
    // console.log(123);

   
    var username = document.getElementById('username').value;
    var pass= document.getElementById('password').value;
    var result = document.getElementById('result');
    

    var user=localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
                result.innerHTML = "wrong username";
            }
            else if( username == data.username && pass == data.password){
                result.innerHTML = "logged in successfully" 
                
        
            } else{
                result.innerHTML = "wrong password";
            }
}