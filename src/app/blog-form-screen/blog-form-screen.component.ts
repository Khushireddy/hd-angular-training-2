import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../model/blog.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokedexFirestoreService } from '../pokedex-firestore.service';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog-form-screen',
  templateUrl: './blog-form-screen.component.html',
  styleUrls: ['./blog-form-screen.component.css']
})
export class BlogFormScreenComponent implements OnInit{
  form: FormGroup;
  blog: any;
  constructor(private readonly FormBuilder: FormBuilder,
    private readonly pokedexService: PokedexFirestoreService){}
   ngOnInit(){
    this.setForm();
   }
  
   setForm() {
    this.form = this.FormBuilder.group({
      name: ['', [Validators.required]],
      description:['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      isActive:['']
    });
    
  }
  submit(){
      
      this.blog = { ...this.blog, ...this.form.value};
      console.log(this.blog);
      this.pokedexService.createBlog(this.blog);
    }
   
}
