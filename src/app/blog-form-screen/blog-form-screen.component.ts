import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../model/blog.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BlogFirestoreService } from '../blog-firestore.service';


@Component({
  selector: 'app-blog-form-screen',
  templateUrl: './blog-form-screen.component.html',
  styleUrls: ['./blog-form-screen.component.css']
})
export class BlogFormScreenComponent implements OnInit{
  form: FormGroup;
  blog: any;
  constructor(private readonly FormBuilder: FormBuilder,
    private readonly blogStoreService: BlogFirestoreService){}
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
      this.blogStoreService.createBlog(this.blog);
    }
   
}
