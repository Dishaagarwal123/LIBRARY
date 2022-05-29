//OOPs
class Book{
    constructor(book,author,category){
        this.book=book;this.author=author;this.category=category
    }
}
function deletes(d){
   const rowindex=(d.parentNode.parentNode.rowIndex);
   const tabledel= document.getElementsByTagName('tr')[rowindex];
   const table_body=document.getElementsByTagName('tbody')[0];
   table_body.removeChild(tabledel);
}
class Displaybook{
    constructor(book){
        this.book=book;
    }
    addbook(){
        const tbody=document.getElementById('tbody');
        const data=document.createElement('tr');
        data.innerHTML = ` <th scope="row">1</th>
                       <td>${this.book.book}</td>
        <td>${this.book.author}</td>
        <td>${this.book.category}</td>
        <td> <button class='btn btn-danger' onclick={deletes(this)}> Delete</button></td> `

        tbody.append(data)
    }
}

const libraryform = document.getElementById('library_form');
libraryform.addEventListener('submit', libraryformsubmit);
function libraryformsubmit(e){
    e.preventDefault(); //removes default features of submit button : refresh for eg
    console.log('submitted🎉');
    const book= document.getElementById('book').value;
    const author= document.getElementById('author').value;
    const cooking= document.getElementById('cooking');
    const gaming= document.getElementById('gaming');
    const coding= document.getElementById('coding');
    const alerts=document.getElementById('alerts');
    if(cooking.checked){
        category="cooking";
    }
    else if(gaming.checked){
        category="gaming";
    }
    else{
        category="coding";
    }
    if(book!="" && author!=""){
        const b=new Book(book,author,category);
        console.log(b);
        const displaybook= new Displaybook(b);
        displaybook.addbook();
        
        alerts.innerHTML=`<div class "alert alert-success" role="alert">
       Book📗 has been added successfully🎊</div>`
    }
    else{
        alerts.innerHTML=`<div class "alert alert-danger" role="alert">
  ⚠ please insert both book and author name❗❗</div>`
    }

libraryform.reset();

setTimeout(()=>{
    alerts.innerHTML=``
},3000)
}

