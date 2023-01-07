// Write code related to dashboard page here


let parent = document.querySelector('tbody');
let Totaltask = document.querySelector('#task-count');

 let taskList = JSON.parse(localStorage.getItem("task-list"))||[]; 
console.log(taskList);

function displayData (data){
    parent.textContent = null;
    Totaltask.textContent = data.length;
    data.forEach(function(ele) {
       
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
       
          let add = document.createElement("td");
          add.textContent = "Add";
          //add.addEventListener()
         tr.append(name,desc,start,end,priority,add);
         parent.append(tr);
        });
       
}
displayData(taskList)

 