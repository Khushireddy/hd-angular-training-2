import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
}
from '@firebase/firestore';

  import { Firestore, collectionData, docData } from '@angular/fire/firestore';

  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Pokemon  } from './features/interfaces/pokemon.interface';
import { Blog } from './model/blog.interface';
  
@Injectable({
  providedIn: 'root' ,
})
export class BlogFirestoreService {

  private blogCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
   
    this.blogCollection = collection(this.firestore, 'blog');
   }

   getAll() {
    return collectionData(this.blogCollection, {
      idField: 'id',
    }) as Observable<Pokemon[]>;
   }

   getAllBlag() {
    return collectionData(this.blogCollection, {
      idField: 'id',
    }) as Observable<Blog[]>;
   }

   get(id: string) {
    const blogDocumentReference = doc(this.firestore,`blog/${id}`);
    return docData(blogDocumentReference,{ idField: 'id'});
   }

   create(blog: Blog) {
    return addDoc(this.blogCollection, blog);
   }
   createBlog(blog:Blog){
    console.log(blog);
    return addDoc(this.blogCollection, blog);
   }

   update(blog: Blog) {
    const blogDocumentReference = doc( this.firestore, `blog/${blog.id}`);
    return updateDoc(blogDocumentReference, { ...blog });
   }

   delete(id: string) {
    const blogDocumentReference = doc(this.firestore, `blog/${id}`);
   return deleteDoc(blogDocumentReference);
   }
}

