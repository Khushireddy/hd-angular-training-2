import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../../pokemon.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly FormBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly pokemon: Pokemon
  ){}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.FormBuilder.group({
      name: [this.pokemon.name, [Validators.required]],
      type: [this.pokemon.type, [Validators.required]],
      description: [this.pokemon.description, [Validators.required]],
      height: [this.pokemon.height, [Validators.required]],
      weight: [this.pokemon.weight, [Validators.required]],
      imageUrl: [this.pokemon.imageUrl, [Validators.required]],
    });
    
  }
  errors(){
    Object.keys(this.form.controls).forEach(key => {
      const controlErrors = this.form.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
  submit() {
    this.errors();
    this.dialogRef.close({ ...this.pokemon, ...this.form.value});
  }
}
