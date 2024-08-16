import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroesById(id: number): Observable<Hero | undefined> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getSuggestions(query: string): Observable<Hero[]> {
    if (query.length < 3) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?super=${query}`);
  }

  updateHero(id: number, hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${id}`, hero);
  }
}
