import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  standalone: true,
  selector: 'new-hero-page',
  templateUrl: './new-hero.component.html',
  imports: [
    DividerModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CardModule,
  ],
})
export class NewHeroPage {
  characterForm: FormGroup;

  public publishers = [
    {
      name: 'DC Comics',
      id: 'DC Comics',
    },
    {
      name: 'Marvel Comics',
      id: 'Marvel Comics',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.characterForm = this.fb.group({
      superHero: [''],
      alterEgo: [''],
      aparición: [''],
      personaje: [''],
      publisher: [null],
    });
  }
  onSubmit() {
    console.log(this.characterForm.value);
  }
}
