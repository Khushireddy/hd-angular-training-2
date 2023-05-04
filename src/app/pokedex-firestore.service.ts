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
export class PokedexFirestoreService {
  private pokemonCollection: CollectionReference<DocumentData>;
  private blogCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.pokemonCollection = collection(this.firestore, 'pokemon');
    this.blogCollection = collection(this.firestore, 'blog');
   }

   getAll() {
    return collectionData(this.pokemonCollection, {
      idField: 'id',
    }) as Observable<Pokemon[]>;
   }

   getAllBlag() {
    return collectionData(this.blogCollection, {
      idField: 'id',
    }) as Observable<Blog[]>;
   }

   get(id: string) {
    const pokemonDocumentReference = doc(this.firestore,`pokemon/${id}`);
    return docData(pokemonDocumentReference,{ idField: 'id'});
   }

   create(pokemon: Pokemon) {
    return addDoc(this.pokemonCollection, pokemon);
   }
   createBlog(blog:Blog){
    console.log(blog);
    return addDoc(this.blogCollection, blog);
   }

   update(pokemon: Pokemon) {
    const pokemonDocumentReference = doc( this.firestore, `pokemon/${pokemon.id}`);
    return updateDoc(pokemonDocumentReference, { ...pokemon });
   }

   delete(id: string) {
    const pokemonDocumentReference = doc(this.firestore, `pokemon/${id}`);
   return deleteDoc(pokemonDocumentReference);
   }
}

