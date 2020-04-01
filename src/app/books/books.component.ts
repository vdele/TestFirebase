import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { defineBase } from '@angular/core/src/render3';
import { convertMetaToOutput } from '@angular/compiler/src/render3/util';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {

  public books:  Observable<any[]>;

  public model: any = {};


  private bookCounter = 0;


  private filter = '';

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.books = this.db.collection("/books").valueChanges();
  }

  public updateBook(idBook): void {
  }
  
  public addBook(): void {

    // Add a new document with a generated id.
    var book = this.db.firestore.collection("books").doc();

    // later...
    book.set({
      title : this.model.title,
      author : this.model.author,
      uid : book.id
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

}
