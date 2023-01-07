// Write code related to dashboard page here
// Write code related to dashboard page here


let parent = document.querySelector('tbody');
let Totaltask = document.querySelector('#task-count');

 let taskList = JSON.parse(localStorage.getItem("task-list"))||[]; 
console.log(taskList);

function displayData (data){
    parent.textContent = null;
    Totaltask.textContent = data.length;
    data.forEach(function(ele,i) {
       
          //parent.innerHTML = "";
         let tr = document.createElement("tr");
       
         let name = document.createElement("td");
          name.textContent = ele.Name;
       
         let desc = document.createElement("td");
         desc.textContent = ele.Desc;
       
         let start = document.createElement("td");
         start.textContent = ele.Start;
       
         let end = document.createElement("td");
         end.textContent = ele.End;
       
       
         let priority = document.createElement("td");
         priority.textContent = ele.Priority;
       
          let add = document.createElement("tr");
          add.textContent = "Add";
          add.addEventListener("click" , function(){
            taskList.splice(i,1);
            localStorage.setItem("task-list",JSON.stringify(taskList));
            displayData(taskList);

           let priorityList = JSON.parse(localStorage.getItem("task-list"))||[];
             priorityList.push(ele);
            localStorage.setItem("priority-list",JSON.stringify(priorityList))   
          })
         tr.append(name,desc,start,end,priority,add);
         parent.append(tr);
        });
       
}
displayData(taskList);

let selectedpriority = document.querySelector("#filter");

selectedpriority.addEventListener("change" , function(event){
    event.preventDefault();
    let filter = event.target.value;
    if(filter==""){
        displayData(taskList);
       
    }
     else{
       // console.log("fuck")
      let filteredTasks = taskList.filter(function(el){
        return el.priority === filter;
       
      })
      displayData(filteredTasks);
    }
   
})



 