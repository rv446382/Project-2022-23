// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/register`;
const userLoginURL = `${baseServerURL}/login`;


let getTodoButton = document.getElementById("fetch-todos");
let getEmployeesButton = document.getElementById("fetch-employees");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

getEmployeesButton.addEventListener("click",()=>{
       fetch(employeeURL)
          .then((res)=>{
              return res.json();
           })
           .then((data)=>{
            console.log(data);
            mainSection.innerHTML = `
            <pre class="emp-wrapper">
            <h3>List of Employee</h3>
            <code>
            ${JSON.stringify(data,null,2)}
            </code>
            </pre>
            `
          
          
          
          
          
          //  let dataPre = document.createElement('pre');
          //  dataPre.classList.add("emp-wrapper")
          //  dataPre.append(JSON.stringify(data,null,2));
          //  mainSection.append(dataPre);





           })

})

