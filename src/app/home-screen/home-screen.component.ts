import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  constructor(private router: Router){
    
  }
  profile(){
    console.log('profile');
    this.router.navigate(['/profile']);
  }
  list(){
    this.router.navigate(['/blog-list']);
  }
}
