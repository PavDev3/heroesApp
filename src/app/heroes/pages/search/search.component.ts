import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { debounceTime, switchMap } from 'rxjs';
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

  constructor(private heroesService: HeroesService) {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value) => this.heroesService.getSuggestions(value!))
      )
      .subscribe((heroes) => {
        this.suggestions = heroes;
      });
  }

  filterHero(event: AutoCompleteCompleteEvent) {
    const query = event.query;
    this.heroesService.getSuggestions(query).subscribe((heroes) => {
      this.suggestions = heroes;
    });
  }
}
