import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  email: string;
  password: string;
  constructor(private router: Router){}
  login(){
    console.log('login....');
    localStorage.setItem('user',this.email )
    this.router.navigate(['/home']);
  }
}
