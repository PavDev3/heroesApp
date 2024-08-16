import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { HeroesService } from '../../services/heroes.service';

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
export class NewHeroPage implements OnInit {
  characterForm: FormGroup;

  public publishers = [
    {
      name: 'DC Comics',
      id: 'DC Comics',
    },
    {
      name: 'Marvel',
      id: 'Marvel Comics',
    },
  ];

  heroId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {
    this.characterForm = this.fb.group({
      superHero: ['', Validators.required],
      alterEgo: [''],
      aparición: ['', Validators.required],
      personaje: [''],
      publisher: [null],
    });
  }
  onSubmit() {
    console.log(this.characterForm.value);
  }

  ngOnInit() {
    this.heroId = this.route.snapshot.params['id'];
    if (this.heroId) {
      this.loadHeroData(this.heroId);
    }
  }

  loadHeroData(id: number) {
    this.heroesService.getHeroesById(id).subscribe((hero) => {
      if (hero) {
        this.characterForm.patchValue({
          superHero: hero.superhero,
          alterEgo: hero.alter_ego,
          aparición: hero.first_appearance,
          personaje: hero.characters,
          publisher: hero.publisher,
        });
      }
    });
  }
}
