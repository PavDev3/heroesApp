import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
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
  public searchInput = new FormControl('');

  public suggestions: Hero[] = [];
  public filteredSuggestions: Hero[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.suggestions = heroes;
    });
  }

  filterHero(event: AutoCompleteCompleteEvent) {
    const filtered: Hero[] = [];
    const query = event.query;

    for (let i = 0; i < this.suggestions.length; i++) {
      const hero = this.suggestions[i];
      if (hero.superhero.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(hero);
      }
    }
    this.filteredSuggestions = filtered;
  }
}
