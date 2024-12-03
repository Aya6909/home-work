const Book = {
    title: "Anlam Arama",
    author: "Hazal Yilmaz",
    pages: 500,
    isRead: false,

readBook() {
        console.log(`Сіз ${this.title} кітабын ${this.author} жазған оқып жатырсыз.`); 
},

toggleReadStatus() { 
        this.isRead = !this.isRead; 
        console.log(`Оқу күйі жаңартылды: ${this.isRead}.`); 
    }
};

Book.readBook();
Book.toggleReadStatus();
Book.readBook();