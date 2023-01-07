// Write code related to Done page here

let parent = document.querySelector('tbody');
//let Totaltask = document.querySelector('#task-count');

let doneList = JSON.parse(localStorage.getItem("done-list")) || [];
//console.log(taskList);

function displayData(data) {
    parent.textContent = null;
    //Totaltask.textContent = data.length;
    data.forEach(function (ele) {

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

        // let add = document.createElement("td");
        // add.textContent = "Add";
        // add.addEventListener("click", function () {
        //     taskList.splice(i, 1);
        //     localStorage.setItem("done-list", JSON.stringify(doneList));
        //     displayData(taskList);

        //     let priorityList = JSON.parse(localStorage.getItem("done-list")) || [];
        //     priorityList.push(ele);
        //     localStorage.setItem("dpne-list", JSON.stringify(doneList))
        // })
        tr.append(name, desc, start, end, priority);
        parent.append(tr);
    });

}
displayData(doneList);//