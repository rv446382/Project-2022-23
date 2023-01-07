// Write code related to Home page here 
// Write code related to Home page here 
let taskList = JSON.parse(localStorage.getItem("task-list"))||[];
  let form = document.querySelector("form");
  form.addEventListener("submit" , function(event){
    event.preventDefault();
     let Form = {
      Name : form.name.value,
      Desc : form.desc.value,
      Start : form.start.value,
      End : form.end.value,
      Priority: form.priority.value,
    };
    
   taskList.push(Form);
    //console.log(Data);
    localStorage.setItem('task-list' , JSON.stringify(taskList));
   // form.reset();
  })