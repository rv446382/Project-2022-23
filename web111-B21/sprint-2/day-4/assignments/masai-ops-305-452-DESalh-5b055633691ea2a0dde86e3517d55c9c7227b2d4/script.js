//let loginBtn = document.querySelector("div>button:nth-child(2)");
  //let signUpBtn = document.querySelector("div>button:nth-child(1)");
  let signIn = document.querySelector("form");
  let signUp = document.querySelector("form");

  // we need to catch the users data file from localstorage.
  let users = JSON.parse(localStorage.getItem("usersData")) || [];

  // by default We want the signIn form to be hidden.
  //signIn.style.display = "none";

 // loginBtn.addEventListener("click", function () {
    // signUp.style.display = "none";
    // // we can use any display property to show the element in place of block (grid, flex,inline, block)
    // // generally we use block because we don't want to change our display style.
    // signIn.style.display = "block";
    // //    we change the document title using title method
    // document.title = "Sign In";
  //});
//   signUpBtn.addEventListener("click", function () {
//     signIn.style.display = "none";
//     signUp.style.display = "block";
//     document.title = "Sign Up";
//   });

  signUp.addEventListener("submit", function (event) {
    // we preventDefault() to stop page from refreshing
    event.preventDefault();
    // we check whether the email is in our database or not
    let count = 0;
    users.forEach(function (el) {
      if (el.email === signUp.email.value) {
        count++;
      }
    });
    // if we found a user we alert
    if (count > 0) {
      alert("user already registered!");
    }
    // if users not found || email not found 
    else {
        // we are checking if both passwords are same or not.
      if (signUp.password.value != signUp.password.value) {
        alert("passwords do not match!");
      } else {
        // we create an obj to store data of the user
        let user = {
          name: signUp.name.value,
          email: signUp.email.value,
          password: signUp.password.value,
        };
        // we push this object into users array
        users.push(user);
        // we store the array in localstorage
        localStorage.setItem("usersData", JSON.stringify(users));
        alert("Sign Up successful!");
       
        // to reset all the input fields of a form we can use reset() method
        signUp.reset();

        window.location.assign("./signin.html");
      }
    }
  });

  signIn.addEventListener("submit", function (event) {
    event.preventDefault();
    let count = 0;
    // we are creating a temp var to store user who is trying to login
    let temp;
    // we are checking whether the user is registered or not
    users.forEach(function (el) {
      if (el.email === signIn.email1.value) {
        count++;
        // when count is incremented or we found user, we are storing the user data;
        temp = el;
        // we are storing the user in our local storage so that we can access user data from different pages
        localStorage.setItem('loggedUser',JSON.stringify(el));
      }
    });
    // if we didn't find any user we alert
    if (count == 0) {
      alert("user not registered!");
    }
    // if we find user we check the password
     else {
        // we check the temp password with form password
      if (temp.password != signIn.password1.value) {
        alert("Wrong Credentials");
      } else {
        alert("Sign in Successful");
        // we can use n number of methods to change the page. here we are using assign() method
        // window.location.assign('url')
       // window.location.assign("./index.html");
      }
    }
  });