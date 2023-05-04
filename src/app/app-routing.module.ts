import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BlogListScreenComponent } from './blog-list-screen/blog-list-screen.component';
import { BlogFormScreenComponent } from './blog-form-screen/blog-form-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';

const routes: Routes = [
  {path:'', component:LoginScreenComponent},
  { path: 'pokemon', loadChildren: () => import('./features/pokemon/pokemon.module').then(m => m.PokemonModule) },
{path:'login',component:LoginScreenComponent},
{path:'home',component:HomeScreenComponent},
{path:'blog-list',component:BlogListScreenComponent},
{path:'blog-form',component:BlogFormScreenComponent},
{path:'profile',component:ProfileScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
