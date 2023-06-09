class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

class UI{

    addBookToList(book){

        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td ><a href = "#" class="delete">x</a></td>
        
        `;
        
        list.appendChild(row);
         

    }

    showError(msg,className){

        const div = document.createElement('div');
     div.className = `alert ${className}`;

     div.appendChild(document.createTextNode(msg));

     const container = document.querySelector('.container');

     const form = document.querySelector('#book-form');

     container.insertBefore(div,form);

     setTimeout(function(){
         document.querySelector('.alert').remove();
     },3000);




    }

    deletebook(target){
        if (target.className === 'delete'){
            target.parentElement.parentElement.remove();
   
       }

    } 

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }


}

document.getElementById('book-form').addEventListener('submit',function(e){
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value ;

    const book = new Book(title,author,isbn);

    const ui = new UI();

    if (author === '' || title ==='' || isbn ===''){

        ui.showError(' Please fill all the Fields','error');

    } else{


        ui.addBookToList(book);

        ui.showError('Book added successfully','sucess');
        //   console.log(title,author,isbn);

    ui.clearFields();
    }

   

          e.preventDefault();

});

document.getElementById('book-list').addEventListener('click',function(e){

    const ui = new UI();
    ui.deletebook(e.target);

    ui.showError('Book deleted!','sucess ');

    e.preventDefault(); 
});
