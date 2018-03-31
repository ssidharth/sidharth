import { AuthorService } from './service/author.service';
import {Component} from '@angular/core';


@Component({
    selector:'author-list',
    template:`<h1>{{title}}</h1>`
})

export class AuthorComponent{
    title="author-desk";
    authors;
    constructor(private authorService:AuthorService){
        this.authors=authorService.getAuthors();
    }
}
