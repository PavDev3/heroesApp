import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
@Component({
  standalone: true,
  selector: 'list-page',
  templateUrl: './list.component.html',
  imports: [CardModule],
})
export class ListPage implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
