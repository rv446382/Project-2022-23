// Write code for the Progress page here 
// Write code related to dashboard page here
// Write code related to dashboard page here


 let parent = document.querySelector('tbody');
//let Totaltask = document.querySelector('#task-count');

 let priorityList = JSON.parse(localStorage.getItem("priority-list"))||[]; 
//console.log(taskList);

 function displayData (data){
    parent.textContent = null;
    //Totaltask.textContent = data.length;
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
          add.textContent = "Add to Done";
          add.addEventListener("click" , function(){
            priorityList.splice(i,1);
            localStorage.setItem("task-list",JSON.stringify(priorityList));
            displayData(priorityList);

           let doneList = JSON.parse(localStorage.getItem("done-list"))||[];
             doneList.push(ele);
            localStorage.setItem("done-list",JSON.stringify(doneList))   
          })
         tr.append(name,desc,start,end,priority,add);
         parent.append(tr);
        });
       
}
displayData(priorityList);



 