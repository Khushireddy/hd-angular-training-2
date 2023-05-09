import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BlogListScreenComponent } from './blog-list-screen/blog-list-screen.component';
import { BlogFormScreenComponent } from './blog-form-screen/blog-form-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) },
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: HomeScreenComponent, canActivate:[ AuthGuard ] },
  { path: 'blog-list', component: BlogListScreenComponent, canActivate:[ AuthGuard ] },
  { path: 'blog-form', component: BlogFormScreenComponent, canActivate:[ AuthGuard ] },
  { path: 'profile', component: ProfileScreenComponent,canActivate:[ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
