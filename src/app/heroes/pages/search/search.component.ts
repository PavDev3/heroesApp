import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AutoCompleteModule,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  standalone: true,
  selector: 'search-page',
  templateUrl: './search.component.html',
  imports: [AutoCompleteModule, ReactiveFormsModule, CommonModule],
})
export class SearchPage {
  constructor(private heroesService: HeroesService, private router: Router) {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.suggestions = heroes;
    });
  }

  onSelect(event: AutoCompleteSelectEvent) {
    if (!event.value) {
      this.selectedHero = undefined;

      return;
    }
    const hero: Hero = event.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
    const heroId = hero.id;

    this.router.navigateByUrl(`/heroes/${heroId}`);
  }
  public searchInput = new FormControl('');

  public suggestions: Hero[] = [];
  public filteredSuggestions: Hero[] = [];
  public selectedHero: Hero | undefined;

  filterHero(event: AutoCompleteCompleteEvent) {
    const filtered: Hero[] = [];
    const query = event.query;

    for (let i = 0; i < this.suggestions.length; i++) {
      const hero = this.suggestions[i];
      if (hero.id.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(hero);
      }
    }
    this.filteredSuggestions = filtered;
  }
}
