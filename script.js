let library = []
const addBookBtn = document.querySelector(".addBookBtn")
const exitBtn = document.querySelector(".exitButton")
const addBookCard = document.querySelector(".addBookCard")
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector(".card")
const mainLibrary = document.querySelector(".library-books")


let totalreadbook = 0;
let totalpage = 0;


class Book {
    constructor(name,author,page,isRead){
        this.name = name;
        this.author = author;
        this.page = page;
        this.isRead = isRead;
    }
}

addBookBtn.onclick = () => addBookCard.style.display = "block"

exitBtn.onclick = () => addBookCard.style.display = "none"

addBtn.onclick = () => {
    addLibrary();    
}


function addLibrary(){

    if (!form.checkValidity()) return;


    let bookName = document.querySelector(".name");
    let authorName = document.querySelector(".author") ;
    let pageCount = document.querySelector(".page")
    let bookİsRead = "Not Read"

    

    if(document.querySelector(".isRead").checked){
        bookİsRead = "Read"
        totalreadbook++
    }else{
        bookİsRead = "Not Read"
    }

    totalpage += parseInt(pageCount.value)


    const book = new Book(bookName.value,authorName.value,pageCount.value,bookİsRead);
    library.push(book);

    form.reset()
    addBookCard.style.display = "";
    addElement();

}



function addElement(){


    let lib = document.querySelector(".library-books")
    let libDiv = document.createElement("div");
    libDiv.classList.add("bookshelf")
    lib.appendChild(libDiv)


    let bookName = document.createElement("p")
    bookName.classList.add("book-name")
    bookName.innerHTML = library[library.length - 1].name;   
    libDiv.appendChild(bookName)
    
    let authorName = document.createElement("p")
    authorName.classList.add("book-author")
    authorName.innerHTML = library[library.length - 1].author;   
    libDiv.appendChild(authorName)

    let pageCount = document.createElement("p")
    pageCount.classList.add("book-page")
    pageCount.innerHTML = library[library.length - 1].page;
    libDiv.appendChild(pageCount)

    let bookisRead = document.createElement("p")
    bookisRead.classList.add("book-isRead")
    bookisRead.innerHTML = library[library.length - 1].isRead;
    if(library[library.length-1].isRead == "Not Read"){
        bookisRead.style.color = "red"
    }
    libDiv.appendChild(bookisRead)
    bookisRead.onclick = () =>{
        const index = library.findIndex(obj =>{
            return obj.name === bookName.innerHTML
        })
        if(bookisRead.innerHTML == "Not Read"){
            bookisRead.innerHTML = "Read"
            library[index].isRead = "Read"
            bookisRead.style.color = "green"
            totalreadbook++
        } else if (bookisRead.innerHTML == "Read"){
            bookisRead.innerHTML = "Not Read"
            library[index].isRead = "Not Read"
            bookisRead.style.color = "red"
            totalreadbook--
        }
        document.querySelector(".totalReadBooks").innerHTML = `READ BOOKS:${totalreadbook}`
    }

    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "X"
    deleteBtn.classList.add("removeBtn")
    deleteBtn.onclick=()=>{
        if(library.length != 0){
            const index = library.findIndex(obj =>{
                return obj.name === bookName.innerHTML
            })
            console.log(index,library.length)

            totalpage -= library[index].page
            totalreadbook--
            library.splice(index,1)
            lib.removeChild(libDiv)
            document.querySelector(".totalPages").innerHTML = `TOTAL PAGE:${totalpage}`
            document.querySelector(".totalReadBooks").innerHTML = `READ BOOKS:${totalreadbook}`
            document.querySelector(".totalBooks").innerHTML = `TOTAL BOOKS:${library.length}`

        }
    }
    libDiv.appendChild(deleteBtn)  

    document.querySelector(".totalReadBooks").innerHTML = `READ BOOKS:${totalreadbook}` 
    document.querySelector(".totalPages").innerHTML = `TOTAL PAGE:${totalpage}`
    document.querySelector(".totalBooks").innerHTML = `TOTAL BOOKS:${library.length}`

}   




