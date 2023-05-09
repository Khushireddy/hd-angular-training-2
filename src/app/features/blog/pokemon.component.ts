import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, filter, takeUntil, tap } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon.interface';
import { FormComponent } from '../interfaces/components/form/form.component';
import { BlogFirestoreService } from 'src/app/blog-firestore.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  allpokemon$: Observable<Pokemon[]>;
  selectedPokemon?: Pokemon;
  destroyed$ = new Subject<void>();
  
  constructor(
    private readonly pokedexService: BlogFirestoreService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allpokemon$ = this.pokedexService.getAll();
    
  }

  addPokemon() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
    .afterClosed()
    .pipe(
      filter(Boolean),
      tap((pokemon) => this.pokedexService.create(pokemon)),
      takeUntil(this.destroyed$) //will force the Observable to complete when destroyed$ emits a value 
      )
    .subscribe();
  }

  updatePokemon(){
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedPokemon },
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((pokemon) => this.pokedexService.update(pokemon)),
        tap((pokemon) => this.selectPokemon(pokemon))
      )
      .subscribe();
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  deletePokemon() {
    this.pokedexService.delete(this.selectedPokemon!.id);
    this.selectedPokemon = undefined;
  }

  ngOnDestroy(){
    this.destroyed$.next();
  }

}
