import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  isLogin = false;
  constructor(private router: Router, ){
    
  }
  profile(){
    console.log('profile');
    this.router.navigate(['/profile']);
  }
  list(){
    this.router.navigate(['/blog-list']);
  }
}
