import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexFirestoreService } from '../pokedex-firestore.service';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog.interface';

@Component({
  selector: 'app-blog-list-screen',
  templateUrl: './blog-list-screen.component.html',
  styleUrls: ['./blog-list-screen.component.css']
})
export class BlogListScreenComponent implements OnInit {

  blogs:Observable<Blog[]>;

  constructor(private router: Router,
    private readonly pokedexService:PokedexFirestoreService) {}

  AddBlog(){
     console.log('AddBlog...');
     this.router.navigate(['/blog-form']);
  }

  ngOnInit() {
    
  }

  editBlog(blog: any) {
    
  }
  getAll() {
    this.blogs = this.pokedexService.getAllBlag();
   }

}
