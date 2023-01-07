// you can write your js code here
// you can write your js code here
let tbody = document.querySelector("tbody");
let bookmarkList =  JSON.parse(localStorage.getItem("bookmark-list"))||[];

function displayData(data){
    tbody.textContent =  null;
   // totalCount.textContent = data.length;
    
    data.forEach(function(ele){

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
    
        // let Buy = document.createElement("button");
        //  Buy.textContent = "Buy";
        //  Buy.addEventListener("click" , function(event){
        //     bookList.splice(i,1);
        //     localStorage.setItem("book-list" , JSON.stringify(bookList));
        //     displayData(bookList);

        //     let buyList =  JSON.parse(localStorage.getItem("buy-list"))||[];
        //     buyList.push(ele);
            
        //     localStorage.setItem("buy-list",JSON.stringify(buyList));


        //  })

        // let Bookmark = document.createElement("button");
        //  Bookmark.textContent = "Bookmark";

        //  Bookmark.addEventListener("click" , function(event){
        //     bookList.splice(i,1);
        //     localStorage.setItem("book-list" , JSON.stringify(bookList));
        //     displayData(bookList);

        //  })

        tr.append(Name,Author,Desc,Added,Category,Price);
        tbody.append(tr);
    })

}

displayData(bookmarkList);