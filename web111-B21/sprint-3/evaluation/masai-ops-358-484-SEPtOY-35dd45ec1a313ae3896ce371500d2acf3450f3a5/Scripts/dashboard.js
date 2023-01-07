// you can write your js code here
let tbody = document.querySelector("tbody");
let totalCount = document.querySelector("#book-count");

let bookList = JSON.parse(localStorage.getItem("book-list"))||[];

//console.log(bookList)

function displayData(data){
    tbody.textContent =  null;
    totalCount.textContent = data.length;
    
    data.forEach(function(ele,i){

        let tr = document.createElement("tr");

        let Name = document.createElement("td");
         Name.textContent = ele.name;

        let Author = document.createElement("td");
         Author.textContent = ele.author;

        let Desc = document.createElement("td");
         Desc.textContent = ele.desc;

        let Added = document.createElement("td");
         Added.textContent = ele.added;

        let Category = document.createElement("td");
          Category.textContent = ele.category;

          let Price = document.createElement("td");
          Price.textContent = ele.price;
         
    
        let Buy = document.createElement("td");
         Buy.textContent = "Buy";
         Buy.style.backgroundColor = "green";
         Buy.style.width = "60px";
         Buy.style.border = "none";

         Buy.addEventListener("click" , function(){
            bookList.splice(i,1);
            localStorage.setItem("book-list" , JSON.stringify(bookList));
            displayData(bookList);

            let buyList =  JSON.parse(localStorage.getItem("buy-list"))||[];
            buyList.push(ele);
            
            localStorage.setItem("buy-list",JSON.stringify(buyList));


         })

        let Bookmark = document.createElement("td");
         Bookmark.textContent = "Add";
         Bookmark.style.backgroundColor = "red";
         Bookmark.style.border = "none";
         Bookmark.style.width = "80px";

         Bookmark.addEventListener("click" , function(){
            bookList.splice(i,1);
            localStorage.setItem("book-list" , JSON.stringify(bookList));
            displayData(bookList);

            let bookmarkList =  JSON.parse(localStorage.getItem("bookmark-list"))||[];
            bookmarkList.push(ele);
            
            localStorage.setItem("bookmark-list",JSON.stringify(bookmarkList));

         })

        tr.append(Name,Author,Desc,Added,Category,Buy,Bookmark,Price);
        tbody.append(tr);
    })

}

displayData(bookList);