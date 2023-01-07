// you can write your js code here

let bookList = JSON.parse(localStorage.getItem("book-list"))||[];
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

let Form = {
    name : form.name.value,
    author : form.author.value,
    desc : form.desc.value,
    added : form.added.value,
    category : form.category.value,
    price : form.price.value,
};
bookList.push(Form);
console.log(bookList)
localStorage.setItem("book-list",JSON.stringify(bookList));



















    
})