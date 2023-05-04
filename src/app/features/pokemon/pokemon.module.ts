import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormComponent } from '../interfaces/components/form/form.component';
import { DetailComponent } from 'src/app/detail/detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from 'src/app/login-screen/login-screen.component';

import { BlogListScreenComponent } from 'src/app/blog-list-screen/blog-list-screen.component';
import { BlogFormScreenComponent } from 'src/app/blog-form-screen/blog-form-screen.component';
import { ProfileScreenComponent } from 'src/app/profile-screen/profile-screen.component';
import { ListComponent } from 'src/app/list/list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    PokemonComponent, 
    DetailComponent,
    FormComponent,
    LoginScreenComponent,
    
    BlogListScreenComponent,
    BlogFormScreenComponent,
    ProfileScreenComponent,
    ListComponent

    
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatMenuModule]
})
export class PokemonModule { }
