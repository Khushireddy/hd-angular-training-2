import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { BlogListScreenComponent } from './blog-list-screen/blog-list-screen.component';
import { BlogFormScreenComponent } from './blog-form-screen/blog-form-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { PokemonModule } from './features/pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    PokemonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
