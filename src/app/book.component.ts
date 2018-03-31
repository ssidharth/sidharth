import { BookService } from './service/book.service';


import { Component } from '@angular/core';
@Component({
selector:'book',

template:   `<img [src]="imageUrl">
         <div [id] ="class"></div>
`



})


export class BookComponent{
    imageUrl="http://lorempixel.com/400/200/";
    class="gsdhd";
    title="Book Deta";
    authors;
    constructor(private bookServ :BookService){
        this.authors=bookServ.bookfunc();
    }
        
}
